import bannerImg from '../assets/banner.jpg';

const Banner = () => {

    return (
        <div>
            <div className="hero bg-primary pt-20  pb-32 md:pb-52 py-10 rounded-b-2xl w-11/12 mx-auto  ">

                <div className=" text-center">
                    <div className="">
                        <h1 className="md:text-4xl text-2xl font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-10 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden md:block" />the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white text-primary">Shop Now</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center relative -top-20 md:-top-32">
                <img src={bannerImg} alt="Logo" className=" md:w-[500px] lg:w-[1000px] w-[200px] md:h-[400px] rounded-2xl p-5 border  backdrop-blur-3xl" />
            </div>
        </div>



    );
};

export default Banner;