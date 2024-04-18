### Step 1: Install the GPG key

> wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -


### Ensure apt is set up to work with https sources: 

> sudo apt-get install apt-transport-https

### Step 2: Add the Sublime text apt PPA using the command below:-

> echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

### Step 3: Update apt sources

> sudo apt-get update

### Step 4: Install Sublime Text 

> sudo apt install sublime-text
