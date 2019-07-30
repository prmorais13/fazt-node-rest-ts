import { Router, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

import userControlller from '../controllers/UserController'

const routes = Router()

routes.post(
  '/',
  [
    check('email')
      .isEmail()
      .withMessage('Email inválido!')
    // .isEmpty()
    // .withMessage('Email é obrigatorio!'),

    // check('password')
    //   .isLength({ min: 5 })
    //   .withMessage('A senha deve ter no mínino 5 caracteres!')
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array())
    }
    userControlller.createUser
  }
)
routes.get('/', userControlller.getUsers)
routes.get('/:username', userControlller.getUser)
routes.put('/:username', userControlller.updateUser)
routes.delete('/:username', userControlller.deleteUser)

export default routes
