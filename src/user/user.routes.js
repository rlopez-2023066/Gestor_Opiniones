import { Router } from "express";
import {
    updateUser,
    updatePassword
} from '../user/user.controller.js'
import { validateJwt } from "../../middlewares/validate.jwt.js";
import { updateUserValidator } from "../../middlewares/validators.js";

const api = Router()

api.put('/updateUser/:id', validateJwt, updateUserValidator, updateUser)
api.put('/updatePassword', validateJwt, updatePassword)

export default api