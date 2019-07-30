import { Router } from 'express'

// import userControlller from '../controllers/UserController'
// import indexController from '../controllers/IndexController'
import postsController from '../controllers/PostsController'

const routes = Router()

// routes.get('/', postsController.index)
routes.get('/', postsController.getPosts)
routes.get('/:url', postsController.getPost)
routes.post('/', postsController.createPost)
routes.put('/:url', postsController.updatePost)
routes.delete('/:url', postsController.deletePost)

export default routes
