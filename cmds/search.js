const { option } = require('yargs');

exports.command = 'search';
exports.description = "Search user's profile from email";
/*exports.builder = {
    email: {
        alias: 'e',
        nargs: 1,
        demandOption: true,
    },
};*/
exports.builder = (yargs) => {
    return yargs
        .option('email', {
            alias: 'e',
            nargs: 1,
            demandOption: true,
        })
        .usage('Usage: $0 search [-e|--email] <username@mail.org>');
};
exports.handler = function (argv) {
    console.log(argv);
};
