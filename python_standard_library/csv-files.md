# Working with CSV files

```python
import csv

with open("data.csv", "w") as file:
  # Create a CSV writer
  writer = csv.writer(file)
  # Pass an array to ".writerow" method of "writer" object
  writer.writerow(["transaction_id", "product_id", "price"])
  writer.writerow([1000,1,4])
  writer.writerow([1001,2,5])
  
with open("data.csv", "r") as file:
  # Create a CSV Reader
  reader = csv.reader(file)
  # See all content as list of lists
  list(reader)
  
```

`list(reader)` will move the cursor after reading. So, to read the contents in a workable way

```python
with open("data.csv", "r") as file:
  # Create a CSV Reader
  reader = csv.reader(file)
  
  for row in reader:
    print(row)
```

