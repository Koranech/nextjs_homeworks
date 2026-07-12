import Link from "next/dist/client/link";

const Menu = () => {
    return (
        <div>
            <p><Link href={'/'}>home</Link></p>
            <Link href={'/cars'}>cars</Link>
        </div>
    );
};

export default Menu;
