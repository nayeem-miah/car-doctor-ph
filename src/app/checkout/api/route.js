import { connectDB } from "@/lib/connectDB";

export const POST = async (req) => {
    const bookingData =await req.json();
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    try {
        const res = await bookingsCollection.insetOne(bookingData);
        return Response.json({
            message: "services booking success",
            data : res
        })
    } catch (error) {
        console.log(error);
    }
}