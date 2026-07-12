"use client"

import {useForm} from "react-hook-form";
import {UserFormData, carSchema, UserFormInput} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {carsApiService} from "@/app/services/api.service";



export default function Home() {


    const {register, handleSubmit, formState: {errors}} = useForm<UserFormInput, any, UserFormData>(
        {
            resolver: zodResolver(carSchema)
        }
    )
    const onSubmit = async (data: UserFormData) => {
        await carsApiService.postCars(data)
    }

  return (
    <div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("brand")} placeholder={"Brand"}/>
                {errors.brand && (<p>{errors.brand.message}</p>)}
            </div>
            <div>
                <input {...register("price")} placeholder={"Price"}/>
                {errors.price && (<p>{errors.price.message}</p>)}
            </div>
            <div>
                <input {...register("year")} placeholder={"Year"}/>
                {errors.year && (<p>{errors.year.message}</p>)}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}
