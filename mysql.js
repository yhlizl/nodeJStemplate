var mysql = require('mysql');
var db_option = {
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'demo_nodejs',
    port: 3306
};

exports.index = function(req, res){
     var connection = mysql.createConnection(db_option);
     var query ='SELECT * FROM users';
    connection.query(query, function(err, rows, fields){
        if(err) throw err;
        res.render('index', { title: '這是 mysql + node.js 示範版本', 'items': rows });   
    });
}