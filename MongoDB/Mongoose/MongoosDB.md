### Mongoose
- A library that creates a connection between MongoDB & Node.js JavaScript Runtime Environment
- It is an ODM (Object Data Modeling) Library.

### Mongoose setup
- initilize nodejs
```
npm int -y
```
- install mongoose
```
npm i mongoose
```
- mongoose official [docs](https://mongoosejs.com/)

### Schema
- Schema defines the shape of the documents within that collection.
- Example:
```javascript
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
```
##### The permitted SchemaTypes are:
1. String
1. Number
1. Date
1. Buffer
1. Boolean
1. Mixed
1. ObjectId
1. Array
1. Decimal128
1. Map
1. UUID

### Modals
- Model in mongoose is a class with which we construct documents.
```javascript
const User=mongoose.model("User", userSchema)
```
- use `show collections` command to see in console
- another employee model
```javascript
const employeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    salary: Number,
    age: Number
})

const Employee = mongoose.model("Employee", employeeSchema)
```
### INSERT
- Inserting One
```javascript
const user1=new User({name:"Admin", email:"admin@yahoo.in", age:48});

user1.save() //to save in DB
```
- commands related to load
1. node REPL: `node`
1. load.index.js
1. user1
- then it will show user1 data

- to view data in mongodb
```javascript
 db.users.find()
[
  {
    _id: ObjectId('66b3746810311bbf12380a09'),
    name: 'Admin',
    email: 'admin@gmail.com',
    age: 48,
    __v: 0
  }
]
```
- did you notice __v new key:value is added. it like a version

### INSERT multiple data
```javascript
User.insertMany([
    {name:"Sairaj", email:"sairaj@gmail.com", age:50},
    {name:"hemanta", email:"hemanta@gmail.com", age:55},
    {name:"adyatan", email:"adyatan@gmail.com", age:52},
]).then((data)=>{
    console.log(data)
})
```

#### Note
- Mongoose