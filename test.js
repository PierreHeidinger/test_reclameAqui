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
        "company" : "google",
        "locale" : {"ip":"187.10.129.216","country":"Brazil","country_code":"BR","city":"São Paulo","continent":"South America","latitude":-23.5733,"longitude":-46.6417,"time_zone":"America/Sao_Paulo","postal_code":"01323","org":"TELEFÔNICA BRASIL S.A","asn":"AS27699","subdivision":"Sao Paulo","subdivision2":null}

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