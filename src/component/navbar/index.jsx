import { Button } from "@material-tailwind/react";
import './style.scss'
export default function Navbar(){
    return <div className="navbar">
        <div className="logo">
            <img src="/lol.jpg" width={100} alt="" />
        </div>
        <div className="btns">
            <Button color="green">Get Donation</Button>
            <Button color="green" variant="outlined">Report</Button>
        </div>



    </div>
}