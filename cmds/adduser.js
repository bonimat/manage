exports.command =
    'adduser -u <username> -fn <name> -ln <lastname> -e <email> -r <role>';
exports.desc = 'Add new user';
exports.builder = {
    dir: {
        default: '.',
    },
};
exports.aliases = ['u', 'username'];
exports.aliases = ['fn', 'firstname'];
exports.aliases = ['ln', 'lastname'];
exports.aliases = ['e', 'email'];
exports.aliases = ['r', 'role'];
exports.handler = function (argv) {
    console.log('and the user is...', argv.dir);
};
