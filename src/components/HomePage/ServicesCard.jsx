import Image from "next/image";
import Link from "next/link";


const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    // console.log(service);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <Image src={img} alt="service img" width={200} height={200} className="rounded-xl" />

                {/* <img src={img} alt="" /> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <Link href={`/services/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;