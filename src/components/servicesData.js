export const getServicesData = async () => {
    const res = await fetch("http://localhost:3000/services/api/get-all");
    const services = res.json();
    return services;
    
}