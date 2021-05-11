exports.command = 'setrole -e <email> -r <role>';
exports.desc = 'Set the role of user';
exports.builder = {
    dir: {
        default: '.',
    },
};
exports.handler = function (argv) {
    console.log('and the user is...', argv.dir);
};
