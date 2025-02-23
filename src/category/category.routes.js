import {Router} from 'express'

import {
    addCategory,
    deleteCategory,
    updateCategory,
    listCategory

} from '../category/category.controller.js'

import {
    isAdmin,
    validateJwt
} from '../../middlewares/validate.jwt.js'

const api = Router()


//Routes Admin
api.post('/addCategory', validateJwt, isAdmin,addCategory)
api.delete('/deleteCategory/:id', validateJwt, isAdmin, deleteCategory)
api.put('/updateCategory/:id', validateJwt, isAdmin, updateCategory)
api.get('/listCategory', validateJwt, isAdmin, listCategory)


export default api