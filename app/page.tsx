"use client"
import Form from "next/dist/client/form";
import {getMeals, saveMeal} from "@/app/(public)/server-actions/serverActions";
import {useForm} from "react-hook-form";
import {UserFormData, userSchema} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";


//async
export default function Home() {

    // 4
    // const mealsArray = await getMeals()

    //5
    const {register, handleSubmit, watch, formState: {errors}} = useForm<UserFormData>(
        {
            resolver: zodResolver(userSchema)
        }
    )
    const onSubmit = async (data: UserFormData) => {
        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const json = await res.json()
        console.log(json)
    }

  return (
    <div>

      {/*  3*/}
      {/*<form action="/submit">*/}
      {/*  <input type="text" name={'name'} placeholder="login"/>*/}
      {/*  <input type="text" name={'password'} placeholder="password"/>*/}
      {/*  <button>submit</button>*/}
      {/*</form>*/}


        {/*<Form action={'/submit'}>*/}
        {/*      <input type="text" name={'name'} placeholder="login"/>*/}
        {/*      <input type="text" name={'password'} placeholder="password"/>*/}
        {/*      <button>submit</button>*/}
        {/*</Form>*/}


        {/*    4*/}
        {/*<Form action={saveMeal}>*/}
        {/*    <input type="text" name={'title'} placeholder="title"/>*/}
        {/*    /!*<input type="text" name={'password'} placeholder="password"/>*!/*/}
        {/*    <button>submit</button>*/}
        {/*</Form>*/}

        {/*<div className={'meals'}>*/}
        {/*    {*/}
        {/*        mealsArray.map(meal => <div key={meal.id}>{meal.title}</div>)*/}
        {/*    }*/}
        {/*</div>*/}

    {/*    5*/}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("name")} placeholder={"Name"}/>
                {errors.name && (<p>{errors.name.message}</p>)}
            </div>
            <div>
                <input {...register("email")} placeholder={"Email"}/>
                {errors.email && (<p>{errors.email.message}</p>)}
            </div>
            <div>
                <input {...register("password")} placeholder={"Password"}/>
                {errors.password && (<p>{errors.password.message}</p>)}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}
