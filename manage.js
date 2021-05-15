#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2));
argv
    .commandDir('cmds')
    .demandCommand(1, 'Inserire almeno un comando')
    .help()
    .alias('help', 'h').argv;
//console.log(argv);
