var async = require('async');


async.series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        callback(null, 'two');
    },
    function(callback) {
        callback(null, 'three');
    }
],
function(err, results) {
    
});

async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    },
    three: function(callback){
        setTimeout(function() {
            callback(null, 3);
        }, 800);
    }
}, function(err, results) {
    console.log(results);
    
    
});