const dotenv = require('dotenv');   
dotenv.config();
const jwt = require('jsonwebtoken')
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

// const url = "mongodb://newmyapp:cj9ba7XODAjIPQbEvcgL1ldSMtV7PBjY2ZIxRDKn61FttT5C52FoOHukR4LqUa669QlWOo4uzM9QACDbtppkFQ==@newmyapp.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@newmyapp@";
 const url = 'mongodb://newmyapp:SJbKvD6NXmDnbuAmut9wLx16yU9ln30pBp9JyPCcXXYNm9u4yZRSrXzYOH8hqpT8DiHYlMhZ4QcBACDbkcE9Gg==@bae39705-0ee0-4-231-b9ee.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@bae39705-0ee0-4-231-b9ee@';

const client = new MongoClient(url);
client.connect().then(() => { console.log('Db connected') });
const db = client.db(`newmyapp`);

//get all
app.get('/item/:type', async (req, res) => {
    const { offset, limit } = req.query;
    const collection = db.collection(req.params.type);
    const totalCount = await collection.count();
    // const items = await collection.find().skip(+offset).limit(+limit).toArray();
    const items = await collection.find().toArray();

    res.send({ items: items, totalCount: totalCount });
});

// create
app.post('/item/:type', async (req, res) => {
    const collection = db.collection(req.params.type);
    const query = { title: req.body.title};
    const update = { $set: {
        'title': req.body.title,
        'category': req.body.category,
        'autor': req.body.autor,
        'publisher': req.body.publisher,
        'Year': req.body.Year,
        'location': req.body.location,
        'isbin':req.body.isbin,
        'image': req.body.image,
        'description':req.body.description,
        'remark': req.body.remark,
        'amount':req.body.amount
    }};
    const options = {upsert: true, new: true};
    const item = await collection.updateOne(query, update, options);
    res.send(item);
})


app.post('/registr', async (req, res) => {
    const collection = db.collection("users");
    const query = { email: req.body.email};
    const update = { $set: {
        "email": req.body.email,
        "password": req.body.password,
    }};

    const options = {upsert: true, new: true};
    const item = await collection.updateOne(query, update, options);
    res.send(item);
})

// //update
app.post('/item/:type/:id', async (req, res) => {
    const collection = db.collection(req.params.type);
    const query = { _id: ObjectId(req.params.id)};
    const update = { $set: req.body };
    const options = {upsert: true, new: true};
    const item = await collection.updateOne(query, update, options);
    res.send(item);

})
// //find
app.get('/item/:type/:id', async (req, res) => {
    const collection = db.collection(req.params.type);

    const item = await collection.findOne({
        _id: ObjectId(req.params.id)
    });
    res.send(item);
})


//delete
app.delete('/item/:type/:id', async (req, res) => {
    const collection = db.collection(req.params.type);
    await collection.deleteOne({
        _id: ObjectId(req.params.id)
    });
    res.send({ message: 'success', code: 204 });
})

app.post('/search', async (req, res) => {
    const collectionBooks = db.collection('books');
    const collectionGames = db.collection('games');
    const collectionGifts = db.collection('gifts');
    const collectionMaterials = db.collection('materials');
    const books = await collectionBooks.find({"title": { $regex : req.body.title }}).toArray();
    const games = await collectionGames.find({"title": { $regex : req.body.title }}).toArray();
    const gifts = await collectionGifts.find({"title": { $regex : req.body.title }}).toArray();
    const materials = await collectionMaterials.find({"title": { $regex : req.body.title }}).toArray();
    res.send({
        data: [
            ...books,
            ...gifts,
            ...games,
            ...materials
        ],
        counts: [
            books.length,
            gifts.length,
            games.length,
            materials.length
        ]
    });
});

app.get('/statistic', async (req, res) => {

    const collectionBooks = db.collection('books');
    const collectionGames = db.collection('games');
    const collectionGifts = db.collection('gifts');
    const collectionMaterials = db.collection('materials');
    const totalCount1 = await collectionBooks.count();
    const totalCount2 = await collectionGames.count();
    const totalCount3 = await collectionGifts.count();
    const totalCount4 = await collectionMaterials.count();
    res.send({
        books: totalCount1,
        games: totalCount2,
        gifts: totalCount3,
        materials: totalCount4
    });

});

// Login 




app.post('/auth/login' , (req,res) => { 
    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Gev Harutyunyan'
     }, 'secrect123')

    console.log(req.body)
     res.json({
         success: true,
         token,
     })
})


// // Server
app.get('/' , (req , res) => {
    res.send({
        name:  '111 Hello'
     })
})

app.listen(5000 , (err) => {
     if(err){
        console.log(err)
     } 
     console.log('Server Ok')
} );

module.exports = app
