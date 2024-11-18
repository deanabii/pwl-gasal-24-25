import { useNavigate } from "react-router-dom";

function Experience(){
    const navigate = useNavigate();
    const goBack = () => {
        // navigate(-1); // Navigate to the previous page using the "goBack" method from react-router-dom
        navigate("/");
    };
    return(
        <div>
            <h1>This is the Experience</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default Experience;
// import { Card, CardBody,Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
// import axios from "axios";
// import { useEffect, useState } from "react";
// import "../App.css";
// import React from 'react';

// function Experience(){
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get("https://api.github.com/users/deanabii/repos")
//         .then((response) => {
//             setData(response.data);
//             setLoading(false);
//         })
//         .catch((e) => {
//             setError(e.message);
//             setLoading(false);
//         });
//     }, []);

//     if (loading) {
//         return <span>Loading...</span>;
//     }

//     if (error) {
//         return <span>{error}</span>;
//     }

//     return (
//         <div className='project'>
//             <h1>My Projects</h1>
//             <div>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five

//             centuries, but also the leap into electronic typesetting, remaining
//             essentially unchanged. It was popularised in the 1960s with the release
//             of Letraset sheets containing Lorem Ipsum passages, and more recently
//             with desktop publishing software like Aldus PageMaker including
//             versions
//             of Lorem Ipsum.
//             </div>
//             <div className='project-item'>
//                 {data.map((project, index) => {
//                     return (
//                         <Card maxW="sm" key={index}>
//                             <CardBody>
//                                 <Image 
//                                     src="https://picsum.photos/300?greyscale"
//                                     alt="Green double  couch with wooden legs"
//                                     borderRadius="lg"
//                                 />
//                                 <Stack mt="6" spacing="3">
//                                     <Heading size="md">{project.name}</Heading>
//                                     <Text>{project.description}</Text>
//                                 </Stack>
//                             </CardBody>
//                             <Divider />
//                         </Card>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default Experience;