const Footer = () => {
    return (
        <div className="bg-base-200">
            <div className="text-center justify-center pt-5 space-y-4">
                <h1 className="text-black font-bold text-2xl md:text-3xl  ">Gadget Heaven</h1>
                <h1 className="  text-gray-500">Leading the way in cutting-edge technology and innovation.</h1>
            </div>
            <footer className="flex flex-col md:flex-row gap-10 justify-between p-10">
                <div></div>
                <nav className="flex flex-col">
                    <h6 className="text-xl text-black font-bold mb-2">Services</h6>
                    <a className="link link-hover text-black">Product Support</a>
                    <a className="link link-hover text-black">Order Tracking</a>
                    <a className="link link-hover text-black">Shipping & Delivery</a>
                    <a className="link link-hover text-black">Returns</a>
                </nav>


                <nav className="flex flex-col">
                    <h6 className="text-xl text-black font-bold mb-2">Company</h6>
                    <a className="link link-hover text-black">About Us</a>
                    <a className="link link-hover text-black">Careers</a>
                    <a className="link link-hover text-black">Contact</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="text-xl text-black font-bold mb-2">Legal</h6>
                    <a className="link link-hover text-black">Terms of Service</a>
                    <a className="link link-hover text-black">Privacy policy</a>
                    <a className="link link-hover text-black">Cookie policy</a>
                </nav>
                <div></div>
            </footer>
        </div>
    );
};

export default Footer;