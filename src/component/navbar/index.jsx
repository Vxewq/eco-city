import "./style.scss";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { api } from "../../utils/axios";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [money, setMoney] = useState("");

  function addU() {
    api.post("/message", {
      problemName: name,
      description: desc,
      price: money,
    });
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/lol.jpg" width={100} alt="" />
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/invest"}> Invest</Link>
        </li>
        <li>
          <Link to={"/create"}>Report</Link>
        </li>
      </ul>
      <div className="btns">
        <Button onClick={handleOpen} color="green">
          Get Donation
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>What's your problem.</DialogHeader>
          <DialogBody className="flex flex-col gap-[10px]">
            <Input
              onChange={(e) => setName(e.target.value)}
              label="Name Of Your Problem"
            />
            <Input
              onChange={(e) => setDesc(e.target.value)}
              label="Description"
            />
            <Input
              onChange={(e) => setMoney(e.target.value)}
              label="How much money do you need?"
            />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                handleOpen;
                console.log(name, money, desc);
                addU();
              }}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}
