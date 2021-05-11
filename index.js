#!/usr/bin/env node
const yargs = require('yargs');
yargs
    .commandDir('cmds_temp')
    .demandCommand()
    .command('get <source> [proxy]', 'make a get HTTP request')
    .help()
    .alias('help', 'h').argv;
