import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async(request)=>{
    const newUser = await request.json();
    try{
        const db = await connectDB();
        const userCollection = db.collection("users");
        const existingUser = await userCollection.findOne({email : newUser.email});
        if(existingUser){
            return Response.json({message : "user already exists"}, {status : 304});
        }
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const result = await userCollection.insertOne({...newUser, password : hashPassword});
        // console.log(result);
        return Response.json({message : "user created successfully"}, {status : 200});
}catch(e){
    console.log(e);
    return Response.json({message : "something went wrong",e}, {status : 500});
}   
}