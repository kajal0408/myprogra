var async = require('async');
async.auto({
    getName: function (callback) {
        var college = "sviet";
        callback(null, college);
    },
    getAge: function (callback) {
        var number = 4523;
        callback(null, number);
    },
    getDetail: ['getName', 'getnumber', function (result, callback) {
        var university = "mrsptu"
        var detail = `the name of college is ${result.getName} and total students is ${result.getnumber} and university is ${university}`;
        callback(null, detail);
    }],

}, function (err, results) {
    console.log('err = ', err);
    console.log('results = ', results);



});