import mongoose from "mongoose"


const Connection = async (username, password) => { 
    //const URL = `mongodb://${username}:${password}@crud-app-shard-00-00.6sodqzw.mongodb.net:27017,crud-app-shard-00-01.6sodqzw.mongodb.net:27017,ac-l9rabib-shard-00-02.6sodqzw.mongodb.net:27017/?ssl=true&replicaSet=atlas-13d90d-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL = `mongodb://127.0.0.1:27017`;

    try {
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}
export default Connection;