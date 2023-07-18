import './sales.css'

const Sales = () => {
    return (
        <section >
            <h1 className="text-3xl font-semibold my-10 uppercase text-center ">Whats Special </h1>
            <div className='grid md:grid-cols-2 gap-5 w-full'>
                <div className="hero discount border rounded-3xl overflow-hidden w-2/3 mx-auto">
                    <div className="hero-content text-center w-full h-full bg-base-100 bg-opacity-75 rounded-3xl">
                        <div className=" ">
                            <h1 className="text-5xl font-extrabold">Discount</h1>
                            <p className="py-6 max-w-md font-extrabold drop-shadow-2xl shadow-black text-green-900 text-lg">Get 30% off on all Courses for a limited
                                time only. Do not miss out on this amazing offer!</p>
                            <button className="btn btn-primary">Lets Start</button>
                        </div>
                    </div>
                </div>
                <div className="hero studio border rounded-3xl overflow-hidden w-2/3 mx-auto">
                    <div className="hero-content text-center w-full h-full  bg-base-200 bg-opacity-75 rounded-3xl ">
                        <div className="">
                            <h1 className="text-5xl font-extrabold"> Studio</h1>
                            <p className="py-6 max-w-md">High-quality audio equipment for exceptional sound experiences. Explore our collection for the best in-house studio solutions.</p>
                            <button className="btn btn-primary">Start Recording</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sales;