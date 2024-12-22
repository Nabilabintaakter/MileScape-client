import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-[90%] mx-auto max-w-7xl min-h-[calc(100vh-808px)] md:min-h-[calc(100vh-507px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;