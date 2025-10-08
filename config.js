const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~pNxxkKTK#b4nlx120ojhMJ93cp8X1-pCnx_1QnCFAtaR9cq-LRNM'
};
