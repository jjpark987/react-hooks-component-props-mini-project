import React from "react";

function About({ 
    image = "https://via.placeholder.com/215 Links to an external site.", about 
}) {
    return (
        <aside>
            <img src={image} placeholder="https://via.placeholder.com/215" alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About