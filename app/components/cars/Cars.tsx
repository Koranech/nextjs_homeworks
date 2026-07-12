import {carsApiService} from "@/app/services/api.service";
import {ICar} from "@/app/models/ICar";
import Car from "@/app/components/car/Car";

const Cars = async () => {

    const cars: ICar[] = await carsApiService.getCars()
    return (
        <div>
            <h1>Cars</h1>
            <hr/>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }

        </div>
    );
};

export default Cars;
