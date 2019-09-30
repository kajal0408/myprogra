var async = require('async');
async.waterfall([
    function(callback) {
        callback(null, 'kajal', 'simarn');
    },
    function(t, tt, callback) {
        
        callback(null, 'pagal');
    },
    function(t, callback) {
        
        callback(null, 'done');
    }
], function (err, result) {
    console.log(result)
    
});


async.waterfall([
    a,
    b,
    c,
], function (err, result) {

});
function a(callback) {
    callback(null, 'kajal', 'simran');
}
function b(t, tt, callback) {

    callback(null, 'pagal');
}
function c(t, callback) {
    
    callback(null, 'done');
}