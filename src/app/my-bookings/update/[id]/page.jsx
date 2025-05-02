"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
    const { data } = useSession();
    const [bookings, setBookings] = useState({});

    const loadData = async () => {
        const res = await fetch(`http://localhost:3000/my-bookings/api/booking/${params.id}`);
        // console.log(res);
        const data = await res.json();
        setBookings(data.data);
    }
    console.log(bookings);
    const { serviceTitle, serviceImage, phone, date, address, price } = bookings;

    const handleUpdate = async (event) => {
        event.preventDefault();
        const updatedData = {
            phone: event.target.phone.value,
            address: event.target.address.value,
            date: event.target.date.value
        }

        const res = await fetch(`http://localhost:3000/my-bookings/api/booking/${params.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
        if (res.status === 200) {
            alert("updated success");
            console.log("data updated success");
        }
    }


    useEffect(() => {
        loadData()
    }, [params]);

    return (
        <div className="container mx-auto">
            <div className="relative  h-72">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src={serviceImage}
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                        Checkout {serviceTitle}
                    </h1>
                </div>
            </div>
            <div className="my-12 bg-slate-300 p-12">
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={data?.user?.name} type="text" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input defaultValue={date} type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                defaultValue={data?.user?.email}
                                readOnly
                                type="text"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input
                                defaultValue={price}
                                readOnly
                                type="text"
                                name="price"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                defaultValue={phone}
                                required
                                type="text"
                                name="phone"
                                placeholder="Your Phone"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Present Address</span>
                            </label>
                            <input
                                required
                                defaultValue={address}
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn btn-primary btn-block"
                            type="submit"
                            value="Order Confirm"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page;