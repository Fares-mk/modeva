
import Category from "../components/Category";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard"
import Services from "../components/Services";
function Home () {

    return ( 
        <>     
            <Hero />
            <ProductCard />
            <Category title={"the best dress for the best woman"}/>
            <Category title={"Best outfit for your happiness "}/>
            <Services />
            <Footer /> 
        </>
    );

    }
 
export default Home;