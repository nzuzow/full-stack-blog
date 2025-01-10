import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="px-4 md:px-8 lg:px-14 xl:px-28 2xl:px-60">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;