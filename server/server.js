var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
    var todo =new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000')
});

module.exports = {app};
// var newTodo = new Todo({
//     text: 'Something to do'
//     // text: '  Edit this video ',
//     // completed: true,
//     // completedAt: 19
// });

// var newUser = new User({
//     email: '1          '
// });

// newTodo.save().then((document) => {
//     console.log('Saved document!', document);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// newTodo.save().then((document) => {
//     console.log(JSON.stringify(document, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });

// newUser.save().then((document) => {
//     console.log(JSON.stringify(document, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });