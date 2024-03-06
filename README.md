# How to install virtual env and django
```
$ mkdir dev3
$ cd dev3
$ mkdir trydjango
$ cd trydjango
$ ls
$ virtualenv
$ virtualenv -p python3 .
$ ls
bin  include  lib  pip-selfcheck.json
$ source bin/activate
$ pip install django==2.0.7
```
# Create a new project in Django
```
cd dev1/trydjango/
ls
source bin/activate
ls
mkdir src
cd src
django-admin startproject trydjango .
Python manage.py runserver
```
# Create objects by using shell
```
cd dev/trydjango
ls
source bin/activate
ls
cd src 
ls
python manage.py shell
            from products.models import Product
            Product.objects.all()
            product.objects.create(title="this is title 1",description="this is description",price="345.00",summary="this is             summary 1")
```
# Create superuser 
```
python manage.py createsuperuser
```
# How to install Python
```
sudo apt-get install python3
sudo apt-get install python3-pip
```
# Docker 
## Install Docker For Ubantu: 
            https://docs.docker.com/install/linux/docker-ce/ubuntu/
## Install Docker For MAC: 
            https://store.docker.com/editions/community/docker-ce-desktop-mac
## Install Docker For Windows:
            https://store.docker.com/editions/community/docker-ce-desktop-windows
## Install mysql in linux:
```
            https://support.rackspace.com/how-to/installing-mysql-server-on-ubuntu/
            For ERROR 1054 (42S22): Unknown column 'Password' in 'field list':
            https://stackoverflow.com/questions/30692812/mysql-user-db-does-not-have-password-columns-installing-mysql-on-osx
            ERROR 1698 (28000): Access denied for user 'root'@'localhost'
            https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost
            
            sudo apt-get update
            sudo apt-get install mysql-server
            sudo ufw allow mysql
            systemctl start mysql
            systemctl enable mysql
            sudo mysql -u root
            ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new-password';
   ```
 ## Remove mysql
   ```
            sudo apt-get purge mysql*
            sudo apt-get autoremove
            sudo apt-get autoclean
            sudo apt-get remove dbconfig-mysql
            sudo apt-get dist-upgrade
            ```          
## Remove mysql:
            https://askubuntu.com/questions/172514/how-do-i-uninstall-mysql
### @Docker Commands
```
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq
```
## Install Sublime 3
```
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
sudo apt-get update
sudo apt-get install sublime-text
```
LinK : https://itsfoss.com/sublime-text-3-linux/
## Download Youtube Video 
```
sudo apt-get install youtube-dl
youtube-dl cit (link)
```
Video Tutorial Link :https://www.youtube.com/watch?v=Th1Kk4HsLWE 
## Install pip
```
sudo apt-get update && sudo apt-get -y upgrade
sudo apt-get install python-pip
pip -V
```
## Install Theme in ubuntu
```
1.First Install Tweak Tools:
  sudo apt-get install gnome-tweak-tool
  sudo add-apt-repository ppa:webupd8team/gnome3
  sudo apt-get update
  sudo apt-get install gnome-shell-extensions-user-themes
Link: https://www.wikihow.com/Change-Themes-on-Ubuntu-with-Gnome-Tweak-Tool
  
2.Now install theme:
  sudo add-apt-repository ppa:snwh/pulp
  sudo apt-get update
  sudo apt-get install paper-icon-theme paper-gtk-theme
  
  https://www.ubuntupit.com/best-ubuntu-themes-will-blow-mind/  
```
## Mysql Command:http://www.zbeanztech.com/blog/important-mysql-commands
# Install mysql in Docker
```
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=maainul -e MYSQL_ROOT_HOST=% -d mysql/mysql-server:latest

docker pull mysql
  docker run --name=mysql -e MYSQL_ROOT_PASSWORD=maainul -d mysql
  docker ps -a
  docker start mysql
  docker exec -it mysql bash
  which mysql
  mysql --user=root --password
  show databases;
  use mysql;
  show tables;
  exit
  exit
  
  docker-machine ip default
  docker inspect CONTAINER_ID
  ```
  # Docker command lines
  ### For view all the information about a container
 ```
    docker inspect ecstatic_leakey
 ```
 ### Remove all the container 
 ```
 docker rm -vf $(docker ps -a -q)
 ```
# Install mysql workbench
```
sudo apt-get install mysql-workbench
```
# Stop autorotate on Ubantu
```
gsettings set org.gnome.settings-daemon.peripherals.touchscreen orientation-lock true
gsettings set org.gnome.settings-daemon.plugins.orientation active false
```
