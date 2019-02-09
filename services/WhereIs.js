const rp = require('request-promise');


class WhereService
{

    static async IsIp(ip)
    {
        const SERVICE_IP_LOCATE_IO = process.env.SERVICE_IP_LOCATE_IO;

        var options = 
        {
            uri : SERVICE_IP_LOCATE_IO + '/api/lookup/' + ip,
            method : 'GET',
            json : true
        }

        return await rp(options);
    };

};

module.exports = 
{
    WhereService
};