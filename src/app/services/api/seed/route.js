import { connectDB } from "@/lib/connectDB"
import { Sevs } from "@/lib/services";
import { NextResponse } from "next/server";


export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = db.collection("services");

    try {
        await servicesCollection.deleteMany();
        const res = await servicesCollection.insertMany(Sevs);
        return Response.json({
        message : "seed inserted success"
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error
        })
    }

}