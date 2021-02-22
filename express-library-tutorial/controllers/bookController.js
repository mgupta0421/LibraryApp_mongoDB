var Book = require('../models/book');

exports.index = function(req, res) {
    res.send('Site Home Page');
};

//  list of all books.
exports.book_list = function(req, res) {
    res.send(' Book list');
};

//  detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('Book detail: ' + req.params.id);
};

//  book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('Book create GET');
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