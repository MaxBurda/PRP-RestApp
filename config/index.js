const nconf = require('nconf');
nconf.argv()
   .env()
   .file({ file: './appconfig.json' });
   
module.exports = nconf;