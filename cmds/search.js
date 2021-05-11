exports.command = 'search -e <email>';
exports.desc = "Search user's profile from email";
exports.aliases = ['e', 'email'];
exports.builder = {};
exports.handler = function (argv) {
    console.log('and the user is...', argv.dir);
};
