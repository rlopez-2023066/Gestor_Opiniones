'use strict'

import Category from '../category/category.model.js'

export const addCategory = async( req, res ) => {
    try{
        const data = await req.body
        const category = new Category(data)
        await category.save()

        return res.send(
            {
                success: true,
                message: `${category.name} saved successfully`
            }
        )

    }catch (error){
        console.error(error);
        return res.status(500).send(
            {
                success:false,
                message: 'General error  when adding Category',
                error
            }
        )
        
    }
}

