import { MongoClient, ServerApiVersion } from "mongodb";

let db
export const connectDB = async () => {
    if(db) return db;
// try catch block
    try{
        const uri = process.env.NEXT_AUTH_MONGODB_URI
        const client = new MongoClient(uri,{
            serverApi:{
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db =  client.db("car-doctor");
        return db;
    }catch(e){
        console.log(e);
    }
    
}