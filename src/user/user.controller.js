'use strict'
import { checkPassword, encrypt } from '../../utils/encrypt.js'
import User from '../user/user.model.js'


//Actualizar el Usuario
export const updateUser = async(req, res) => {
    try{
        const {id} = req.params

        const data = req.body

        const idC = req.user.uid

        const userc = await User.findById(id)

        if(userc._id.toString() !== idC){
            return res.status(403).send({
                success: false,
                message: 'You cannot update the profile of others.'
            })
        }



        const update = await User.findByIdAndUpdate(
            id,
            data,
            {new: true}
        )

        if(!update) return res.status(404).send(
            {
                success: false,
                message: 'User not found'
            }
        )
        return res.send(
            {
                success: true,
                message: 'User updated successfully',
                user: update
            }
        )
    }catch(error){
        console.error('General Error', error)
        return res.status(500).send(
            {
                success: false,
                message: 'General error',
                error
            }
        )
    }
}



export const updatePassword = async(req, res)=>{
    try{
        let id = req.user.uid

        let {oldPassword, newPassword} = req.body

        let user = await User.findById(id)
        
        if(user && await checkPassword(user.password, oldPassword)){
            user.password = await encrypt(newPassword)
            user.save()
            return res.send(
                {
                    success: true,
                    message:'Updated Password Successfully'
                }
            )
        }
        return res.send(
            {
                success: false, 
                message:'Error Uptades Password'
            }
        )

    }catch(error){
        console.error(error);
        return res.status(500).send(
            {
                success: false,
                message:'General error'
            }
        )
    }
}