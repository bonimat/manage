exports.command = 'adduser';
exports.desc = 'Add new user';
exports.builder = {
    firstname: { alias: 'fn' },
    lastname: { alias: 'ln' },
};
exports.handler = function (argv) {
    console.log('and the user is...', argv.dir);
};
