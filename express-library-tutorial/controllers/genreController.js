var Genre = require('../models/genre');
var async = require('async');
const { body,validationResult } = require("express-validator");

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
exports.genre_detail = function(req, res, next) {
    async.parallel({
        genre :function(callback){
            Genre.findById(req.params.id)
            .exec(callback);
        },
        genre_books :function(callback){
            Genre.findById(req.params.id)
            .exec(callback);
        },

    }, function(err,results){
        if(err){ return next(err);}
        if(results.genre ==null){
            var err=new Error('Genre not found');
            err.status =404;
            return next(err);
        }
        res.render('genre_detail',{title: 'Genre Details', genre: results.genre, genre_books: results.genre_books});
    }

    );
};

//  Genre create form on GET.
exports.genre_create_get = function(req, res, next) {
    res.render('genre_form', { title: 'Create Genre' });
};

//  Genre create on POST.
exports.genre_create_post = [
    // validate and sanatize the data
    body('name', 'Invalid name').trim().isLength({min:1}).escape(),

    //processing
    function(req, res, next){
        const errors = validationResult(req);
        var genre=new Genre({name : req.body.name});
        if(!errors.isEmpty()){
            res.render('genre_form', {title : 'Genre Form', genre: genre, errors:errors.array()});

        }else{
            Genre.findOne({ name : req.body.name})
            .exec(function(err, data){
                if(err){return next(err);}
                if(data){
                    res.redirect(data.url);
                }else{
                    genre.save(function(err){
                        if(err){ return next(err);}
                        res.redirect(genre.url);
                    });
                }
            });
        }
    }


]


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