import React from 'react';
import {Provider} from "react-redux";
import {store} from "../store/store";
import Header from "../components/AnyPage/Header/Header";
import {ProjectContainerSC} from "./style";
import Footer from "../components/AnyPage/Footer/Footer";

interface IMainLayoutProps{
    children:React.ReactNode;
}


const MainLayout = ({children}:IMainLayoutProps) => {
    return (
        <Provider store={store}>
            <Header/>
            <ProjectContainerSC>
                <main>
                    {children}
                </main>
            </ProjectContainerSC>
            <Footer/>
        </Provider>
    );
};

export default MainLayout;