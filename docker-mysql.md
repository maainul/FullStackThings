## RUN MYSQL : 

		docker run containerID

# Show all using ports

		sudo lsof -i -P -n | grep LISTEN

## Pull Image From DockerHub:

		docker pull mysql:latest

## Run MySql (For the first Time)

		docker run --name mysqldb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123 mysql:latest

## Run Mysql(if port is already used 3308 --> port name pc 3306--> docker container port) 

		docker run --name mysqldb -d -p 3308:3306 -e MYSQL_ROOT_PASSWORD=123 mysql:latest

## Execute shell

		docker exec -it mysqldb /bin/bash

## Connect to Mysql shell


		mysql -uroot -p123

## Show all databases

		show databases;


## exit from database and shell
		
		exit

		exit

## Stop Container 
		
		docker stop containerID

## Show all containers

		docker ps
		
		
		
show databases;
```
use testdb;
```
```
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```
```
INSERT INTO Persons (PersonID, LastName, FirstName, Address, City)
VALUES ('123654','Tom B. Erichsen','Skagen 21','Stavanger','4006');
```
```
select * from Persons;
```

