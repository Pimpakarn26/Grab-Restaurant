import React, { useEffect, useState } from "react";
import notAllowedImg from "../assets/no-entry.png";

const NotAllowed= () => {
    const [counter, setCounter] = useState(10);
    const navigate = useNavigate();
    useEffect(()=>{
        const timer = setInterval(()=>{
            navigate("/");
        }, 5000);

        const countDown = setInterval(()=>{
            setCounter((prevCounter)=>{
                if(prevCounter <= 1){
                    clearInterval(countDown);
                    return 0;
                }
                return prevCounter - 1;
            });
        }, 1000);
        return () => {
            clearTimeout(timer);
            clearInterval(countDown);
        };
    },[navigate])
    return (

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={notAllowedImg} alt="Not Allowed" className="w-56"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Page Not Allowed!!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>You are not allowed to view this page.
            <br /> You will redirect in{" "}
            <span className="countdown font-mono text-6xl">
                <span style={{ "--value": counter }}></span>
            </span>{" "}
          </p>
        </div>
      </div>
    );
}

export default NotAllowed;