import Navbar from "./Navbar";
import  Hero from "./Herosection";
import Student  from "./StudentLife";
import Courses from "./AvailableCourses";
import Contact from "./GetIntouch";
import Footer from "./Footer";

const Layout=()=>
{
    return(
        <div className = {'w-screen h-screen overflow-auto'}>
            <div className="p-8">
                <Navbar />
                <Hero />
                <Student/>
                <Courses/>
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
}
export default Layout;