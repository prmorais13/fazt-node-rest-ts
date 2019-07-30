import { Response, Request } from 'express'

import User from '../models/User'

class UserController {
  public async getUsers(req: Request, res: Response) {
    const users = await User.find()
    res.json(users)
  }

  public async getUser(req: Request, res: Response) {
    const user = await User.findOne({ username: req.params.username }).populate(
      'posts',
      'title content -_id'
    )
    res.send(user)
  }

  public async createUser(req: Request, res: Response) {
    const user = await User.create(req.body)
    res.json(user)
  }

  public async updateUser(req: Request, res: Response) {
    res.send(
      await User.findOneAndUpdate({ username: req.params.username }, req.body, {
        new: true
      })
    )
  }

  public async deleteUser(req: Request, res: Response) {
    const { username } = req.params
    await User.findOneAndRemove({ username })
    res.send({ message: 'Usuário excluído com sucesso!' })
  }
}

export default new UserController()
