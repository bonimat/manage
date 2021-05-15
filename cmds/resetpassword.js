exports.command = 'resetpassword [email]';
exports.desc = 'Reset the password from email';
exports.builder = {
    email: {
        alias: 'e',
        nargs: 1,
    },
};
exports.handler = function (argv) {
    console.log('and the user is...', argv.e);
};
