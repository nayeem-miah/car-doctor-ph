import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <Image width={400} height={400} alt="person" src={'/assets/images/about_us/person.jpg'}  className="w-3/4 rounded-lg shadow-2xl" />
                    <Image width={400} height={400} alt="parts"  src={"/assets/images/about_us/parts.jpg"} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                  <Link href={'services'}>
                  <button className="btn btn-warning">Get More Info</button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default About;