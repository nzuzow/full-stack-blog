import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
    const baseImgPath = import.meta.env.VITE_IK_STATIC_IMG_BASE;

    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* First */}
            <div className="w-full lg:w-auto flex flex-col lg:basis-1/2 gap-4">
                {/* image */}
                <Image src={`${baseImgPath}/featured1.jpeg`} className="rounded-3xl object-cover" w="960" />
                {/* details */}
                <div className="">
                    <span className="font-semibold lg:text-lg">01.</span>
                    <Link className="text-blue-800 lg:text-lg">Web Design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                {/* title */}
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
            </div>
            {/* Other */}
            <div className="w-full lg:w-auto flex flex-col lg:basis-1/2 gap-4">
                {/* Second */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src={`${baseImgPath}/featured2.jpeg`} className="rounded-3xl object-fill lg:object-cover h-full" w="320" />
                    </div>
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <span className="font-semibold">02.</span>
                            <Link className="text-blue-800">Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        {/* title */}
                        <h2><Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link></h2>
                    </div>
                </div>
                {/* Third */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src={`${baseImgPath}/featured3.jpeg`} className="rounded-3xl object-fill lg:object-cover h-full" w="320" />
                    </div>
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <span className="font-semibold">02.</span>
                            <Link className="text-blue-800">Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        {/* title */}
                        <h2><Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link></h2>
                    </div>
                </div>
                {/* Fourth */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src={`${baseImgPath}/featured4.jpeg`} className="rounded-3xl object-fill lg:object-cover h-full" w="320" />
                    </div>
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <span className="font-semibold">02.</span>
                            <Link className="text-blue-800">Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        {/* title */}
                        <h2><Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPosts;
