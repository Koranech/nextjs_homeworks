import {FC} from "react"
import Cars from "@/app/components/cars/Cars";

type PropsType = {}

const CarsPage: FC<PropsType> = () => {
    return (
        <div>
            <Cars/>
        </div>
    );
};

export default CarsPage;
