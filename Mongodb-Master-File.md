# Mongodb Basics To Advance

## Open Mongodb Shell Terminal :

		 mongosh

## Show Databases :
		
		show dbs

## switch database

		use bookstore

## Show to Collections (technically you can call Table )

		show collections

## How To Add Document(Each Individual Data/Information) in a Collection(Tables) :
```json
db.books.insertOne({title:"The Color of Magic",author:"Terry Pratchett",pages:300,rating:7,genres:["fantasy","magic"]})
```
### insertOne({}) : Creat only 1 Infomation/document
### id will be automatically added.

#### Success Message :
```json
bookstore> db.books.insertOne({title:"The Color of Magic",author:"Terry Pratchett",pages:300,rating:7,genres:["fantasy","magic"]})
{
  acknowledged: true,
  insertedId: ObjectId('6560240139c787a9eab85708')
}
```

### 💨 Interesting Case : Suppose You Want to add new Authors.But author Collection is not avaiable yet.Is it enter data ?

Yes It will Endter data and will create new collections called authors

```json
db.authors.insertOne({name:"Terry Pratchett",age:60}

{
  acknowledged: true,
  insertedId: ObjectId('656025aa39c787a9eab85709')
}

```

So New Collections and Document is Created in the database

### How to Insert Multiple documents:

```json
db.books.insertMany([{title:"The Light fantasy",author:"Terry Pratchett",pages:250,ratings:6,geners:["fantasy"]},{title:"Dune",author:"Frank Herbert",pages:500,ratings:10,geners:["fantasy","sci-fi"]}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6560273439c787a9eab8570a'),
    '1': ObjectId('6560273439c787a9eab8570b')
  }
}

```

### Find All document from collection :

```json
bookstore> db.books.find();
[
  {
    _id: ObjectId('6560240139c787a9eab85708'),
    title: 'The Color of Magic',
    author: 'Terry Pratchett',
    pages: 300,
    rating: 7,
    genres: [ 'fantasy', 'magic' ]
  },
  {
    _id: ObjectId('6560273439c787a9eab8570a'),
    title: 'The Light fantasy',
    author: 'Terry Pratchett',
    pages: 250,
    ratings: 6,
    geners: [ 'fantasy' ]
  },
  {
    _id: ObjectId('6560273439c787a9eab8570b'),
    title: 'Dune',
    author: 'Frank Herbert',
    pages: 500,
    ratings: 10,
    geners: [ 'fantasy', 'sci-fi' ]
  }
]

```

### Filter Data Based on Condition :

```json
bookstore> db.books.find({author:"Terry Pratchett"})
[
  {
    _id: ObjectId('6560240139c787a9eab85708'),
    title: 'The Color of Magic',
    author: 'Terry Pratchett',
    pages: 300,
    rating: 7,
    genres: [ 'fantasy', 'magic' ]
  },
  {
    _id: ObjectId('6560273439c787a9eab8570a'),
    title: 'The Light fantasy',
    author: 'Terry Pratchett',
    pages: 250,
    ratings: 6,
    geners: [ 'fantasy' ]
  }
]
```
### Multiple Condition 
```json
bookstore> db.books.find({author:"Terry Pratchett",rating:7})
[
  {
    _id: ObjectId('6560240139c787a9eab85708'),
    title: 'The Color of Magic',
    author: 'Terry Pratchett',
    pages: 300,
    rating: 7,
    genres: [ 'fantasy', 'magic' ]
  }
]
```

### Fetch Specific Fields : Suppose I want Title and Author

```json

bookstore> db.books.find({author:"Terry Pratchett"},{title:1,author:1})
[
  {
    _id: ObjectId('6560240139c787a9eab85708'),
    title: 'The Color of Magic',
    author: 'Terry Pratchett'
  },
  {
    _id: ObjectId('6560273439c787a9eab8570a'),
    title: 'The Light fantasy',
    author: 'Terry Pratchett'
  }
]


``` 
### Fetch Specific Field not Filter:
```json
bookstore> db.books.find({},{title:1,author:1})
[
  {
    _id: ObjectId('6560240139c787a9eab85708'),
    title: 'The Color of Magic',
    author: 'Terry Pratchett'
  },
  {
    _id: ObjectId('6560273439c787a9eab8570a'),
    title: 'The Light fantasy',
    author: 'Terry Pratchett'
  },
  {
    _id: ObjectId('6560273439c787a9eab8570b'),
    title: 'Dune',
    author: 'Frank Herbert'
  }
]
```

### Find Only One Data Based on ID
```json
bookstore> db.books.findOne({ _id: ObjectId('6560273439c787a9eab8570b')})
{
  _id: ObjectId('6560273439c787a9eab8570b'),
  title: 'Dune',
  author: 'Frank Herbert',
  pages: 500,
  ratings: 10,
  geners: [ 'fantasy', 'sci-fi' ]
}
```
### Find Only One Data Based on Other Fields : If multiple value is there it will render only first value.
```json

bookstore> db.books.findOne({ ratings:10})
{
  _id: ObjectId('6560273439c787a9eab8570b'),
  title: 'Dune',
  author: 'Frank Herbert',
  pages: 500,
  ratings: 10,
  geners: [ 'fantasy', 'sci-fi' ]
}
```

### Count Data :

```json
bookstore> db.books.find().count()
3
```

### Count Based On Condition :
```json

bookstore> db.books.find({author:"Frank Herbert"}).count()
1
```

### Find Based On Limit :
```json
bookstore> db.books.find().limit(2)
[
  {
    _id: ObjectId('6560240139c787a9eab85708'),
    title: 'The Color of Magic',
    author: 'Terry Pratchett',
    pages: 300,
    rating: 7,
    genres: [ 'fantasy', 'magic' ]
  },
  {
    _id: ObjectId('6560273439c787a9eab8570a'),
    title: 'The Light fantasy',
    author: 'Terry Pratchett',
    pages: 250,
    ratings: 6,
    geners: [ 'fantasy' ]
  }
]
```

### Sort Data :

if : In sorting : (-1) : Desc (1) : asc
```json
bookstore> db.books.find().sort({pages:1})
[
  {
    _id: ObjectId('6560273439c787a9eab8570a'),
    title: 'The Light fantasy',
    author: 'Terry Pratchett',
    pages: 250,
    ratings: 6,
    geners: [ 'fantasy' ]
  },
  {
    _id: ObjectId('6560240139c787a9eab85708'),
    title: 'The Color of Magic',
    author: 'Terry Pratchett',
    pages: 300,
    rating: 7,
    genres: [ 'fantasy', 'magic' ]
  },
  {
    _id: ObjectId('6560273439c787a9eab8570b'),
    title: 'Dune',
    author: 'Frank Herbert',
    pages: 500,
    ratings: 10,
    geners: [ 'fantasy', 'sci-fi' ]
  }
]
```

### Sort and Limit :
```json
bookstore> db.books.find().sort({pages:1}).limit(2)
[
  {
    _id: ObjectId('6560273439c787a9eab8570a'),
    title: 'The Light fantasy',
    author: 'Terry Pratchett',
    pages: 250,
    ratings: 6,
    geners: [ 'fantasy' ]
  },
  {
    _id: ObjectId('6560240139c787a9eab85708'),
    title: 'The Color of Magic',
    author: 'Terry Pratchett',
    pages: 300,
    rating: 7,
    genres: [ 'fantasy', 'magic' ]
  }
]
```
