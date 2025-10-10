const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~tBQGhaSL#glM2VtFw4w5T822b57DJL0RuBv1c1Csnw_zb4P4M_MY'
};
