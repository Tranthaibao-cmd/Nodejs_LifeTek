//chuyen doi object hbs not access
module.exports = {
    multiToObject : function (Array) {
        return Array.map(Array => Array.toObject());
},
    Object : function (Array) {
        return Array ? Array.toObject() : Array;
    }
}