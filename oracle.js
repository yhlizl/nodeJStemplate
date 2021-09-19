router.get('/', function (req, res, next) {

    var oracledb = require('oracledb');
    oracledb.getConnection(
        {
            user: 'username',
            password: 'password',
            connectString: '192.168.20.10:1521/ORCL'
        },
        function (err, connection) {
            if (err) {
                console.error(err.message);
                return;
            }
            connection.execute(
                "SELECT * from CMS_FIlE where content_id=:id",
                [1072],  // bind value for :id
                function (err, result) {
                    if (err) {
                        console.error(err.message);
                        return;
                    }
                    res.render('index', {title: '查詢資訊：' + JSON.stringify(result.rows)});
                });
        });

});