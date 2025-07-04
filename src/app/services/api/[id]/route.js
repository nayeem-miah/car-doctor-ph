import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async(request, {params}) => {
    const db = await connectDB();
    const servicesCollection = db.collection("services");

    try {
        const result = await servicesCollection.findOne({ _id: params.id });
        return NextResponse.json({
            data : result
        })
    } catch (error) {
        console.log(error)
    }
}