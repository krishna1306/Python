# PIP - Basics

Although PIP comes along with python installation, it is developed and managed independently

### Install | Uninstall | Upgrade

```bash
# Install
pip3 install requests

# Install a specific version
pip3 install requests==2.9.0

# You can also use wild-cards while installing
# Now PIP will install the latest version in the place of "*"
pip3 install requests==2.9.*

# Install the latest compatible version with the mentioned version
pip3 install requests~=2.9.0

# Uninstall
pip3 uninstall requests

# Upgrade PIP
pip3 install --upgrade pip
```

```bash
# See all installed pacakges
pip3 list
```

