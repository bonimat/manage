exports.command = 'setrole';
exports.description = 'Set the role of user';
exports.builder = (yargs) => {
    return yargs.option('role', {
        alias: 'r',
        nargs: 1,
        demandOption: true,
    });
};
exports.handler = function (argv) {};
