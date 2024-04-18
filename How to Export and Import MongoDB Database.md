# How to Export and Import MongoDB Database 

## Useful Commands:

### Connect to MongoDB
```bash
mongosh -u admin -p --authenticationDatabase admin
```

### But In Local write :

```bash
mongosh
```

## EXPORT MongoDB Database:
```bash
mongodump --username your_username --password your_password --authenticationDatabase admin --db your_database_name
```

## IMPORT MONGODB database:
```bash
mongorestore --username your_username --password your_password --authenticationDatabase admin --db your_database_name path_of_folder
```

show dbs
