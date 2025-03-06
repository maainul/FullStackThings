# Yokke Problem : paymentsource not null constraint

ALTER TABLE "public"."providers" ADD COLUMN "paymentsource" text NOT NULL DEFAULT '';

# migration cmd :

go run migrations/migrate.go up


1. migrate :

    go run migrations/migrate.go down
    
    go run migrations/migrate.go up
    
    go run migrations/migrate.go status
    
    go run migrations/migrate.go version
    
    go run migrations/migrate.go create aritcles sql
    
    go run migrations/migrate.go create aritcles go

# go solve no required module provides package xxx: go.mod file not found in current directory or any parent directory; see'go help modules'
	
	go env -w GO111MODULE=auto

	https://www.cnblogs.com/l199616j/p/15269281.html

# generate gunk

	install pnpmgo 
	
	get github.com/gunk/gunk
	
	sudo npm install -g pnpm
	
	
# SHow Http data on html page

	http.Error(w, "182=="+err.Error(), http.StatusAccepted)
	
	http.Error(w, "187== ACCOUNT ID = "+ac.AccountID+" ACCOUNT NUMBER ==== "+ac.AccountNumber+" CREDIT TRANSACTION NUMBER === "+ac.CreditTransactionNumber, http.StatusAccepted)
	

# PetNet conf

## Pull from master petnet and rbac

	git pull upsteam master
	
## before docker compose

	export COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1
	
	docker-compose down --remove-orphans -v && docker-compose up --build -d
	
	go mod vendor
	
## See logs

	docker logs petnet_usermgm -f


# Yokke

	ipg-worker/cmd------> handler

	ipg-worker/worker ------> imple

	intergations ----> intreget 3rd party api
	
## Run yokke: 

### ipg

	docker-compose up

	brankas-ipg/merchant-service
	
	merchant-service git:(master) ✗ ./run.sh 

	brankas-ipg/payment-service
	
	payment-service git:(master) ✗ ./run.sh 

	brankas-ipg/merchant-webapp   
	
	payment-service git:(master) ✗ ./run.sh 

	brankas-ipg/payment-webapp

	payment-service git:(master) ✗ ./run.sh 
	
	brankas-ipg /demoshop

	payment-service git:(master) ✗ ./run.sh 
	
	brankas-ipg/ go run cmd/mtidirectdebit

	
## Vscode shortcut

	sort ascending vs code ---> ctrl + p ---> sort ascending

	terminal ---> ctrl + j


## Formate code 

	git ls-files '*.go' | xargs gofumpt -d -s


## Formate imports 

	1. if imports not available 
	
		 go get golang.org/x/tools/cmd/goimports
	 
	 	 git ls-files '*.go' | xargs ~/goimports -l

## Print in the html page

	fmt.Fprintf(w, "form = %+v", form)
	
	http.Error(w, "ERROR_PRINT158:"+err.Error(), http.StatusInternalServerError)

## Docker For Netbank

	docker-compose up --build -d

	docker logs -f netbank_cms

	docker-compose build netbank-cms

	docker restart netbank_cms

	docker-compose up -d
	
## 3 in one

	docker-compose build netbank-cms && docker restart netbank_cms && docker-compose up -d

## Docker Restarting resolve netbank_cms

	docker-compose down -v
	
	docker-compose up --build -d --remove-orphans
	
	docker ps

## PUSH and rebase

   git status
 
   git add .
 
   git commit -am "Html slice"
 
   git checkout master
 
   git pull upsteam master
 
   go mod vendor
 
   cd go/src/brank.as/netbank
 
   code .
 
   git status
 
   git checkout NV-352-connect-endpoint-to-frontend-html-slice
 
   git status
 
   code .
 
   go mod vendor
 
   code .
 
   git rebase master
 
   git add .
 
   git rebase --continue
 
   git status
 
   go mod vendor


## Git Reset

	git log --oneline

	git reset --soft<commit-sha>

	git log
	
	git add .
	
	git commit -am "commit"
	
	git push
	
	
	
	

# Stash work:
	
	git add .

	git stash push
	
	git pull upstream master
	
	git checkout NV-somename
	
	git stash pop
	
	git add .
	
	git commit 
	
	git push origin NV-somebranchname
	

## Clone a project
	
	git clone 

	git remote add upstream git@git.brankas.dev:netbank/netbank.git

## How to stop postgres

	sudo service postgresql status

	sudo service postgresql stop

	sudo service postgresql status

  

11. If any Changes happend then run these cmd for docker

	sudo docker restart netbank_cms

	sudo docker-compose up -d
	
	git pull upstream master

	git checkout -b NV-123-Test

# Push

	git status
	
	git add .
	
	git commit 
	
	git checkout origin master --->( go to the master branch and pull)
	
	git pull upstream master
	
	git checkout branch_name
	
	git rebase master
	
	git push branch-name -f

## Update Commit message


	git add .
	
	git commit --amend
	
	git push origin NV-165-create-hubspot-on-profile --force
	
## Test NB

	DATABASE_CONNECTION="user=postgres password=secret host=localhost port=5435 dbname=test sslmode=disable" go test

	DATABASE_CONNECTION="user=postgres password=secret host=localhost port=5435 dbname=test sslmode=disable" go test -c
	

## Merge Conflict
	
	git checkout master
	
	git pull upstream master
	
	git checkout NV-360-somenthig-branch-name
	
	git rebase master
	
	git add .
	
	git rebase --continue
	
	git commit 
	
	git push origin NV-something-name -f
	

## Netbank Work Flow

	GUNK-----> gunk/Profile ---->Gunk Service 

	This Service is implemented in Profile/services/profile/ folder

	This Service database Related stuff in profile/core/profile/company.profile

	This method will call profile/storage/postgres/companyprofile.go

	(Interface)-------> (service)---------------------> (Repository)--------------> (database)
	
	gunk/profile ---- > profile/services/profile -----> profile/core/profile -----> storage/postgres



handler --> (assign path) (and method name)

add file to the handler folder



Business logic -----------------> in the core folder

# How to push Data

	git status
	
	git commit 
	
	git log
	
	git checkout master
	
	git pull upstream master
	
	git checkout NV-39-signup
	
	git rebase master
	
	git status

	git push origin NV-39-signup


# Push Second time

	git status
	
	git add .
	
	git commit --amend 

	ctrl + O + Enter + ctrl + x

	git push origin NV-ticket name --force


# Staging push

	git push upstream your-branch:staging-test -f



## grpc add


	go get -u google.golang.org/grpc

## Add protoc

	go get -u github.com/golang/progobuf/protoc-gen-go



## Docker install and run postgres:12-alpine

	docekr pull postgres:12-alpine

	docker images

	docker image ps

	docker run --name postgres_for_book -p 5430:5430 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine

	docker container ps -a

	docker exec -it postgres_for_book psql -U root
