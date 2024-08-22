import React from "react";
import { useAuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const { user } = useAuthContext();
const maskingString = (str,start, end) => {
    if (
        !str ||
        start < 0 ||
        end < 0 ||
        end > str.length ||
        start >= end
    ){
        return str;
    }
    const maskedStr = str.substring(0, start) + "*".repeat(20) + str.substring(end);
    return maskedStr;
};

return(
    <div className="hero bg-base-100 min-h-screen">
        //TODO
    </div>
)

                                                                                                                                                                  
