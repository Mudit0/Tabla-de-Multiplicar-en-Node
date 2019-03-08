const opts = {
    base: {
        demandOption: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('create', 'Create a file with the multiplication table', opts)
    .command('show', 'Show the multiplication table in the console.', opts)
    .help()
    .argv;

module.exports = {
    argv
}