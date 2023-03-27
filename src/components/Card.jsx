import React, { useState, useEffect } from "react";
import '../Styles/CardStyles.css'

function Card() {
    const [catImage, setCatImage] = useState();

    
    useEffect(() => {
    const API_URL = "https://api.thecatapi.com/v1/images/search?has_breeds=1&size=full";
    const API_KEY = "live_lV1lm8VBCrKEXZ5OZw8qIiHUlwWRag7nf63vhSRlbzNrzN1CJUilTWRrU34JdLST";

    const fetchData = async () => {
    const response = await fetch(API_URL, {
        headers: {
            "x-api-key": API_KEY,
        },
        });
        const data = await response.json();
        setCatImage(data[0].url);
    };

    fetchData();
    }, []);
    const handleClick = () => {
        window.location.reload();
    };

  return (
    <div className="card">
        <a href="">
            <img className="img" src={catImage} alt="Cat" />
        </a>
        <br />
        <button onClick={handleClick}>Refresh</button>
        <div>
            <div>
            </div>
        </div>
    </div>
    );
}

export default Card;
