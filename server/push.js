
const fs = require('fs');

const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');



const suscripciones = require('./subs-db.json');

module.exports.getKey = () => {
    return urlsafeBase64.decode( vapid.publicKey ); 

    };

module.exports.addSubscription = ( suscripcion ) => {

    suscripciones.push( suscripcion );

    //console.log(suscripciones);

    fs.writeFileSync('${ __dirname}/subscribe-db.json', JSON.stringify(suscripciones));



};