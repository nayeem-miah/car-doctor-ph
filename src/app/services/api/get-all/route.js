import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = db.collection("services");
    try {
        const res = await servicesCollection.find().toArray();
        // console.log(res);
        // return Response.json({
        //     message: "get services data success",
        //     data : res
        // })
        return NextResponse.json({
           message: "get services data success",
                data : res
        })
    } catch (err) {
        console.log(err)
        return Response.json("something is wrong", err)
    }
}