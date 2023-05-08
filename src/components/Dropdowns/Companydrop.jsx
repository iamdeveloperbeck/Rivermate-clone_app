import {useState} from 'react';
import { Link } from "react-router-dom";

const Companydrop = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className="bg-[#fff] shadow-lg p-[10px_0px] rounded-[15px] absolute lg:static lg:shadow-none lg:w-full">
            <div onClick={() => setDropdown(!dropdown)} className="flex items-start gap-[20px]">
                <div className="flex flex-col items-start gap-[10px] flex-1">
                    <div className="flex items-start flex-col w-[250px] lg:w-full">
                        <Link to="/" className="w-full p-[10px_18px] hover:bg-[#fff5ed]">
                            <div>Manifesto</div>
                        </Link>
                        <Link to="/" className="w-full p-[10px_18px] hover:bg-[#fff5ed]">
                            <div>About</div>
                        </Link>
                        <Link to="/" className="w-full p-[10px_18px] hover:bg-[#fff5ed]">
                            <div>Security</div>
                        </Link>
                        <Link to="/" className="w-full p-[10px_18px] hover:bg-[#fff5ed]">
                            <div>Blog</div>
                        </Link>
                        <Link to="/" className="w-full p-[10px_18px] hover:bg-[#fff5ed]">
                            <div>Contact</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companydrop;