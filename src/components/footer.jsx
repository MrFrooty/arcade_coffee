import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import arcadelogo from '../assets/arcadelogo.png'

import { hours, address } from '../constants/index'

const Footer = () => {
    return (
        <div className="flex flex-col justify-center pb-16 w-full bg-black max-md:max-w-full font-poppins">
            <div className="flex justify-center items-center px-16 pt-20 w-full bg-black max-md:px-5 max-md:max-w-full">
                <div className="w-full max-w-[1046px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-3 max-md:mt-8">
                                <img
                                    loading="lazy"
                                    src={arcadelogo}
                                    alt="Arcade Logo"
                                    className="w-full shadow-sm aspect-[0.97]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-sm font-bold tracking-wide leading-6 text-white max-md:mt-8">
                                <div className="text-medium tracking-normal leading-8 ">
                                    Hours
                                </div>
                                {hours.map((item, index) => (
                                    <div key={index} className="mt-4 text-small">
                                        {item.day}: <span className="font-normal"> {item.hours} </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-white max-md:mt-8">
                                <div className="text-medium font-bold tracking-normal leading-8">
                                    Address
                                </div>
                                <div className="mt-5 text-small tracking-wide leading-6" dangerouslySetInnerHTML={{ __html: address }}></div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col max-md:mt-8">
                                <div className="text-2xl font-bold tracking-normal leading-8 text-white">
                                    Follow
                                </div>
                                <div className="flex gap-5 justify-center pr-20 mt-5 max-md:pr-5">
                                    <img
                                        loading="lazy"
                                        src={facebook}
                                        alt="Facebook"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src={instagram}
                                        alt="Instagram"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src={twitter}
                                        alt="Twitter"
                                        className="shrink-0 my-auto w-6 aspect-[1.2]"
                                    />
                                </div>
                                <div className="mt-5 text-2xl font-bold tracking-normal leading-8 text-white">
                                    Subscribe
                                </div>
                                <div className="flex gap-1.5 pr-4 mt-2.5">
                                    <input type="text" className="shrink-0 rounded-md bg-neutral-50 h-[29px] w-[181px]" />
                                    <button className="shrink-0 rounded-md bg-neutral-50 h-[29px] w-[29px]"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
