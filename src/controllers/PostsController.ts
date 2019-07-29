import { Response, Request } from 'express'

class PostsController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.send('Raiz da aplicação.')
  }

  public async getPosts(req: Response, res: Request) {}
  public async getPost(req: Response, res: Request) {}
  public async createPost(req: Response, res: Request) {}
  public async updatePosts(req: Response, res: Request) {}
  public async deletePosts(req: Response, res: Request) {}
}

export default new PostsController()
