# How to install STS IN ubuntu


https://www.youtube.com/watch?v=_HJvC3oREaw&t=6s


1. Download From : https://spring.io/tools

2. Open terminal and go to the downloaded file:

3. Create a folder and go to this folder

> mkdir SpringTools

> cd SpringTools/

3. Extract by this command : 

> tar zxvf ~/Downloads/spring-tool-suite-4-4.7.0.RELEASE-e4.16.0-linux.gtk.x86_64.tar.gz


4. Run from the terminal :

> ls

> cd sts-4.7.0.RELEASE/

#### This command will run STS

> ./SpringToolSuite4 &



# Create Application Luncher

1. go to the directory of the Spring Tool Suite

2. Create sts.desktop file

3. paste this line into the sts.desktop file

```.desktop
[Desktop Entry]
Type=Application
Name=sts
Comment=Spring Tool Suite
Icon=/home/mainul/SpringTools/sts-4.7.0.RELEASE/icon.xpm
Exec=/home/mainul/SpringTools/sts-4.7.0.RELEASE/SpringToolSuite4
Terminal=false
Categories=Development;IDE;Java;
StartupWMClass=STS

```
4. Right click on sts.desktop file and allow permission. thick the allow button.




5. copy sts.desktop file and paste this location :

		"~/.local/share/applications/".
		
7. My updated solutions is as follows:
```
sudo gedit /usr/share/applications/STS3.desktop
```
