import { getServicesData } from "../getServiceData/getData";
import ServiceCard from "./ServicesCard";

// const getServicesData = async () => {
//   const res = await fetch("http://localhost:3000/services/api/get-all")
//   const services = res.json();
//   return services;
// }

const Services = async () => {
  const data = await getServicesData();
  // console.log(data.data);
  const servicesData = data.data;


  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          servicesData.length !== 0 ?
            servicesData?.map((service) =>
              <ServiceCard key={service._id} service={service} />
            ) : <div>
              <h1 className="text-3xl font-bold text-center">No Services Found</h1>
            </div>
        }
      </div>
    </div>
  );
};

export default Services;