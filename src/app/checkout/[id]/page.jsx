"use client";
import { getSingleService } from "@/components/serviceApi/getData";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Checkout = ({ params }) => {
    const [service, setService] = useState({});
    const { data } = useSession();

    const loadService = async () => {
        const getSingleData = await getSingleService(params.id);
        setService(getSingleData.data)
    }

    // destructure service data 
    const { title, description, img, price, facility, _id } = service;

    const handleBooking = async (event) => {
        event.preventDefault();

        const bookingData = {
            name: data.user.name,
            email: data.user.email,
            phone: event.target.phone.value,
            address: event.target.address.value,
            date: event.target.date.value,
            serviceTitle: title,
            serviceImage: img,
            price: price,
            serviceId: _id
        }

        // console.log(bookingData);

        const res = await fetch('http://localhost:3000/checkout/api/new-booking', {
            method: "POST",
            body: JSON.stringify(bookingData),
            headers: {
                "content-type": "application/json"
            }
        })
        if (res.status === 200) {
            console.log("success booking ");
            alert("success bookings")

        }


    };
    useEffect(() => {
        loadService()
    }, [params])

    return (
        <div className="container mx-auto">
            checkout page

            <div className="relative  h-72">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src={img}
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                        Checkout {title}
                    </h1>
                </div>
            </div>
            <div className="my-12 bg-slate-300 p-12">
                <form onSubmit={handleBooking}>
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
                            <input defaultValue={new Date().getDate()} type="date" name="date" className="input input-bordered" />
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
};

export default Checkout;