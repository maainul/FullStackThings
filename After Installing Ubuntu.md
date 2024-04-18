# After Installing Ubuntu

## Update :

```
sudo apt-get update
sudo apt-get upgrade
```
## Install Chrome :

```
cd Downloads/
ls
sudo dpkg -i google-chrome-stable_current_amd64.deb 
```
## Install Java

```
java --version
sudo apt install openjdk-8-jre-headless
```
## Install STS:

```
mkdir SpringTools
cd SpringTools/
ls
tar zxvf ~/Downloads/spring-tool-suite-4-4.8.0.RELEASE-e4.17.0-linux.gtk.x86_64.tar.gz
ls
cd sts-4.8.0.RELEASE/
ls
./SpringToolSuite4 &
cd ../
touch sts.desktop
sudo gedit /usr/share/applications/sts.desktop
```
## Install Git:

```
sudo apt-get update
sudo apt-get upgrade
git --version
sudo apt install git
git config --global user.name "maainul"
git config --global user.email mainul080@yahoo.com

```
## Install Yakuake
```
sudo apt-get install yakuake
sudo apt-get update
sudo apt-get upgrade
sudo apt install snapd
sudo snap install snap-store
sudo snap help refresh
````
## Install Sublime:
```
sudo snap install sublime-text --classic
```
## Snap Store
```
sudo apt update
sudo apt install snapd
sudo snap install hello-world
sudo snap install snap-store
```
## Autoremove and clean

```
sudo apt-get clean
sudo apt-get update
sudo apt-get upgrade -f
sudo apt autoremove
```
## Remove Mysql

```
mysql -u root -p
which mysql
dpkg -l | grep mysql
sudo apt-get remove --purge mysql-server mysql-client mysql-common -y
sudo apt-get autoremove -y
sudo apt-get autoclean
rm -rf /etc/mysql
sudo find / -iname 'mysql*' -exec rm -rf {} \;
```

 sudo snap abort 13
snap changes
