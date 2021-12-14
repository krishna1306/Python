## STACK -> **Last In - First Out**

_Example_ : Imagine a browser keeping track of the links you followed. When you press the back button, browser takes you to last link you were in.

```python
browsing_session = []
browsing_session.append(1)
browsing_session.append(2)
browsing_session.append(3)

# Remove the last item
last = browsing_session.pop()
```

## Queues -> First In - First Out

```python
from collections import deque

# deque has similar methods as a list
queue = deque([])

queue.append(1)
queue.append(2)
queue.append(3)

# to remove an item at the beginning
queue.popleft()
```

