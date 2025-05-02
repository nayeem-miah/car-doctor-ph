import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
     const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    try {
        const filter = {_id: new ObjectId(params.id)}
        const res = await bookingsCollection.deleteOne(filter);
        return Response.json({
            message: "deleted success",
            data : res
        })
    } catch (error) {
        console.log(error);
        return Response.json({
            message: "delete is not success !!!",
            error: error
        });
    }

}