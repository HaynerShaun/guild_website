'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'UsersController.index')
Route.get('login', 'UsersController.index')
Route.get('profile', 'UsersController.profile')
Route.get('register', 'UsersController.register')
Route.get('home', 'PostsController.index')

Route.post('register','UsersController.create')
Route.post('login','UsersController.login')