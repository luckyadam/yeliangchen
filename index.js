#! /usr/bin/env node --harmony

var minimist = require('minimist');
var fs = require('fs');

var argvs = minimist(process.argv.slice(2));
if (argvs.say === 'diao') {
  console.log(fs.readFileSync(__dirname + '/liangchen_diao.txt').toString());
} else {
  console.log(fs.readFileSync(__dirname + '/liangchen.txt').toString());
}
