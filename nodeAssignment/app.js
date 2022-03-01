const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const fetch = require('node-fetch');
// const test = fetch();
// const module = require('module');


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', 'views');
app.set('view engine', 'ejs');

let data = [{
    id: "2",
    name: "Garvish4",
    email: "garvishjain@gmail.com",
    gender: "male"
}];

app.get('/', (req, res, next) => {
    // res.send(data);
    res.render('field.ejs');
});

/* app.get('/success', (req, res, next) => {
    // res.send(data);
    fetch(data).then(res => {
        return res.json();
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
    res.render('table.ejs');
}); */

/* app.get('/', (req, res, next) => {
    // res.send(data);
    fetch(data)
        .then(res => {
            return res.json();
        }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
}); */



app.post('/', (req, res, next) => {
    let field = req.body;
    console.log(field);
    data.push(field);
    res.send({
        message: "User created",
        Data: data
    });
    // res.redirect('success');
});

app.delete('/:id', (req, res, next) => {
    const userId = req.params.id;
    console.log(userId);

    data.splice(data.map((item) => { return item.id; }).indexOf(userId), 1);

    res.send({
        message: "user deleted",
        Result: data
    });
});

app.put('/:id', (req, res, next) => {
    const userId = req.params.id;
    console.log(userId);
    console.log(req.body);
    let user = {};
    if (req.body && req.body.name) {
        user['name'] = req.body.name;

    }

    data = data.map((item) => {
        if (item.id === userId) {
            item.name = user.name;
        }
        return item;

    })

    console.log(user);
    // res.send("show");
    res.send({
        message: "User created",
        Data: data
    });

});

app.listen(5000, () => {
    console.log('Server Started!');
});