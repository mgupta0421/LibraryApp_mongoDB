var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookInstance');
const { body,validationResult } = require('express-validator');


//async function
var async = require('async');
exports.index = function(req, res) {
    async.parallel({
        book_count :function(callback){
            Book.countDocuments({}, callback);
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count : function(callback){
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count : function(callback){
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results){
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};

//  list of all books.
exports.book_list = function(req, res, next) {

    Book.find({}, 'title author')
      .populate('author')
      .exec(function (err, list_books) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('book_list', { title: 'Book List', book_list: list_books });
      });
  
  };

//  detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('Book detail: ' + req.params.id);
};

//  book create form on GET.
exports.book_create_get = function(req, res, next) {
    
    // get all author and genere to map the bool
    async.parallel({
        author : function(callback){
            Author.find(callback);
        },
        genre : function(callback){
            Genre.find(callback);
        },
            
        }, function(err, results){
            if(err){ return next(err);}
            res.render('book_form', {title: 'Book form', authors:results.author, genres:results.genre})
        }
    );
 };

//  book create on POST.
exports.book_create_post = function(req, res) {
    res.send('Book create POST');
};

//  book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('Book delete GET');
};

//  book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send(' Book delete POST');
};

//  book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('Book update GET');
};

//  book update on POST.
exports.book_update_post = function(req, res) {
    res.send('Book update POST');
};