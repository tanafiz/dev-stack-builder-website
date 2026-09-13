import HeroSectionPicture from '../assets/banner-stack.png';

const HeroSection = () => {
    return (
        <div className="flex justify-between mt-30">
            <div>
                <h1 className="text-[50px] font-bold leading-10">Build Your Ideal</h1>
                <h1 className="text-[50px] font-bold bg-gradient-to-r from-[#FF5722] to-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</h1>
                <p className="text-[#475569] text-[18px] mt-6">Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your<br />
                    next project.</p>
                <div className="space-x-6 my-10">
                    <button className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-md p-3 text-white">Explore Technologies</button>
                    <button className="btn rounded-md px-8 py-2 border border-[#E5E7EB] text-[#374151]">Learn More</button>

                </div>
            </div>

            <div className="">
                <img src={HeroSectionPicture} alt='' className="w-[450px]" />
            </div>
        </div>
    );
};

export default HeroSection;