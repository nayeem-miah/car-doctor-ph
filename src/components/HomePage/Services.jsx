// "use client"
import { Sevs } from "@/lib/services";
import ServiceCard from "./ServicesCard";

// DRY --> Do not Repeat Yourself
const Services = () => {
  // const [asc, setAsc] = useState(true);
  // const [search, setSearch] = useState("");

  const services = Sevs;
  console.log(services);


  // const [min , setMin] = useState(undefined);

  // const [max , setMax] = useState(undefined);
  // const services = useServices(asc,search);
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //     fetch(`https://car-doctor-server-topaz-one.vercel.app/services?sort=${asc ? 'asc' :'dse' }&search=${search}`)
  //         .then(res => res.json())
  //         .then(data => setServices(data));
  // }, [])

  // const handleBtnSubmit = e=> {
  //   e.preventDefault();
  //   const search = e.target.search.value;
  //   setSearch(search);
  // }
  // console.log(search);
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
        {/* <div className="lg:flex justify-around">
          <form onSubmit={handleBtnSubmit}>
            <input
              type="search"
              className="h-full rounded"
              name="search"
              id=""
            />
            <input type="submit" className="btn btn-secondary" value="search" />
          </form>
          <button onClick={() => setAsc(!asc)} className="btn btn-secondary">
            {asc ? "price high to low" : "Price low to high"}
          </button>
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) =>
          <ServiceCard key={service._id} service={service} />
        )}
      </div>
    </div>
  );
};

export default Services;