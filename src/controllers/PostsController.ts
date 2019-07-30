import { Response, Request, Router } from 'express'

import Post from '../models/Post'

class PostsController {
  // router: Router

  // constructor() {
  //   this.router = Router()
  //   this.routes()
  // }
  // public async index(req: Request, res: Response): Promise<Response> {
  //   return res.send('Raiz da aplicação.')
  // }

  public async getPosts(req: Request, res: Response) {
    const posts = await Post.find()
    res.json(posts)
  }

  public async getPost(req: Request, res: Response) {
    const post = await Post.findOne({ url: req.params.url })
    res.send(post)
  }

  public async createPost(req: Request, res: Response) {
    const post = await Post.create(req.body)
    res.json(post)
  }

  public async updatePost(req: Request, res: Response) {
    res.send(
      await Post.findOneAndUpdate({ url: req.params.url }, req.body, {
        new: true
      })
    )
  }

  public async deletePost(req: Request, res: Response) {
    const { url } = req.params
    await Post.findOneAndRemove({ url })
    res.send({ message: 'Post excluído com sucesso!' })
  }

  // private routes() {
  //   this.router.get('/', this.getPosts)
  //   this.router.get('/:url', this.getPost)
  //   this.router.post('/', this.createPost)
  //   this.router.put('/:url', this.updatePosts)
  //   this.router.delete('/:url', this.deletePosts)
  // }
}
//const postRoutes = new PostsController()
// export default new PostsController().router
export default new PostsController()
