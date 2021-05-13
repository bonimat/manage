exports.command = 'setrole';
exports.desc = 'Set the role of user';
exports.builder = {};
exports.handler = function (argv) {
    console.log('and the user is...', argv.dir);
};
