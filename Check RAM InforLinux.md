Check RAM Infor :
----------------------------------
# Method -1:
---------------------
free -h
sudo dmidecode --type memory | less

# Solution -2:
------------------- 
sudo lshw


# Method 3: 

sudo dmidecode -t 16

sudo dmidecode -t 17


# Check Health of Memory :
----------------------------------------

sudo apt-get install memtester


You can then use it like so:

sudo memtester 1024 2


