## See container 
	
	docker container ls -a

## See port is used or not 

	telnet localhost 5432

### Error message : Port is not free so try another port

Trying 127.0.0.1...
telnet: Unable to connect to remote host: Connection refused

	telnet localhost 5430


## Persist data by mounting a directory from the host machine

	docker container run -d name=pg -p 5432:5430 -e POSTGRES_PASSWORD=secret -e PGDATA=/pgdata -v /pgdata:/pgdata postgres:latest


	5432 -- > host machine postgres port

	5430 -- > container postgres port

	docker container ls

	sudo ls -l /pgdata/

	psql -h localhost -p 5430 -U postgres

	docker container exec -it pg bash

	ls

	ls /pgdata/

	exit

	docker container exec -it pg psql -U postgres

	dt

	\q

	docker container ls

	docker contianer stop pg

	docker container ls

	docker container ls -a



	docker pull postgres

	docker run --name booklist_postgres -p 5432:5432 -e POSTGRES_USER=root POSTGRES_PASSWORD=secret -d postgres

	docekr ps

	docker container exec -it booklist_postgres psql -U root

	\q

	docker logs booklist_postgres
	

