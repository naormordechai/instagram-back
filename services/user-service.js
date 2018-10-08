const mongoService = require('./mongo-service');

const ObjectId = require('mongodb').ObjectId;

function addUser(user) {
    return mongoService.connect()
    .then(db => {
        return db.collection('user').insertOne(user)
        .then(_ => user)
    })
}

module.exports = {
    addUser,
}