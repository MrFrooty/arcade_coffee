import arcadelogo3 from '../assets/arcadelogo3.png';
import home_bg from '../assets/home_bg.png';

const Navbar2 = () => {
    return (
        <div className="flex flex-col justify-center bg-white-50 font-poppins">
            <div className="flex overflow-hidden relative items-center flex-col px-16 pt-px pb-20 w-full min-h-[642px] max-md:px-5 max-md:max-w-full">
                <div className="absolute inset-0 bg-black opacity-100">
                    <img
                        loading="lazy"
                        srcSet={home_bg}
                        className="object-cover absolute inset-0 size-full opacity-40"
                    />
                </div>
                <div className="absolute inset-0">
                    <div className="absolute inset-x-0 top-0 h-1/5 bg-gradient-to-t from-transparent to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                </div>
                <div className="flex justify-center ml-40 w-full max-md:ml-0 max-md:w-full">
                    <div className="flex relative ml-20 gap-5 items-center px-0.5 my-auto text-sm font-bold tracking-wide leading-6 text-center text-white whitespace-nowrap max-md:mt-10">
                        <div className="justify-center py-1.5">Home</div>
                        <div className="justify-center py-1.5">Catering</div>
                        <div className="flex flex-col justify-center max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet={arcadelogo3}
                                className="grow shrink-0 w-44 max-w-full aspect-[1.28] max-md:mt-9"
                            />
                        </div>
                        <div className="justify-center px-0.5 py-2">Menu</div>
                        <div className="justify-center py-2">About</div>
                            <div className="relative ml-24 px-6 py-4 text-sm font-bold text-white rounded-md bg-muted_gray max-md:px-5 max-md:mt-10">
                                Order Online
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar2;
