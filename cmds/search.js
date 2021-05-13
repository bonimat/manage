exports.command = 'search [email]';
exports.desc = "Search user's profile from email";
exports.builder = {
    email: {
        alias: 'e',
        nargs: 1,
    },
};
exports.handler = function (argv) {
    console.log(argv);
};
