exports.command = 'resetpassword <email>';
exports.desc = 'Reset the password from email';
exports.builder = {
    dir: {
        default: '.',
    },
};
exports.handler = function (argv) {
    console.log('and the user is...', argv.dir);
};
