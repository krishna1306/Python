# Sending Emails

```python
# MIME - Multi-Purpose Internet Mail Extensions = Mail Formatting Guidelines (Standards)
# MIMEMultipart - A class that can send both HTML and plain text emails
from email.mime.multipart import MIMEMultipart

# To send "text" or "HTML" in the body of the email
from email.mime.text import MIMEText


message = MIMEMultipart()
message["from"] = "Krishna"
message["to"] = "test@test.com"
message["subject"] = "This is a test"

# "attach" method to add the BODY to the email
# multiple types of data can be added - text, html, images etc.,
message.attach(MIMEText("Body"))
```

If you want to pass `html` text to the email, then

```python
# the second parameter while creating "MIMEText" object indicates the type of body
# second parameter is "plain_text" by default
message.attach(MIMEText("<html>some-text</html>","html"))
```

To send images in the body, use `MIMEImage` class in `email.mime.image` module

```python
from email.mime.image import MIMEImage
from pathlib import Path

# MIMEImage object expects image data in binary format
message.attach(MIMEImage(Path(sample.png).read_bytes()))
```



Mail is ready. Now we need to send it using **SMTP**

```python
import smtplib

with smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
  # Say "Hello" to SMTP server - this is as per SMTP protocol
  smtp.ehlo()
  # Encrypt all the communication using TLS
  smtp.starttls()
  # Login with your gmail credentials (or whichver server you are using)
  smtp.login("testuser@test.com", "this-is-a-password")
  # Send the message
  smtp.send_message(message)
  print("..Sent")
```

