"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const session = useSession();
    const email = session?.data?.user?.email;


    const loadData = async () => {
        setLoading(true)
        const res = await fetch(`http://localhost:3000/my-bookings/api/${email}`)
        const myBookings = await res.json();
        setBookings(myBookings)
        setLoading(false)
    }
    // console.log(bookings);

    // delete my bookings data 
    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:3000/my-bookings/api/booking/${id}`, {
            method: "DELETE"
        })
        // convert json formate
        const response = await res.json()
        // console.log(response);
        // if (res.status === 200) {
        //     console.log("success delete");
        //     alert("success delete")
        //     loadData()
        // }
        if (response.data.acknowledged > 0) {
            // console.log("success delete");
            alert("success delete")
            loadData()
        }
    }

    useEffect(() => {
        loadData()
    }, [session])

    return (
        <div className="container mx-auto">
            <div className="relative  h-72">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src={"/assets/images/about_us/parts.jpg"}
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                        My Bookings
                    </h1>
                </div>
            </div>
            <div className="mt-12">
                {
                    loading ? <div className="text-4xl text-green-50 text-center py-6 "> loading...........</div> : <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Service Name</th>
                                    <th>Price</th>
                                    <th>Booking Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {bookings?.map(({ serviceTitle, _id, date, price }, id = 0) => (
                                    <tr key={_id}>
                                        <th>{id = id + 1}</th>
                                        <td>{serviceTitle}</td>
                                        <td>{price} $</td>
                                        <td>{date}</td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <Link href={`/my-bookings/update/${_id}`}><button className="btn btn-primary">Edit</button></Link>
                                                <button
                                                    onClick={() => handleDelete(_id)}
                                                    className="btn btn-error"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default Page;