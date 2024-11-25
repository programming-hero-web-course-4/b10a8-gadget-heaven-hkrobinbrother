import footerIMg from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="relative top-48">
      <div className="bg-gradient-to-r bg-red-200 from-orange-600 w-10/12 mx-auto  p-10 rounded-lg absolute -top-32  left-20">
        <div className="gap-5">
          <div className="flex flex-col p-10 gap-3 mx-20 items-center">
            <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
            <p className="font-semibold">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex justify-between gap-4 ">
              <input
                className="p-3 rounded-md"
                type="email"
                placeholder="Enter your email"
              />
              <button className="btn text-center">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-10">
        <div className="flex flex-col  items-center w-11/12 mx-auto mt-32">
          <div>
            {" "}
            <img className="" src={footerIMg} alt="" />
          </div>
          <div className="grid grid-cols-3 items-center  gap-6">
            <nav>
              <h6 className="footer-title">About Us</h6>
              <p>
                We are a passionate team <br />
                dedicated to providing the best <br />
                services to our customers.
              </p>
            </nav>
            <nav>
              <h6 className="footer-title">Quick Links</h6>
              <li className="link link-hover ">Home</li>
              <li className="link link-hover">Services</li>
              <li className="link link-hover">About</li>
              <li className="link link-hover">Contact</li>
            </nav>

            <form>
              <h6 className="footer-title">Subscribe</h6>
              <p>
                Subscribe to our newsletter for the <br /> latest updates.
              </p>
              <fieldset className="form-control w-80">
                <label className="label"></label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
