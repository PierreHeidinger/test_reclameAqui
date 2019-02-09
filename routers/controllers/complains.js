//Services
const { WhereService } = require('../../services/index');
//Models db
const { Complain } = require('../../db/models/index');

class Complains
{

    async getCountComplainsForCity(request,response)
    {   
        var { city } = request.params;

        var condition = { 'locale.city' : {'$regex': city, '$options': 'i'}};

        var complains = await Complain.aggregate([
            {
                $match: condition
            },
            {
                $group:
                {
                _id:'$locale.city',
                count: {$sum:1}
                }
            }
        ])

        response.status(200).json(complains);
    };

    async add(request,response)
    {         
        var complain = request.body;
        let save = await new Complain(complain).save();

        response.status(200).json(save);

    };
}


module.exports = 
{
    ComplainController : Complains
}