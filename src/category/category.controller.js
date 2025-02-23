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


export const listCategory = async (req, res) => {
    try{
        const {limit, skip} = req.query

        const categories = await Category.find()
        .skip(skip)
        .limit(limit)

        if (categories.length === 0){
            return res.status(404).send(
                {
                    success: false,
                    message: 'No categories found'
                }
            )
        }

        return res.send(
            {
                success: true,
                message: 'Categories found',
                total: categories.length,
                categories
            }
        )

    }catch(error){
        console.error(error);
        return res.status(500).send(
            {
                success:false,
                message: 'General error  when listing Categories',
                error
            }
        )
    }
}

export const updateCategory = async (req, res) => {
    try{
        const {id} = req.params
        const {name, description} = req.body
        const category = await Category.findByIdAndUpdate(id, {name, description}, {new: true})
        if (!category){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Category not found'
                }
            )
        }
        return res.send(
            {
                success: true,
                message: 'Category updated',
                category
            }
        )

    }catch(error){
        console.error(error);
        return res.status(500).send(
            {
                success:false,
                message: 'General error  when updating Category',
                error
            }
        )
    }
}

export const deleteCategory = async (req, res) => {
    try{
        const {id} = req.params
        const category = await Category.findByIdAndDelete(id)
        if (!category){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Category not found'
                }
            )
        }
        return res.send(
            {
                success: true,
                message: 'Category deleted',
                category
            }
        )

    }catch(error){
        console.error(error);
        return res.status(500).send(
            {
                success:false,
                message: 'General error  when deleting Category',
                error
            }
        )
    }
}