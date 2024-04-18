DB_URL=postgresql://root:secret@localhost:5432/osdb?sslmode=disable

postgres:
	 
    docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine

createdb:
	
    docker exec -it postgres12 createdb --username=root --owner=root osdb

dropdb:
	
    docker exec -it postgres12 osdb 

migrateup:
	
    migrate -path migrations/sql -database "$(DB_URL)" -verbose up

migratedown:
	
    migrate -path migrations/sql -database "$(DB_URL)" -verbose down

server:
	
    go run main.go

test:
	
    go test -v --cover ./storage/postgres

.PHONY: postgres createdb dropdb migrateup migratedown server test
