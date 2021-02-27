var Author = require('../models/author');
const { body,validationResult } = require('express-validator');


//list of all authors
exports.author_list = function(req,res,next){
    Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function(err,data){
        if(err) {return next(err);}
        res.render('author_list', {title: 'Author List', author_list: data})
    });
};

// specific author detail
exports.specific_author = function(req,res){
    res.send('specific author details' + req.params.id);
};

// create new author as GET req
exports.create_author_get = function(req,res){
    res.render('author_form', {title: 'Create Author'});
};

exports.create_author_post =[

    // validate and sanitize data
    body('first_name', 'first_name required').trim().isLength({min :1}).escape().withMessage('First name must be specified.')
    .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name', 'family_name required').trim().isLength({min :1}).escape().withMessage('First name must be specified.')
    .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('birth_date', 'birth_date required').trim().isLength({min :1}).escape(),
    body('death_date', 'death_date required').trim().isLength({min :1}).escape(),

    function(req,res,next){
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('author_form', { title: 'Create Author', author: req.body, errors: errors.array() });
            return;
        }
        author = new Author({
            first_name : req.body.first_name,
            family_name :req.body.family_name,
            birth_date : req.body.birth_date,
            death_date : req.body.death_date
        });
        author.save(function(err){
            if(err){return next(err);}
            res.redirect(author.url);
        });

    }
]



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