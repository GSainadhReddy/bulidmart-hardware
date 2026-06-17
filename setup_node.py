import os
import sys
import urllib.request
import zipfile
import shutil

NODE_URL = "https://nodejs.org/dist/v20.11.1/node-v20.11.1-win-x64.zip"
ZIP_NAME = "node_portable.zip"
TARGET_DIR = "node_portable"
TEMP_DIR = "node-v20.11.1-win-x64"

def report_progress(block_num, block_size, total_size):
    read_so_far = block_num * block_size
    if total_size > 0:
        percent = min(100, read_so_far * 100 // total_size)
        sys.stdout.write(f"\rDownloading: {percent}% ({read_so_far // (1024*1024)}MB / {total_size // (1024*1024)}MB)")
        sys.stdout.flush()
    else:
        sys.stdout.write(f"\rDownloading: {read_so_far // (1024*1024)}MB")
        sys.stdout.flush()

def main():
    if os.path.exists(TARGET_DIR):
        print(f"Portable Node.js folder '{TARGET_DIR}' already exists. Skipping setup.")
        sys.exit(0)

    print(f"Fetching Node.js from {NODE_URL}...")
    try:
        urllib.request.urlretrieve(NODE_URL, ZIP_NAME, report_progress)
        print("\nDownload complete. Extracting files...")
    except Exception as e:
        print(f"\nFailed to download Node.js: {e}")
        sys.exit(1)

    try:
        with zipfile.ZipFile(ZIP_NAME, 'r') as zip_ref:
            zip_ref.extractall(".")
        print("Extraction complete.")
    except Exception as e:
        print(f"Failed to extract zip file: {e}")
        sys.exit(1)

    # Clean up zip
    if os.path.exists(ZIP_NAME):
        os.remove(ZIP_NAME)

    # Rename extracted folder to node_portable
    if os.path.exists(TEMP_DIR):
        if os.path.exists(TARGET_DIR):
            shutil.rmtree(TARGET_DIR)
        os.rename(TEMP_DIR, TARGET_DIR)
        print(f"Renamed {TEMP_DIR} to {TARGET_DIR}.")
    else:
        print(f"Warning: Expected folder '{TEMP_DIR}' not found. Manual adjustment may be required.")

    # Test execution
    node_exe = os.path.join(TARGET_DIR, "node.exe")
    if os.path.exists(node_exe):
        print("Portable Node.js setup successfully!")
        os.system(f'"{node_exe}" -v')
    else:
        print("Error: node.exe not found in node_portable.")
        sys.exit(1)

if __name__ == "__main__":
    main()
