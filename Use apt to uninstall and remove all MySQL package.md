# Use apt to uninstall and remove all MySQL packages:

```.bash

sudo apt-get remove --purge mysql-server mysql-client mysql-common -y
sudo apt-get autoremove -y
sudo apt-get autoclean

```
## Remove the MySQL folder:

```.bash
rm -rf /etc/mysql
```

## Delete all MySQL files on your server:

```.bash
sudo find / -iname 'mysql*' -exec rm -rf {} \;

```
Your system should no longer contain default MySQL related files.