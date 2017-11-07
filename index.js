var r        = require('requestify');
var now      = require('performance-now');
var fs       = require('fs');
var filename = './urls.json';

// This line opens the file as a readable stream
var readStream = fs.createReadStream(filename);
var data       = '';

var getUrl = function (idx, url) {
    var t0 = now();
    r.get(url).then(
        function (response) {
            var t1              = now();
            var time_difference = (parseFloat(t1) - parseFloat(t0)).toFixed(2);
            var status          = response.headers['cf-cache-status'];
            if ( status === undefined ) status = "UNCACHED";
            console.log("Status: " + status + " - " + response.code + " - " + time_difference + "ms -- " + url);
        }
    )
};

var parseData = function (str) {
    var json = JSON.parse(str);
    var urls = json.urls;
    for ( var i = 0, o = urls.length; i < o; i++ ) {
        getUrl(i, urls[i]);
    }
};

readStream
    .on('data', function (chunk) {
        data += chunk;
    })
    .on('end', function () {
        parseData(data);
    })
    .on('error', function (err) {
        console.log("error", err)
    });
