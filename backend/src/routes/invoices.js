const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const db = require('../db');
const { authenticateToken } = require('../auth');

router.get('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const userRole = req.user.role;

  try {
    // 1. Fetch order
    const orders = await db.query(
      'SELECT o.*, u.name as customer_name, u.email as customer_email FROM orders o JOIN users u ON o.user_id = u.id WHERE o.id = ?',
      [id]
    );
    const order = orders && orders[0];

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    // 2. Validate authorization: Customer can only download their own invoice; admin can download any.
    if (userRole !== 'admin' && order.user_id !== userId) {
      return res.status(403).json({ message: 'Access denied. You can only access your own invoices.' });
    }

    // 3. Fetch items
    const items = await db.query(
      'SELECT oi.*, p.name as product_name, p.unit FROM order_items oi JOIN products p ON oi.product_id = p.id WHERE oi.order_id = ?',
      [id]
    );

    // 4. Generate PDF
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    
    // Set headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=Invoice_BuildMart_${order.id}.pdf`);
    
    doc.pipe(res);

    // Color Palette
    const primaryColor = '#1a365d'; // Deep Industrial Blue
    const secondaryColor = '#e65c00'; // Safety Orange
    const lightColor = '#718096'; // Grey
    const blackColor = '#2d3748'; // Dark Slate

    // Header logo / title
    doc.fillColor(primaryColor)
       .fontSize(24)
       .text('BUILDMART', 50, 50, { bold: true })
       .fontSize(10)
       .fillColor(secondaryColor)
       .text('Hardware & Construction Materials Store', 50, 75)
       .fillColor(lightColor)
       .text('123 Industrial Way, Builders Zone', 50, 90)
       .text('Phone: +91 9876543210 | support@buildmart.com', 50, 102);

    // Invoice Meta (right aligned)
    doc.fillColor(blackColor)
       .fontSize(18)
       .text('INVOICE', 400, 50, { align: 'right' })
       .fontSize(10)
       .text(`Invoice Number: BM-${order.id.toString().padStart(6, '0')}`, 400, 75, { align: 'right' })
       .text(`Order Date: ${new Date(order.created_at).toLocaleDateString()}`, 400, 90, { align: 'right' })
       .text(`Payment: ${order.payment_method.toUpperCase()}`, 400, 102, { align: 'right' })
       .fillColor(secondaryColor)
       .text(`Status: ${order.status.toUpperCase()}`, 400, 115, { align: 'right' });

    // Draw horizontal line
    doc.moveTo(50, 140).lineTo(545, 140).strokeColor('#e2e8f0').lineWidth(1).stroke();

    // Bill To details
    doc.fillColor(primaryColor)
       .fontSize(12)
       .text('BILL TO:', 50, 160, { bold: true })
       .fillColor(blackColor)
       .fontSize(10)
       .text(order.customer_name, 50, 175)
       .text(`Email: ${order.customer_email}`, 50, 187)
       .text(`Phone: ${order.phone}`, 50, 199)
       .text(`Address: ${order.shipping_address}`, 50, 211, { width: 250 });

    // Table Header
    const tableTop = 260;
    doc.fillColor(primaryColor)
       .fontSize(10)
       .text('Description', 50, tableTop, { bold: true })
       .text('Unit Price', 300, tableTop, { bold: true, width: 80, align: 'right' })
       .text('Qty', 390, tableTop, { bold: true, width: 60, align: 'right' })
       .text('Total', 470, tableTop, { bold: true, width: 75, align: 'right' });

    // Draw line under table header
    doc.moveTo(50, tableTop + 15).lineTo(545, tableTop + 15).strokeColor(primaryColor).lineWidth(1).stroke();

    let currentY = tableTop + 25;
    
    // Table Items
    items.forEach((item, index) => {
      // Check if text wraps or moves off page (handle simple item lists)
      doc.fillColor(blackColor)
         .text(item.product_name, 50, currentY, { width: 230 })
         .text(`INR ${parseFloat(item.price).toFixed(2)}`, 300, currentY, { width: 80, align: 'right' })
         .text(`${item.quantity} ${item.unit || 'pcs'}`, 390, currentY, { width: 60, align: 'right' })
         .text(`INR ${(item.price * item.quantity).toFixed(2)}`, 470, currentY, { width: 75, align: 'right' });

      // Draw light line between rows
      doc.moveTo(50, currentY + 18).lineTo(545, currentY + 18).strokeColor('#edf2f7').lineWidth(0.5).stroke();
      currentY += 25;
    });

    // Subtotal / Totals
    const totalY = currentY + 10;
    doc.fillColor(primaryColor)
       .fontSize(12)
       .text('Total Amount:', 350, totalY, { bold: true })
       .text(`INR ${parseFloat(order.total_amount).toFixed(2)}`, 450, totalY, { bold: true, width: 95, align: 'right' });

    // Footer
    const footerY = 750;
    doc.moveTo(50, footerY - 10).lineTo(545, footerY - 10).strokeColor('#e2e8f0').lineWidth(1).stroke();
    doc.fillColor(lightColor)
       .fontSize(9)
       .text('Thank you for shopping at BuildMart!', 50, footerY, { align: 'center' })
       .text('This is a computer-generated invoice and does not require a physical signature.', 50, footerY + 12, { align: 'center' });

    doc.end();
  } catch (err) {
    console.error("Invoice PDF generation error:", err);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Internal server error generating invoice PDF.' });
    }
  }
});

module.exports = router;
