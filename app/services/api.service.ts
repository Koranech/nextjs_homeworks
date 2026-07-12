
import {ICar} from "@/app/models/ICar";
import {UserFormData} from "@/lib/schema";



const carsUrl = 'http://bigbird.space/carsAPI/v1/cars'

export const carsApiService = {
    getCars: async (): Promise<ICar[]> => {
        return await fetch(carsUrl)
            .then(res => res.json())
    },

    postCars: async (data: UserFormData) => {
       await fetch(carsUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
}
