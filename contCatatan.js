'use strict';

var response = require('./res');
var connection = require('./conn');

exports.catatan = function(req, res) {
    connection.query('SELECT * FROM catatan', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findcatatan = function(req, res) {    
    var catatan_id = req.params.catatan_id;
    connection.query('SELECT * FROM catatan where id = ?',
    [ catatan_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createcatatan = function(req, res) {    
    var p = req.body.pengeluaran;
    var b = req.body.biaya;
    var t = req.body.tgl;
   // response.ok("Berhasil menambahkan user! "+email, res)
    connection.query('INSERT INTO catatan values (?,?,?,?)',
    [ '',t,p,b ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)           
        }
    });
};

exports.updatecatatan = function(req, res) {
    var p = req.body.pengeluaran;
    var b = req.body.biaya;
    var id = req.body.id;
    connection.query('UPDATE catatan SET pengeluaran = ?, biaya = ? WHERE id = ?',
    [ p,b,id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah catatan!", res)
        }
    });
};

exports.deletecatatan = function(req, res) {    
    var catatan_id = req.params.catatan_id;
    connection.query('DELETE FROM catatan WHERE id = ?',
    [ catatan_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus catatan!", res)
        }
    });
};