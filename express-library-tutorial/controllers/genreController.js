const { nextTick } = require('async');
var Genre = require('../models/genre');
var async = require('async');

//  list of all Genre.
exports.genre_list = function(req, res, next) {
    Genre.find()
    .sort([['name', 'ascending']])
    .exec(function(err,data){
        if(err) {return next(err);}
        res.render('genre_list', {title: 'Genre List', list_genres: data})
    })
};

//  detail page for a specific Genre.
exports.genre_detail = function(req, res) {
    res.send('Genre detail: ' + req.params.id);
};

//  Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.send('Genre create GET');
};

//  Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.send('Genre create POST');
};

//  Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('Genre delete GET');
};

//  Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('Genre delete POST');
};

//  Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('Genre update GET');
};

//  Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send(' Genre update POST');
};