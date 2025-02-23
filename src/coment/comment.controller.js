'use strict'

import Comment from '../coment/comment.model.js'
import Publication from '../publications/publications.model.js'

//Agregar
export const addComment = async (req, res) => {
    const { publicationId } = req.params 
    const data = req.body 
    const id = req.user.uid   

    try {
        
        const publication = await Publication.findById(publicationId) 
        if (!publication) {
            return res.status(404).send({
                success: false,
                message: 'Publication not found'
            }) 
        }

        const comment = new Comment({
            ...data,  
            publication: publicationId,
            user: id
        }) 

        await comment.save() 

        await Publication.findByIdAndUpdate(
            publicationId,
            { $push: { comments: comment._id } },
            { new: true }
        ) 

        return res.status(201).json({
            success: true,
            message: 'Comment adding successfully',
            comment
        })

    } catch (error) {
        console.error(error) 
        return res.status(500).json({
            success: false,
            message: 'Error adding Comment'
        })
    }
}






//Actualizar
export const updateComment = async(req, res) => {
    try{
        let {id} = req.params
        let data = req.body
        const idC = req.user.uid   

        


        const comment = await Comment.findById(id) 

        if (!comment){
            return res.status(404).send(
                {
                success: false,
                message: 'Comment not found'
                }
            )
        }

        if(comment.user.toString() !== idC){
            return res.status(404).send({
                success: false,
                message: `The comment doesn't belong to you`
            }) 
        }

        let updateComment = await Comment.findByIdAndUpdate(
            id,
            data,
            {new: true}
        )

        if(!updateComment) return res.status(404).send(
            {
                success: false,
                message: 'Comment not found and not updated'
            }
        )

        return res.send(
            {
                success: true,
                message: 'Comment updated',
                updateComment
            }
        )

    }catch(error){
        console.error(error)
        return res.status(500).send(
            {
                success: false,
                message: 'General error',
                error
            }
        )
        
    }
}

//Eliminar
export const deleteComment = async (req, res) => {
    try{
        let {id} = req.params
        const idC = req.user.uid   

        const comment = await Comment.findById(id)

        if(!comment){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Comment not found'
                }
            )
        }

        if(comment.user.toString() !== idC){
            return res.status(404).send({
                success: false,
                message: `The comment doesn't belong to you`
            })
        }


        let deletedComment = await Comment.findByIdAndDelete(id)
        
        if(!deletedComment) return res.status(404).send(
            {
                success: false,
                message: 'Comment not found, not deleted'
            }
        )

        return res.send(
            {
                success: true,
                message: 'Comment deleted successfully',
                deletedComment
            }
        )

        
    }catch(error){
        console.error(error) 
        return res.status(500).send(
            {
                success: false,
                message: 'General Error',
                error
            }
        )
        
    }
}

