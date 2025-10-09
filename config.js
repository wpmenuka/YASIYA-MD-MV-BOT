const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~8EZGgJoJ#UO4nSvcrAzhkxZKmXlfCOiJ5bnIk5--9VE6u1zU2IR4'
};
