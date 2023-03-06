const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb+srv://sparsh:Sparsh123@cluster0.b9egr1y.mongodb.net/expenseAdd')
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}