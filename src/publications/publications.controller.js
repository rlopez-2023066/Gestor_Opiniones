import Publication from '../publications/publications.model.js'
import Category from '../category/category.model.js'
import Comment from '../coment/comment.model.js'

//Crear Publicacion
export const addPublication = async(req , res) => {
    try{
        const data = req.body
        const id = req.user.uid

        let categoryId = await Category.findById(data.category)

        if(!categoryId){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Category not found'
                }
            )
        }

        let publications = new Publication(data)
        //Agarra el id del Token para generar una Publicacion sin necesidad de poner el Token
        publications.user = id

        await publications.save()

        return res.status(201).send(
            {
                success: true,
                message: 'Publication created successfully',
                publications
            }
        )

    }catch(error){
        console.error(error)
        return res.status(500).send(
            {
                success: false,
                message: 'General error when create Publication',
                error
            }
        )
    }
}


//Update
export const updatePublication = async (req, res) => {
    try{
        let {id} = req.params
        let data = req.body
        const idC = req.user.uid

        

        
        const publication = await Publication.findById(id)

        if(!publication){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Publication not found'
                }
            )
        }
           
        if(publication.user.toString() !== idC){
            return res.status(404).send(
                {
                    success: 'false',
                    message: `The Publication doesn't belong to you`
                }
            )
        } 


        let updatedPublication = await Publication.findByIdAndUpdate(
            id,
            data,
            {new: true}
        ) 

        if(!updatedPublication) return res.status(404).send(
            {
                success: false,
                message: 'Publication not found and not updated'
            }
        )

        return res.send(
            {
                success: true,
                message: 'Publication updated',
                updatedPublication
            }
        )
    }catch (error){
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


//Eliminar 
export const deletePublication = async(req, res) => {
    try{
        let {id} = req.params
        const idC = req.user.uid

        const publication = await Publication.findById(id)

        if(!publication){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Publication not found'
                }
            )
        }

        if(publication.user.toString() !== idC){
            return res.status(404).send(
                {
                    success: 'false',
                    message: `The Publication doesn't belong to you`
                }
            )
        } 

        
        let deletedPublication = await Publication.findByIdAndDelete(id)

        if(!deletedPublication) return res.status(404).send(
            {
                success: false,
                message: 'Publication not found, not deleted'
            }
        )

        return res.send(
            {
                success: true,
                message: 'Publication delete Successfully',
                deletedPublication
            }
        )
    }catch(error){
        console.error(error);
        return res.status(500).send(
            {
                success: false,
                message: 'General Error', 
                error
            }
        )
        
    }
}


