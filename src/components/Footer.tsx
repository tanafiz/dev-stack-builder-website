import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div className="flex justify-between mt-25" >
            <div>
                <img src={Logo} alt='' />
                <p className="text-[#64748B] text-[16px] mt-2">Curated tools, technologies, and resources for developers building
                    <br />modern software.</p>
                <ul className="flex space-between gap-x-6 text-[#475569] font-bold mt-4">
                    <li>GitHub</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-[#0F172A]">PRODUCTS</h3>
                <ul className="mt-2 text-[#64748B]">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Products</li>

                </ul>
            </div>


            <div>
                <h3 className="font-bold text-[#0F172A]">COMPANY</h3>
                <ul className="mt-2 text-[#64748B]">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-[#0F172A]">LEGAL</h3>
                <ul className="mt-2 text-[#64748B]">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;