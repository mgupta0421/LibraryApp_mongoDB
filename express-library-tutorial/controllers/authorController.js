var author = require('../models/author');

//list of all authors
exports.author_list = function(req,res){
    res.send('author list');
};

// specific author detail
exports.specific_author = function(req,res){
    res.send('specific author details' + req.params.id);
};

// create new author as GET req
exports.create_author_get = function(req,res){
    res.send('crete implementation')
};

exports.create_author_post = function(req,res){
    res.send('crete implementation')
};

// delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// update form on GET.
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// update on POST.
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};