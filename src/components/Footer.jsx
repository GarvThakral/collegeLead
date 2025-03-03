import { Twitter } from "./icons/twitter";

const Footer = () => {
    return (
      <div className = {'w-full h-60 flex flex-col items-center space-y-4'}>
        <div>
          Logo
        </div>
        <div className = {'flex flex-col'}>
          <span>Subscribe to our newsletter</span>
          <div className = {'flex'}><input className = {'bg-gray-500 outline-none'} placeholder = {'Input your email'}></input><button className  = {'bg-blue-600 text-white rounded-r-lg p-1'}>Subscribe</button></div>
        </div>
        <div className = {" flex mx-auto space-x-8"}>
          <div className = {"flex flex-col space-y-3"}>
            <span className = {"font-bold"}>Products</span>
            <span>Features</span>
            <span>Pricing</span>
          </div>
          <div className = {"flex flex-col space-y-3"}>
            <span className = {"font-bold"}>Resources</span>
            <span>Blog</span>
            <span>User guides</span>
            <span>Webinars</span>
          </div>
          <div className = {"flex flex-col space-y-3"}>
            <span className = {"font-bold"}>Company</span>
            <span>About us</span>
            <span>Contact us</span>
          </div>
          <div className = {"flex flex-col space-y-3"}>
            <span className = {"font-bold"}>Plans & Pricing</span>
            <span>Personal</span>
            <span>Start up</span>
            <span>Organization</span>
          </div>
        </div>
        <div className = {'flex justify-around w-full'}>
          <button></button>
          <span>2024 Brand, Inc ● Privacy ● Terms ● Sitemap</span>
          <div>
            <Twitter/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  