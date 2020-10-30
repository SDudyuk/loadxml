const fs = require('fs');
const xml2js = require('xml2js');

// read XML from a file
const xml = fs.readFileSync('test.xml');

var json = xml2js.toJson(xml);

fs.writeFileSync('user.json', json);

/*
fs.readFile( 'test.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log("to json ->", json);
 });
 */

