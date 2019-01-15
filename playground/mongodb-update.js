// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Destructoring assignment

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c3cb77492cc31cdeaf44558")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c38a7e875b00a19fc9c22c5')
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'Svilen Ukalski'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});