const fs = require('fs-extra');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
var iconv = require('iconv-lite');

var buff = fs.readFileSync('test.xml');
var buffer = iconv.decode(buff, 'win1251');

parser.parseString(buffer, function(err, res) {
  for (const item of res.DATA.RECORD) {
    var txt = item.ORG_NAME[0] + " - " + item.REGION_NAME[0];
    console.log(txt);
  }
/*
    console.log(res.DATA.RECORD.length);
  var txt = res.DATA.RECORD[0].ORG_NAME[0] + " - " + res.DATA.RECORD[0].REGION_NAME[0];
  console.log(txt);
*/  
});
