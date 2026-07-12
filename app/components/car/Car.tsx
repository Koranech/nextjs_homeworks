import {FC} from "react";
import {ICar} from "@/app/models/ICar";

type CarProps = {
    car: ICar
}
const Car:FC<CarProps> = ({car}) => {
    return (
        <div>
            <h2>{car.id} - {car.brand}</h2>
            <p>{car.price} $</p>
            <p>{car.year}</p>
            <p>---</p>
        </div>
    );
};

export default Car;
