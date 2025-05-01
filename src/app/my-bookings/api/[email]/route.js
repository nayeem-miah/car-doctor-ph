import { connectDB } from "@/lib/connectDB";

export const GET = async (req, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    try {
        const filter = { email: params.email };
        const result = await bookingsCollection.find(filter).toArray();

        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: error.message }), {
            status: 400,
        });
    }
};
