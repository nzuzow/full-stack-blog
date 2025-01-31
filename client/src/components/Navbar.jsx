import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { useEffect } from "react";

const NavLinkList = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
                <Link to="/login" className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const { getToken } = useAuth();

    useEffect(() => {
        getToken().then((token) => console.log(token));
    }, [getToken]);

    return (
        <div className="navbar w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <Image
                    src={`${import.meta.env.VITE_IK_STATIC_IMG_BASE}/logo.png`}
                    className="w-8 h-8"
                    w={32}
                    h={32}
                    alt="Lama Logo"
                />
                <span>lamalog</span>
            </Link>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE BUTTON */}
                <button
                    className="cursor-pointer text-4xl"
                    onClick={() => setOpen(!open)}
                >{open ? "X" : "☰"}</button>
                {/* MOBILE LINK LIST */}
                <div className={`w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out z-10 bg-[#e6e6ff] ${open ? "-right-0" : "-right-[100%]"}`}>
                    <NavLinkList />
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <NavLinkList />
            </div>
        </div>
    )
}

export default Navbar;
