import { Button } from "@material-tailwind/react";
import "./style.scss";
import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
export default function Home() {
  const [probs, setProbs] = useState([]);

  useEffect(() => {
    api.get("/message").then((r) => {
      setProbs(r.data);
    });
  }, []);
  return (
    <>
      <div className="home">
        <div className="title">
          <h1>Give Someone Donation</h1>
        </div>
        <div className="dons">
          {probs.map((tr) => {
            return (
              <div className="card">
                <div className="img">
                  <img
                    src="https://avatars.mds.yandex.net/i?id=6eb7e7f6410632e6512f28b828ec5739c2d75aba-6392895-images-thumbs&n=13"
                    alt=""
                  />
                </div>
                <div className="info">
                  <h2>{tr.problemName}</h2>
                  <p>
                    {tr.description}
                  </p>
                  <Button color="green" className="block">
                    Donate
                  </Button>
                  <h2 className="color">
                   {tr.price}$
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
