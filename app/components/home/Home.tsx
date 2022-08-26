import {FC} from 'react';
import About from "./About";
import OurServices from "./OurServices";
import WorkScheme from "./WorkScheme";
import Footer from "../Footer";
import Request from "./Request";
import Services from "./Services";

const Home: FC = () => {
    return (
        <>
           <About />
            <main className='bg-[#01000D]'>
                <OurServices />
                <WorkScheme />

                <Services />
                <Request />
            </main>
            <Footer />
        </>
    );
};

export default Home;