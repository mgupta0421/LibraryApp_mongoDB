var express = require('express');
var router = express.Router();
//controller module

var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

//book routes
router.get('/', book_controller.index);

router.get('/books', book_controller.book_list);

router.get('/book/create', book_controller.book_create_get);

router.post('/book/create', book_controller.book_create_post);

router.get('/book/:id/delete', book_controller.book_delete_get);

router.post('/book/:id/delete', book_controller.book_delete_post);

router.get('/book/:id/update', book_controller.book_update_get);

router.post('/book/:id/update', book_controller.book_update_post);

router.get('/book/:id', book_controller.book_detail);

//author routes

router.get('/author/create', author_controller.create_author_get);

router.post('/author/create', author_controller.create_author_post);

router.get('/author/:id/delete', author_controller.author_delete_get);

router.post('/author/:id/delete', author_controller.author_delete_post);

router.get('/author/:id/update', author_controller.author_update_get);

router.post('/author/:id/update', author_controller.author_update_post);

router.get('/author/:id', author_controller.specific_author);

router.get('/authors', author_controller.author_list);

// bookinstance routes

router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

router.get('/bookinstances', book_instance_controller.bookinstance_list);

// genre routes

router.get('/genre/create', genre_controller.genre_create_get);

router.post('/genre/create', genre_controller.genre_create_post);

router.get('/genre/:id/delete', genre_controller.genre_delete_get);

router.post('/genre/:id/delete', genre_controller.genre_delete_post);

router.get('/genre/:id/update', genre_controller.genre_update_get);

router.post('/genre/:id/update', genre_controller.genre_update_post);

router.get('/genre/:id', genre_controller.genre_detail);

router.get('/genres', genre_controller.genre_list); 

module.exports = router;