var BookInstance = require('../models/bookInstance');

// list of all BookInstances.
exports.bookinstance_list = function(req, res, next) {

    BookInstance.find()
      .populate('book')
      .exec(function (err, list_bookinstances) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
      });
  
  };

//  detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res) {
    res.send('BookInstance detail: ' + req.params.id);
};

//  BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
    res.send('BookInstance create POST');
};

//  BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('BookInstance delete GET');
};

//  BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('BookInstance delete POST');
};

//  BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('BookInstance update GET');
};

//  bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('BookInstance update POST');
};