var parseString = require("xml2js").parseString;
var stripPrefix = require("xml2js").processors.stripPrefix;
const fs = require('fs');
const autoenc = require('node-autodetect-utf8-cp1251-cp866');


/*
var xml = `
<f:table xmlns:f="http://www.w3schools.com/furniture"> 
  <f:name>Максим</f:name>                
  <f:width>80</f:width>                                
  <f:length>120</f:length>                             
</f:table>
`;
*/

let buff = fs.readFileSync('test.xml');
var buffer = iconv.decode(buff, 'win1251');



console.log('start');

parseString(buffer, { tagNameProcessors: [stripPrefix] }, function(err, result) {
  if (err) throw err;

  var str = JSON.stringify(result);

  fs.writeFileSync('user.json', str);
   
  var obj = JSON.parse(str);
  //console.log(JSON.stringify(obj));
  console.log(obj.data.$.FORMAT_VERSION);

  //console.log(result);
  console.log("Done");
});

console.log('end');