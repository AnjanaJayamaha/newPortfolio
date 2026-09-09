import fitz  # PyMuPDF
import os

pdf_dir = r"c:\Users\wijesingha\Documents\newPortfolio\portfolio-frontend\src\assets\certificates"

for filename in os.listdir(pdf_dir):
    if filename.endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, filename)
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)  # load first page
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # high resolution
        output_filename = filename.replace(".pdf", ".png")
        output_path = os.path.join(pdf_dir, output_filename)
        pix.save(output_path)
        print(f"Converted {filename} to {output_filename}")
        doc.close()
