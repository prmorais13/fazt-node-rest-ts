import { Router } from 'express'

import userControlller from '../controllers/UserController'
// import indexController from '../controllers/IndexController'
import postsController from '../controllers/PostsController'

const routes = Router()

routes.get('/', postsController.index)
routes.get('/posts', postsController.getPosts)
routes.get('/posts/:url', postsController.getPost)
routes.post('/posts', postsController.createPost)
routes.put('/posts/:url', postsController.deletePosts)
routes.delete('/posts/:url', postsController.deletePosts)

export default routes
