'use strict';

module.exports = function (app) {
    var user = require('./controller');

    app.route('/')
        .get(user.index);

    app.route('/users')
        .get(user.users);

    app.route('/users/:user_id')
        .get(user.findUsers);

    app.route('/users')
        .post(user.createUsers);

    app.route('/users')
        .put(user.updateUsers);

    app.route('/users')
        .delete(user.deleteUsers);
        

    var catatan = require('./contCatatan');

    app.route('/cat')
        .get(catatan.index);

    app.route('/catatans')
        .get(catatan.catatan);

    app.route('/catatans/:catatan_id')
        .get(catatan.findcatatan);

    app.route('/catatans')
        .post(catatan.createcatatan);

    app.route('/catatans')
        .put(catatan.updatecatatan);

    app.route('/catatans/:catatan_id')
        .delete(catatan.deletecatatan);
};