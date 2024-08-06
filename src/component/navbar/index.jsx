import { Button } from "@material-tailwind/react";
import './style.scss'
export default function Navbar(){
    return <div className="navbar">
        <div className="logo">logo
            
        </div>
        <div className="btns">
            <Button>Get Donation</Button>
            <Button variant="outlined">Report</Button>
        </div>



    </div>
}