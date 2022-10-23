

const vapid = required('./vapid.json');




module.exports.getKey = () => {
    return vapid.publicKey;
};