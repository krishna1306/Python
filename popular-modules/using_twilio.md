# Twilio - Sending messages

```bash
pipenv install twilio
```

```python
from twilio.rest import Client

# You get SID from your Twilio account
account_sid = "somesidvalue"

# You get the auth token from Twilio account
auth_token = "someauthtoken"

client = Client(account_sid, auth_token)
```

This `Client` object has several methods to send messages

- Plain messages
- Chats (interactive messages)
- Video
- Calls
- Fax

_etc.,_

```python
call = client.messages.create(
	to = "<to-phone-number>",
	from = "<from-phone-number>",
	body = "This is the first message"
)
```

This `call` object that is returned, will have attributes for "Date sent", "Date created" etc.,