//Services
const { WhereService } = require('../../services/index');
//Models db
const { Complain } = require('../../db/models/index');

class Complains
{
    async add(request,response)
    {      
        let requestIP = request.connection.remoteAddress;

        var userIP = (requestIP.trim() == '::1' ) ? '187.10.129.216' : requestIP;
        var complain = request.body;
        var locale = await WhereService.IsIp(userIP);


        // include locale to model
        complain.locale = locale;

        let save = await new Complain(complain).save();

        response.status(200).json(save);

    }
}


module.exports = 
{
    ComplainController : Complains
}