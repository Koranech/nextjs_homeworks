import Link from "next/dist/client/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link href='/'>home</Link></li>
                <li><Link href='/users'>users</Link></li>
                <li><Link href='/posts'>posts</Link></li>
                <li><Link href='/comments'>comments</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
