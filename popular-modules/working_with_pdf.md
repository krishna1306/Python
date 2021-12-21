# Working with PDF

## `pypdf2`

```bash
pipenv install pypdf2
```

```python
import pypdf2
```

There are a few classes in this module to work with PDF

- `PdfFileReader`
- `PdfFileWriter`
- `PdfFileMerger`

### Read PDF and Rotate it

```python
# Open the PDF file in binary mode
with open("sample.pdf", "rb") as pdf:
  # "reader" object has a few attributes and methods
  reader = pypdf2.PdfFileReader(pdf)
  
  # print the number of pages
  print(reader.numPages)
  
  # Read pages using index - Reading 1st page 
  page = reader.getPage(0)
  
  # Rotate 90 degrees clockwise - This is just happening in memory
  page.rotateClockwise(90)
  
  # Create a writer object in memory
  writer = PdfFileWriter()
  
  # Add the page to the writer object
  writer.addPage(page)
  
  # Write it to another file - Open in binary mode
  with open("sample-out.pdf", "wb") as outpdf:
    writer.write(outpdf)
```

### Merge Multiple PDFs

```python
import pypdf2

# If the files are in the same directory as the python code, just the name is enough
files = ["first.pdf", "second.pdf"]

# Create a merger object
merger = pypdf2.PdfFileMerger()

# First, merge the files in memory
for file in files:
  merger.append(file)
  
# Write the merged file to a real file
merger.write("combined.pdf")
```

