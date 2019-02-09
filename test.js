const test = require('tape');
const request = require('supertest');

const app = require('./app')

test('get', (assert) => {

    request(app)
        .get('/complains/getCountComplainsForCity:' + 'S')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            assert.end();
        })
})


test('post', (assert) => {

    var registerTest = {
        "title" : "title teste",
        "description": "google not working",
        "company" : "google"
    };

    request(app)
        .get('/api/complains/add')
        .send(registerTest)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
      
            assert.end();
        })
})