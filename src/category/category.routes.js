import {Router} from 'express'

import {
    addCategory

} from '../category/category.controller.js'

import {
    validateJwt
} from '../../middlewares/validate.jwt.js'

const api = Router()


//Routes Admin
api.post('/addCategory', validateJwt, addCategory)

export default api