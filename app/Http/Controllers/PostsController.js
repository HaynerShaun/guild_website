'use strict'

class PostsController {
    * index (request, response) { 
        yield response.sendView('home') 
    }
}

module.exports = PostsController
