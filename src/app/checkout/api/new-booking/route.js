import { connectDB } from "@/lib/connectDB";

export const POST = async (req) => {
    const bookingData =await req.json();
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    try {
        const res = await bookingsCollection.insertOne(bookingData);
        return Response.json({
            message: "services booking success",
            data : res
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return Response.json({
            message: error,
        }, {status: 400})
    }
}