import { Routes ,Route, Router } from "react-router-dom";
import Services from "./Services";
import Header from './Header';
import HowToWork from "./HowToWork";
import Categoy from "./Category";
import Sliders from "./Slider";
// import More from "./More";
import Nav from "../Pages/Nav";
import Footer from "./Footer";
import FAQSection from './FAQSection';

export default function Home(){

    return (
        <>
       
        <Header/>
        <HowToWork/>
        <Categoy/>
        <Sliders/>
        <FAQSection/>
        {/* <Footer/> */}
        {/* <More/> */}

   
        {/* <Router>
        <Routes>
                 <Route  path="/Services" element={ <Services />}/>
        </Routes>
        </Router> */}
   
        </>
    )
}