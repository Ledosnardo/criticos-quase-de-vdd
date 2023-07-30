import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import './PageDefault.css';

const PageDefault = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default PageDefault;