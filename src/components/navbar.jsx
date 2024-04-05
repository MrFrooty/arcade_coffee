import { Link } from 'react-router-dom'
// import styled from "styled-components";

import arcadelogo from '../assets/arcadelogo.png'
import home_bg from '../assets/home_bg.png'

const Navbar = () => {
    return (
        <div className="flex flex-col justify-center text-sm font-bold font-poppins tracking-wide bg-black">
            <div className="flex overflow-hidden relative flex-col items-center px-16 pb-20 w-full min-h-[729px] max-md:px-5 max-md:max-w-full bg-black">
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
                <div className="flex relative gap-5 justify-between items-center mb-96 w-full max-w-[1052px] max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet={arcadelogo}
                        className="shrink-0 self-stretch aspect-[1.09] w-[99px]"
                    />
                    <div className="flex gap-5 justify-between self-stretch my-auto text-center whitespace-nowrap leading-[171%] text-white">
                        <Link to="/" className="justify-center py-2">Home</Link>
                        <Link to="/aboutus" className="justify-center px-1.5 py-2">About</Link>
                        <Link to="/menu" className="justify-center p-2">Menu</Link>
                        <Link className="justify-center px-1 py-1.5">Gallery</Link>
                    </div>
                    <div className="flex gap-5 justify-between self-stretch my-auto leading-[157%]">
                        <div className="justify-center px-px py-1 my-auto text-right whitespace-nowrap text-white">
                            Login
                        </div>
                        <div className="flex flex-col justify-center text-white">
                            <div className="flex gap-4 px-6 py-4 rounded-md bg-muted_gray max-md:pl-5">
                                <div>Become a member</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59e42c63660fdfb99630f48d8317933d793ae774ff647c3afefaacbd1e429cc4?"
                                    className="shrink-0 my-auto w-3 aspect-[1.2]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// const StyledDiv = styled.div`


//     &::before {
//         content: '';
//         position: relative;
//         inset: 0;
//         background: linear-gradient(
//             180deg,
//             rgba(30, 32, 31, 0.8) 14.4%,
//             rgba(30, 32, 31, 0.4) 60.77%,
//             #1e201f 104.99%
//         );
//         zIndex = 50;
//     }

    
// `;

export default Navbar;
