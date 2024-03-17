.PHONY :  docker-build-all
docker build -t ms-gate-client

# 1. Run Mongodb  : Create Image

## MONGODB BUILD
docker build -t mongodb-gate .


## RUN CONTAINER 
docker run -d --name mongogatedb --network my-network -v mongodata:/var/lib/mongodbsql/data -p 27017:27017 --restart unless-stopped mongodb-gate

## Go Inside of mongodb :
docker exec -it mongodb bash

## Lunch Mongodb
mongo

## Create New DB
use db_name






## Node Server 1 : Gate 

## MS-GATE-SERVER BUILD AND RUN
docker build -t ms-gate-server .
docker run -d --name ms-gate-server -p 1337:1337 --restart unless-stopped ms-gate-server



## NODE SERVER 2 : SystemAutomation

## MS-SYSTEM-SERVER BUILD AND RUN
docker build -t ms-system-server .
docker run -d --name ms-system-server -p 1338:1338 --restart unless-stopped ms-system-server


# Connect Network
docker network connect my-network ms-gate-server
docker network connect my-network ms-system-server
docker network connect my-network mongogatedb

## CLIENT SERVER : 
docker build -t ms-gate-client .
docker run -d --name ms-gate-client -p 3002:80 --restart unless-stopped ms-gate-client



#CONNECT NETWORK
.PHONY:dnetwork
 -docker network connect my-network ms-gate-server
 -docker network connect my-network ms-system-server
 -docker network connect my-network mongogatedb

# STOP  
.PHONY: dst0p
 -docker stop mongogatedb
 -docker stop ms-gate-client
 -docker stop ms-gate-server
 -docker stop ms-system-server

# Remove
.PHONY: drm
 -docker container rm mongogatedb
 -docker container rm ms-gate-client
 -docker container rm ms-gate-server
 -docker container rm ms-system-server

























docker run -d --name ms-gate-server --network my-network -e MONGO_LOCAL_URL=mongodb://mongodb:27017/ms_gate_db -p 3000:3000 --restart unless-stopped --link=mongodb ms-gate-server

docker run -d --name ms-system-server --network my-network -e MONGO_LOCAL_URL=mongodb://mongodb:27017/ms_gate_db -p 3000:3000 --restart unless-stopped --link=mongodb ms-system-server




## MONGODB
docker build -t mongodb-gate-image .
docker run -d --name mongogatedb --network my-network -v mongodata:/var/lib/mongodbsql/data -p 27017:27017 --restart unless-stopped mongodb-gate-image

## Go Inside of mongodb :
docker exec -it mongodb bash

## Lunch Mongodb
mongo

## Create New DB
use db_name






