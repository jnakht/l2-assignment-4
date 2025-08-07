import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";



export default function Navbar() {
    const [open, setOpen] = useState(true);
  return (
    <div>
      <nav>

        <div className="max-w-[80vw] mx-auto flex justify-between items-center">

        {/* logo and name */}
        <div className="flex items-center">
            {/* <img className="w-[100px]" src={`https://i.ibb.co.com/Tq4SsqSD/Screenshot-2025-08-06-194532.png`} alt="" /> */}
            <img className="w-[250px]" src={`https://i.ibb.co.com/tM8VRR2k/logo.png`} alt="" />
{/*                 
            <p className="text-4xl">Bookventory</p> */}
        </div>
            {/* menu icon  */}
        <button className={cn("border-2", {
            "hidden": open
         })}>
            <span className={cn({
                // "hidden": !open
            })}><Menu></Menu></span>

            <span className={cn({
                // "hidden": open
            })}><X></X></span>
        </button>

            {/* desktop links */}
        <div className="flex gap-5 text-2xl ">
            <Link to='/books'>Books</Link>
            <Link to='/addBook'>Add Book</Link>
            <Link to='/borrowSummary'>Borrow Summary</Link>
        </div>

        </div>


      </nav>
    </div>
  );
}