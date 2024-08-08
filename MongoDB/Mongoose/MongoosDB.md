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
- Mongoose uses Operation Buffering
- Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB. 

### Find in Mongoose
```javascript
Model.find() //returns a Query Object (thennable)
```
- Mongoose Queries are not promises. But they have a .then()

```javascript
User.find().then((data)=>{
  console.log(data);
});

User.find({age:{$gte:47}}).then((data)=>{
    console.log(data);
})
```
- FindOne
```javascript
Model.findOne() //returns a single result

User.findOne({age:{$gte:48}}).then((data)=>{
      console.log(data);
})
```
- FindByID()
```javascript
User.findById("66b376a834c86e2239bd5f96").then((res) => {
    console.log(res);

}).catch((err) => {
    console.log(err);

})
```

### UPDATE
- model.updateOne()
```javascript
User.updateOne({name: "Bruce"}, {age:49}).then((res)=>{
      console.log(res);
})

```
- model.updateMany()
```javascript
User.updateMany({age:{$gt:45}}, {age:45}).then((res)=>{
      console.log(res);
})

```
- Model.findOneAndUpdate()
```javascript
User.findOneAndUpdate({name:"sairaj"}, {age:60}, {new:true}).then((res)=>{
      console.log(res);
})

```
- Model.findByIdAndUpdate()

### DELETE
- Model.deleteOne() //returns count
```javascript
User.deleteOne({name:"adyatan"}).then((res)=>{
    console.log(res);
})
```
### DELETE
- Model.deleteMany() //returns count
```javascript
User.deleteMany({age:{$gt:40}}).then((res)=>{
    console.log(res);
})
```
- Model.findByIdAndDelete()
- Model.findOneAndDelete()

### Schema Validations
- Basically, Rules for schema
```javascript
const bookSchema=mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  author:{
    type:String
  },
  price:{
    type:Number
  }
})
```
### Schema type options
```javascript
const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: 1
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    }
})

const Book = mongoose.model("Book", booksSchema)

let book1 = new Book({
    title: "Marvel Comics",
    // author: "RD Sharma",
    price: 399,
    category: "fiction"
})

book1.save()
    .then(res => console.log(res))
    .catch(err => console.log(err))
```

### Validation in updation & Errors
```javascript

Book.findByIdAndUpdate("66b4dbfba3969b0f001bd3b7", { price: -500 }, { runValidators: true })
    .then(res => console.log(res))
    .catch(err => console.log(err.errors.price.properties.message))
```