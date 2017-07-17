'use strict'

class UsersController {
    * index (request, response) { 
        yield response.sendView('login') 
    }
    * register (request, response) { 
        yield response.sendView('register') 
    }
    * profile (request, response) { 
        yield response.sendView('profile') 
    }
    * create (request, response) { 
        yield response.sendView('login') 
    }
}

module.exports = UsersController
