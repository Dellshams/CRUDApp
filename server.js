const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { PORT } = process.env;
const { MONGO_URI } = process.env;

const app = express();
app.use(express.json({ extended: false}));
app.use(express.urlencoded({ extended: false}));

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
    .then(result => {
        console.log("Database connected");
        app.listen(3000);
    })
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String
})
const User = mongoose.model('User', userSchema)

app.post('/users', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newUser) => {
        if (err){
            return res.status(500)
            .json({ message: err })
        } else if (user) {
            return res.status(404)
            .json({message: "User exists"})
        }
        else {
            return res.status(200)
            .json({ status: true, message: "User details created successfully", newUser})
        }
    })
})

app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500)
            .json({message: err})
        } else {
            return res.status.json(200)
            ,json({users})
        }
    })
})

app.get('/users/:id', (req, res) => {
    User.findOne(req.params.id, (err, user) => {
        if (err) {
            return res.status(500)
            .json({message: err})
        }
        else if (!user) {
            return res.status(404)
            .json({ message: "user not found"})
        }
        else {
            return res.status(200)
            .json({user})
        }
    })
})

app.put('/users/:id', (req,res) => {
    User.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        country: req.body.country
    }, (err, user) => {
        if (err) {
            return res.status(500)
            .json({ message: err})
        } else if (!user) {
            return res.status(404)
            .json({ message: "user not found"})
        } else {
            user.save((err, savedUser) => {
                if (err) {
                    return res.status(400)
                    .json({ message: err })
                } else {
                    return res.status(200)
                    .json({ message: "User details updated successfully" })
                }
            })
        }
    })
})

app.delete('/users/:id', (req,res) => {
    User.findByIdAndDelete(req,params.id, (err, user) => {
        if (err) {
            return res.status(500)
            .json({ message: err })
        } else if (!user) {
            return res.status(404)
            .json({ message: "User not found" })
        }
        else {
            return res.status(200)
            .json({ message: "User details deleted successfully"})
        }
    })
})

const port = process.env.PORT || PORT;
app.listen(port,() => console.log(`app running on port ${port}`));