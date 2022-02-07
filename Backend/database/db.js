import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `'mongodb://127.0.0.1:27017/myDB'
`;
    try {
        console.log("here")
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;