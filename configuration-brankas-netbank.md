## Turn Off postgresql

	sudo service postgresql status

	sudo service postgresql stop

	sudo service postgresql status




## Create SSH 

1. First Configure git

	git config --global user.name "mainul-codemen"
    	
	git config --global user.email mainul@codemen.net
    	
	ssh-keygen
    	
	cd .ssh/id_rsa.pub

2. Copy this ssh Key and past in the github SSH and GPC key section

3. Clone Repository

	cd go/src

	mkdir brank.as

	cd brank.as

	git clone git@github.com:mainul-codemen/netbank.git

	git remote -v

	git remote add upstream git@github.com:brankas/netbank.git

	git remote -v




## 4. Install Docker and Docker-compose : (Digitalocean)


	sudo apt install apt-transport-https ca-certificates curl software-properties-common\n

	curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n
	
	sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/

	linux/ubuntu focal stable"\n
	
	sudo apt update\n

	apt-cache policy docker-ce\n

	sudo apt install docker-ce\n

	sudo systemctl status docker\n

## 5. Install Docker-compose 

	su - ${USER}\n

	sudo curl -L "https://github.com/docker/compose/releases/download/
	1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/
	docker-compose\n

	sudo chmod +x /usr/local/bin/docker-compose\n

	docker-compose --version\n


6. cd go/src/brank.as/netbank

7. Create Baranch 
	
	git checkout -b NV-39-signup

8. go to deploy/compose

	cd deploy/compose

9. First time build images and containers

	go mod vendor
	   
	sudo docker-compose up --build -d
	
	docker ps
	
	sudo docker ps
	
	sudo docker logs -f netbank_cms
	
	sudo docker-compose build netbank-cms
			
	sudo docker restart netbank_cms
	
	sudo docker-compose up -d


10. Install npm and yarn(Digital Ocean)

	cd ~\ncurl -sL https://deb.nodesource.com/setup_14.x -o 
	
	nodesource_setup.sh\n
	
	sudo bash nodesource_setup.sh\n
	
	sudo apt install nodejs\n
	
	sudo npm -g install yarn
	
	cd cms/assets
	
	yarn install 
	
	yarn run build

11. If any Changes happend then run these cmd for docker

	sudo docker restart netbank_cms

	sudo docker-compose up -d


