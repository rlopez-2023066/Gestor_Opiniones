'use strict'
import User from '../user/user.model.js'


//Actualizar el Usuario
export const updateUser = async(req, res) => {
    try{
        const {id} = req.params

        const data = req.body

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

// export const changePassword = async (req, res) => {
//     try{
//         const {id} = req.params
//         const {oldPassword, newPassword} = req.body

//         const user = await User.findById(id)
        
//         if(!user){
//             return res.status(404).send(
//                 {
//                     success: false,
//                     message: 'User not found'
//                 }
//             )
//         }



//     }
// }