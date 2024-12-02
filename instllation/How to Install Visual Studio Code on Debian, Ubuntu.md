How to Install Visual Studio Code on Debian, Ubuntu and Linux Mint


The most preferred method of installing Visual Code Studio on Debian based systems is by enabling the VS code repository and installing the Visual Studio Code package using the apt package manager.

	$ sudo apt update


Once updated, proceed and install dependencies required by executing.

	$ sudo apt install software-properties-common apt-transport-https


Next, using the wget command, download the repository and import Microsoft’s GPG key as shown:

	$ wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg


	$ sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/

	$ sudo sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode 


stable main" > /etc/apt/sources.list.d/vscode.list'
Once you’ve enabled the repository, update the system and install Visual Studio Code by running the command:


	$ sudo apt update

	$ sudo apt install code