'use strict';

var response = require('./res');
var connection = require('./conn');
var fs = require("fs");git 
exports.users = function (req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findUsers = function (req, res) {
    var user_id = req.params.user_id;
    connection.query('SELECT * FROM user where id = ?',
        [user_id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};

exports.createUsers = function (req, res) {
    var name = req.body.name;
    var img = req.body.image;
    var realFile = Buffer.from(img, "base64");
    fs.writeFile(name, realFile, function (err) {
        if (err)
            console.log(err);
    });
    //     var nama = req.body.nama;
    //     var email = req.body.email;
    //     var hp = "087";
    //    // response.ok("Berhasil menambahkan user! "+email, res)
    //     connection.query('INSERT INTO user values (?,?,?,?)',
    //     [ '',nama,hp,email ], 
    //     function (error, rows, fields){
    //         if(error){
    //             console.log(error)
    //         } else{
                response.ok("Berhasil menambahkan user!", res)
    //         }
    //     });
};

exports.updateUsers = function (req, res) {

    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('UPDATE user SET first_name = ?, last_name = ? WHERE id = ?',
        [first_name, last_name, user_id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah user!", res)
            }
        });
};

exports.deleteUsers = function (req, res) {

    var user_id = req.body.user_id;

    connection.query('DELETE FROM user WHERE id = ?',
        [user_id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus user!", res)
            }
        });
};