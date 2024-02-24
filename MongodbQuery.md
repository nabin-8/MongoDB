# MongodbQuery

#### mongosh;
to start mongoDB
test> is Database
cls command to clear screen

#### show databases;
```javascript
show sbs;
- admin   40.00 KiB
- config  84.00 KiB
- local   40.00 KiB
```
- admin, config  , local   are already created databases

- Test is database but it is not showing while running show databases command
- then what is test>
- In mongodb shell if database haven't any data it dosnot show 

```javascript
test> use admin;
switched to db admin
admin> Now i am in admin
```
#### To create new Database
```javascript
admin> use newdb;
switched to db newdb
newdb>
```
### Collection
1. List all collection
1. Create collection
1. update the name of collection
1. Remove the collection

#### List all collection
show collections;

#### Create collection
```javascript
db.createCollection("collection Name");
db represents the current database
To make collection createCollection
Example:
newdb> db.createCollection("student");
{ ok: 1 }
newdb> show collections;
student
```

#### update the name of collection
```javascript
db.student.renameCollection("student_new");
Example:
newdb> db.student.renameCollection("student_new");
{ ok: 1 }
newdb> show collections;
student_new
```
#### Remove the collection
```javascript
db.student.remove({});
```
remove is used to delete one or more records / documents from the collections

Another Command
```javascript
 db.student_new.drop();
 true
```
drop delete the collection

## CRUD
1. C --> Create
1. R --> Read
1. U --> Update
1. D --> Delete

### Create Data / Document
Insertion Queries
```javascript
newdb> var user ={
... name : "Nabin Acharya",
... ip: "127.1.1",
... lastLoginTime : 15369857
... };

newdb> user;
{ name: 'Nabin Acharya', ip: '127.1.1', lastLoginTime: 15369857 }
```
Create DB and insert user
```javascript
newdb> db.students.insertOne(user);
{
  acknowledged: true,
  insertedId: ObjectId('65d9f8e097c5a5038adfb96e')
}
```
acknowledged: true means inserted

#### To insert Multiple documents
```javascript
newdb> db.students.insertMany([{name :"Roshan", ip :'121.23.45.96'},{name:"Shiva",hobby:"singing"}]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65d9fa1697c5a5038adfb96f'),
    '1': ObjectId('65d9fa1697c5a5038adfb970')
  }
}
```
In this document we add new hobby it means mongo scheme is flexible

### Read Collection
#### show collections;
```javascript
newdb> show collections;
students
db.students.find()
newdb> db.students.find()
[
  {
    _id: ObjectId('65d9f8e097c5a5038adfb96e'),
    name: 'Nabin Acharya',
    ip: '127.1.1',
    lastLoginTime: 15369857
  },
  {
    _id: ObjectId('65d9fa1697c5a5038adfb96f'),
    name: 'Roshan',
    ip: '121.23.45.96'
  },
  {
    _id: ObjectId('65d9fa1697c5a5038adfb970'),
    name: 'Shiva',
    hobby: 'singing'
  }
]
```
#### filtering
```javascript
db.students.find({name:'Roshan'});
newdb> db.students.find({name:'Roshan'});
[
  {
    _id: ObjectId('65d9fa1697c5a5038adfb96f'),
    name: 'Roshan',
    ip: '121.23.45.96'
  }
]
```
Next Example
```javascript
var n_user = {name:"John", job:{title:"programmer", salary:30000}};
 db.students.insertOne(n_user);
{
  acknowledged: true,
  insertedId: ObjectId('65d9fca597c5a5038adfb971')
}
```
Documents
```javascript
newdb> db.students.find()
[
  {
    _id: ObjectId('65d9f8e097c5a5038adfb96e'),
    name: 'Nabin Acharya',
    ip: '127.1.1',
    lastLoginTime: 15369857
  },
  {
    _id: ObjectId('65d9fa1697c5a5038adfb96f'),
    name: 'Roshan',
    ip: '121.23.45.96'
  },
  {
    _id: ObjectId('65d9fa1697c5a5038adfb970'),
    name: 'Shiva',
    hobby: 'singing'
  },
  {
    _id: ObjectId('65d9fca597c5a5038adfb971'),
    name: 'John',
    job: { title: 'programmer', salary: 30000 }
  }
]
```
#### Find Nested Data
```javascript
newdb> db.students.find({'job.title' : 'programmer'})
[
  {
    _id: ObjectId('65d9fca597c5a5038adfb971'),
    name: 'John',
    job: { title: 'programmer', salary: 30000 }
  }
]
```
#### Find Using Regex (Regular Expression)
```javascript
    db.students.find({name:/v.*/})
    newdb> db.students.find({name:/v.*/})
    [
    {
        _id: ObjectId('65d9fa1697c5a5038adfb970'),
        name: 'Shiva',
        hobby: 'singing'
    }
    ]

```