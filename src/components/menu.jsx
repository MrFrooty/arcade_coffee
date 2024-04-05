import coffeetea_menu from '../assets/coffeetea_menu.png';
import pastries_menu from '../assets/pastries_menu.png';

const Menu = () => {
    return (
        <div className="flex font-poppins justify-center items-center px-16 pb-20 w-full bg-black max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-start py-20 mb-2.5 w-full max-w-[1050px] max-md:max-w-full">
                <div className="mt-0 ml-20 text-small font-bold tracking-wide leading-6 text-muted_gray max-md:mt-10">
                    View our Menu
                </div>
                <div className="mt-2.5 ml-20 text-large font-bold tracking-wide text-white">
                    Menu
                </div>
                <div className="justify-center self-end mt-20 mb-12 max-w-full w-[925px] max-md:pr-5 max-md:my-10">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src={coffeetea_menu}
                                alt="Coffee and Tea Menu"
                                className="grow w-full aspect-[0.6] max-md:mt-8"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src={pastries_menu}
                                alt="Pastries Menu"
                                className="grow w-full aspect-[0.6] max-md:mt-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;

