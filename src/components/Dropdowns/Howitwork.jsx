import { useState } from "react";;
import { Link } from "react-router-dom";

const Howitwork = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="bg-[#fff] shadow-md p-[10px_10px] rounded-[15px] absolute lg:static lg:shadow-none">
            <div onClick={() => setDropdown(!dropdown)} className="flex items-start gap-[20px] flex-wrap sm:flex-col">
                <div className="flex flex-col items-start gap-[10px] flex-1">
                    <div className="pl-[25px] font-[500]">Solutions</div>
                    <div className="flex items-start flex-col w-[400px] md:w-full">
                        <Link to="/" className="w-full p-[18px_25px] hover:bg-[#fff5ed] border-b-[1px] border-[#fff5ed] md:p-[10px_20px]">
                            <div>Hire remote employees</div>
                            <div className="font-[500] text-[16px] md:hidden">Hire remote employees in 150+ countries</div>
                        </Link>
                        <Link to="/" className="w-full p-[18px_25px] hover:bg-[#fff5ed] border-b-[1px] border-[#fff5ed] md:p-[10px_20px]">
                            <div>Human resource tools</div>
                            <div className="font-[500] text-[16px] md:hidden">Manage your employees time off and <br className="lg:hidden" /> expenses</div>
                        </Link>
                        <Link to="/" className="w-full p-[18px_25px] hover:bg-[#fff5ed] border-b-[1px] border-[#fff5ed] md:p-[10px_20px]">
                            <div>Provide benefits</div>
                            <div className="font-[500] text-[16px] md:hidden">Provide your employees with local and global benefits</div>
                        </Link>
                        <Link to="/" className="w-full p-[18px_25px] hover:bg-[#fff5ed] md:p-[10px_20px]">
                            <div>Compliance</div>
                            <div className="font-[500] text-[16px] md:hidden">Be locally 100% compliant by using our platform</div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[10px] flex-1">
                    <div className="pl-[25px] font-[500]">Services</div>
                    <div className="flex items-start flex-col w-[400px] md:w-full">
                        <Link to="/" className="w-full p-[18px_25px] hover:bg-[#fff5ed] border-b-[1px] border-[#fff5ed] md:p-[10px_20px]">
                            <div>Employer of Record services</div>
                            <div className="font-[500] text-[16px] md:hidden">EoR services you can trust</div>
                        </Link>
                        <Link to="/" className="w-full p-[18px_25px] hover:bg-[#fff5ed] border-b-[1px] border-[#fff5ed] md:p-[10px_20px]">
                            <div>Global payroll</div>
                            <div className="font-[500] text-[16px] md:hidden">Understand what global payroll means</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howitwork