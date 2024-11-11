import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function About(){
    const navigate = useNavigate();
    const [counter, setCounter] = useState(5);

    useEffect(()=> {
        const interval = setInterval(()=>{
            setCounter((prevCounter) => {
                return prevCounter -1;
            });
        }, 1000);

        if (counter === 0) {
            navigate("/");
        }
        return () => clearInterval(interval);
    }, [counter, navigate]);

    return(
        <div>
            <h1>This is the About</h1>
            <p>Redirecting in {counter} seconds... </p>
        </div>
    );
}

export default About;