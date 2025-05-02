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

// update route
export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    const { date, phone, address } =await request.json();

    try {
        const filter = { _id: new ObjectId(params.id) };
        const updatedDoc = {
            $set: {
                date,
                phone,
                address
            }
        };
        const options = { upsert: true };

        const res = await bookingsCollection.updateOne(filter, updatedDoc, options);
        return Response.json({
            message: "data updated success",
            data: res
        })
    } catch (error) {
        console.log(error);
        return Response.json({
            message: "updated data was not success",
            error: error
        })
    }
}



// get route
export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    try {
        const res = await bookingsCollection.findOne({ _id:new ObjectId(params.id) });
        return Response.json({
            data : res
        })
    } catch (error) {
        console.log(error);
        return Response.json({
            message: "cannot find this data", 
            error: error
        })
    }
}

