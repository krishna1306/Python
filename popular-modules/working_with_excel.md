# Working with Excel

## `openpyxl`

```bash
pipenv install openpyxl
```

```python
import openpyxl

# Create an empty workbook object
# wb_empty = openpyxl.Workbook()

# Or Load an existing workbook from disk
wb = openpyxl.load_workbook("sample.xlsx")

# Print sheetnames using the attribute "sheetnames"
print(wb.sheetnames)

# Load the sheet into memory - "Sheet1" is the name of the existing sheet
sheet = wb["Sheet1"]

# Other attributes of sheet object
sheet.max_rows # Total rows in the sheet
sheet.max_columns # Total columns in the sheet

# Create a new sheet before "Sheet1" - Use the index as second argument
wb.create_sheet("Sheet2", 0)

# Remove sheet - it takes sheet object as input - NOT A STRING
wb.remove_sheet(sheet)

# Get a cell from the sheet using the excel's address
cell = sheet["a1"]
# Another way of getting a cell from the sheet - using a method
cell = sheet.cell(row=1,column=1)

# Get a tuple of all cells in a given column
column = sheet["a"]

# Get a tuple (of tuples) of all cells in a range of columns
multiple_columns = sheet["a:c"]

# Print cell value
print(cell.value)

# Other attributes of cell object
cell.row # For row number. Ex. 1
cell.column # For column index. Ex. A
cell.coordinate # For row+column. Ex: A1
```

#### Print all cells in a sheet

```python
# "sheet.cell" method doesn't use '0' index
# Hence, we need to add '1' to both row and column number while using 'range' function
for row in range(1, sheet.max_row + 1):
  for column in range(1, sheet.max_column + 1):
    cell = sheet.cell(row, column)
    print(cell.value)
```

#### Add | Delete | Modify rows and columns

```python
# Append a new row at the end with the given values
sheet.append([1,2,3])

# Insert a new row at a given index
sheet.insert_rows()

# Insert a new column at a given index
sheet.insert_cols()

# Delete Rows or columns
sheet.delete_rows()
sheet.delete_cols()
```

#### Save the workbook

```python
wb.save("sample2.xlsx")
```

