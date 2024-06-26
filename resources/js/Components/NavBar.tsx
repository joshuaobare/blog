import { Link } from "@inertiajs/react";
import "../../css/navbar.css";
import { FC } from "react";

interface NavBarProps {
    auth: any;
}

const NavBar: FC<NavBarProps> = ({ auth }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link href="/" className="navbar-home">
                    <div>The Voice</div>
                </Link>
                {auth.user ? (
                    <Link href="/post/new">
                        <div>Create Post</div>
                    </Link>
                ) : (
                    ""
                )}
            </div>

            <div className="navbar-links">
                {auth.user ? (
                    <Link
                        href={route("dashboard")}
                        className="navbar-links rounded-md px-3 py-2 ring-1 ring-transparent transition  focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        {auth.user.name}
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="navbar-links rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route("register")}
                            className="navbar-links rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
