import User from '../user/user.model.js' 
import Category from '../category/category.model.js' 
import { encrypt } from '../../utils/encrypt.js' 

const initUser  = async () => {
    try {
        const adminExist = await User.findOne({ role: 'ADMIN' }) 

        if (!adminExist) {
            const password = await encrypt('@dmin', 10) 

            const userAdmin = new User({
                name: 'Rene',
                surname: 'López', // Corrige  suername  a  surname 
                username: 'rlopez',
                email: 'rlopez@gmail.com',
                password: password,
                role: 'ADMIN',
            }) 

            await userAdmin.save() 
            console.log('Admin created') 
        } else {
            console.log('Admin already exists') 
        }
    } catch (error) {
        console.error('Error, not Admin created', error) 
    }
} 

const initCategory = async () => {
    try {
        const categories = await Category.countDocuments() 
        if (categories === 0) {
            const categoriesDefault = [
                {
                    name: 'Default',
                    description: 'Default category',
                },
            ] 

            await Category.insertMany(categoriesDefault) 
            console.log('Default categories added') 
        } else {
            console.log('Categories already exist') 
        }
    } catch (error) {
        console.error({
            message: 'Error adding default categories',
            error,
        }) 
    }
} 

// Función para inicializar la base de datos
const initializeDatabase = async () => {
    await initUser () 
    await initCategory() 
} 

export default initializeDatabase 