import {FC, useEffect, useState} from 'react';
import About from "./About";
import OurServices from "./OurServices";
import WorkScheme from "./WorkScheme";
import Footer from "../Footer";
import Request from "./Request";
import Services from "./Services";
import Loader from "../Loader";

const Home: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1850)
    })
    return (
        <section className='bg-black'>
            {isLoading && <Loader />}
            {isLoading ||
                <>
                    <About/>
                    <main className='bg-[#01000D]'>
                        <OurServices/>
                        <WorkScheme/>
                        <Services/>
                        <Request/>
                    </main>
                    <Footer/>
                </>
            }
        </section>
    );
};

export default Home;