'use strict'

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route')

Route.on('/').render('dashboard')

Route.get('/users', 'UserController.index').as('users.index')
Route.get('/users/create', 'UserController.create').as('users.create')
Route.get('/users/:id/edit', 'UserController.edit').as('users.edit')