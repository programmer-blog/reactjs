
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

/**
         Header
            - Logo
            - Nav Bar - List Items (right Side)
            - Cart Items
         Body
            - Search Bar
            - Restuarant List
                - Restaurant Card
                    - Image
                    - Name
                    - Rating
                    - Cusines
        Footer   
            -Links
            - Copyrights
         */


//Optional chaining
const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);