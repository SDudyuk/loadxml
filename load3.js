const fs = require('fs-extra');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
var iconv = require('iconv-lite');

const path = "test.xml";

var buff = fs.readFileSync('test.xml');
var buffer = iconv.decode(buff, 'win1251');

parser.parseString(buffer, function(err, res) {
  var txt = res.DATA.RECORD[0].SURNAME[0];
  console.log(txt);
});
