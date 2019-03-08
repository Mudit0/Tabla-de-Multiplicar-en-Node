const argv = require('./config/yargs').argv;
const colors = require('colors');
const { createFile, showTable } = require('./math/multiply');

const command = argv._[0];
const base = argv.base;
const limit = argv.limit;

switch( command ){
    case 'create':
        createFile( base, limit )
            .then( ( file ) => console.log('File created:'.yellow, colors.green(file) ))
            .catch( ( err ) => console.log( err ) );
        break;
    case 'show':
        showTable( base, limit );
        break;
    default:
        console.log('Command not registered'.red + ': ' + colors.underline(command));
}
