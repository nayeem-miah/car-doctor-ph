import { connectDB } from "@/lib/connectDB"
import { Sevs } from "@/lib/services";

export const GET = async () => {
    const db =await connectDB();
    const servicesCollection = db.collection("services");
    try {
        await servicesCollection.deleteMany();
        const res = await servicesCollection.insertMany(Sevs);
        return Response.json({message : "seed upload successfully"}, {status : 200})
    } catch (error) {
        console.error(error)
        return Response.json({message: "something is wrong"})
    }


}
