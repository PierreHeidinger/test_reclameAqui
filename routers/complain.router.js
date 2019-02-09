const router = require('express-promise-router')();

const { ComplainController } = require('./controllers/index')

const Complains = (app) => 
{
    const complainController = new ComplainController();

    //Routes
    router.get('/getCountComplainsForCity/:city',complainController.getCountComplainsForCity);
    router.post('/add',complainController.add);
    //express
    app.use('/api/complains',router)
}

module.exports = Complains;