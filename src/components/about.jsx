import { about } from '../constants/index';

const About = () => {
    return (
        <div className="flex items-start flex-col self-center p-20 w-8/10 text-medium tracking-wide text-white font-poppins bg-black max-md:px-5 max-md:max-w-full">
            <div className="ml-60">
                <div className="mt-20 text-small leading-6 text-muted_gray max-md:mt-10">
                    Learn about us
                </div>
                <div className="mt-2 text-large font-bold text-white">
                    About us
                </div>
                <div className="self-center w-3/4 mt-20 mb-32 text-medium font-medium leading-9 text-white max-md:my-10 max-md:max-w-full" dangerouslySetInnerHTML={{ __html: about }}></div>
            </div>
        </div>
    );
}

export default About;
