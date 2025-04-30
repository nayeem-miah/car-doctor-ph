import { getSingleService } from "@/components/getServiceData/getData";


const DetailsPage = async ({ params }) => {
    // console.log("params data is ", params.id);
    const data = await getSingleService(params.id);
    // console.log(data.data);
    const { title, description, img, price, facility } = data.data;
    return (
        <div>
            details page : {title}
            details page : {description}
        </div>
    )
}
export default DetailsPage;