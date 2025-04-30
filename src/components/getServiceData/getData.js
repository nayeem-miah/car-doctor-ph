export const getServicesData = async () => {
    const res = await fetch("http://localhost:3000/services/api/get-all");
    const services = res.json();
    return services;
}

// get single data 
export const getSingleService = async (id) => {
    const res = await fetch(`http://localhost:3000/services/api/${id}`);
    const services = res.json();
    // console.log(services);
    return services;  
}