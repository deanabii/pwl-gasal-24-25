// import { useNavigate } from "react-router-dom";

// function Contact(){
//     const navigate = useNavigate();
//     const goBack = () => {
//         // navigate(-1); // Navigate to the previous page using the "goBack" method from react-router-dom
//         navigate("/");
//     };
//     return(
//         <div>
//             <h1>This is the Contact</h1>
//             <button onClick={goBack}>Go Back</button>
//         </div>
//     );
// }

// export default Contact;

function Contact() {
    const inlineStyle = {
        backgroundColor: 'lightblue',
        color: "red",
        padding: "10px",
    }
    return (
        <div className="container">
            <h1 style={inlineStyle}>This is the Contact page</h1>
            <button>Go Back</button>
        </div>
    );
}

export default Contact;