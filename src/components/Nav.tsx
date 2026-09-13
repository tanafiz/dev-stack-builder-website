import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <div className="flex justify-between">
            <img src={Logo} alt='' />
            <ul className="flex justify-between gap-5 my-1.5 cursor-pointer">
                <li className="text-[#D91B7E]">Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex justify-between gap-5">
                <p className="my-1.5 cursor-pointer">Sign In</p>
                <button className="btn bg-[#D91B7E] text-white rounded-3xl">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;