const NodeGeoCoder = require('node-geocoder');

const options = {
    provider: process.env.GEOCODER_PROVIDER || 'mapquest',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY || 'ubpbfDVMsoe2KOOH4zy50aG4dkljfNAy',
    formatter: null
}

const geocoder = NodeGeoCoder(options);

module.exports = geocoder;