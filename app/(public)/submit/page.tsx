import {FC} from "react";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

const SubmitPage:FC<Props> = async ({searchParams}) => {

    const awaitedSP = await searchParams

    return (
        <>
            this is submit page
            <p>{awaitedSP.name}</p>
            <p>{awaitedSP.password}</p>
        </>
    );
};

export default SubmitPage;
