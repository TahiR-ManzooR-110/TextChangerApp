import React, { useEffect, useState } from 'react';

export default function About(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchRandomImages = async () => {
            try {
                const apiUrlArray = [
                    `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=laptop,coding&orientation=squarish&w=300&h=300`,
                    `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=laptop,HTML&orientation=squarish&w=300&h=300`,
                    `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=laptop,girl&orientation=squarish&w=300&h=300`,
                    `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=laptop,office&orientation=squarish&w=300&h=300`
                ];


                const responses = await Promise.all(
                    apiUrlArray.map(apiUrl => fetch(apiUrl))
                );
                const data = await Promise.all(
                    responses.map(response => response.json())
                );
                const isValidResponse = data.every(d => d.urls && d.urls.regular);

                if (isValidResponse) {
                    setImages(data.map(d => d.urls.regular));
                } else {
                    throw new Error('Invalid response data');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchRandomImages();
    }, []);

    return (
        <div className="container my-4">
            <div className="row featurette d-flex justify-content-center align-items-center my-3">
                <div className="col-md-6 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1" style={{ color: props.Mode === "dark" ? "white" : "black" }}>Hello, it’s that good. <span className={`text-body-${props.Mode}`}>See for yourself.</span></h2>
                    <p style={{ color: props.Mode === "dark" ? "white" : "black" }} className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ut fuga ab suscipit inventore. Rerum modi cumque, nobis corporis necessitatibus architecto, quia sunt autem ab laudantium illum et illo inventore!</p>
                </div>

                <div className="col-md-3 order-md-1">
                    {images[0] && <img className="img-fluid" style={{ maxWidth: "100%" }} src={images[0]} alt="" />}
                </div>

            </div>
            <div className="row featurette d-flex justify-content-center align-items-center my-3">
                <div className="col-md-6 order-md-1">
                    <h2 className="featurette-heading fw-normal lh-1" style={{ color: props.Mode === "dark" ? "white" : "black" }}>Hurray, it’s that good. <span className={`text-body-${props.Mode}`}>See for yourself.</span></h2>
                    <p style={{ color: props.Mode === "dark" ? "white" : "black" }} className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eum assumenda illo qui! Excepturi, animi at corrupti necessitatibus deleniti nostrum nemo quae eveniet tenetur, similique vitae culpa, recusandae ex rem!</p>
                </div>

                <div className="col-md-3 order-md-2">
                    {images[1] && <img className="img-fluid" style={{ maxWidth: "100%" }} src={images[1]} alt="" />}
                </div>

            </div>
            <div className="row featurette d-flex justify-content-center align-items-center my-3">
                <div className="col-md-6 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1" style={{ color: props.Mode === "dark" ? "white" : "black" }}>Hey, it’s that good. <span className={`text-body-${props.Mode}`}>See for yourself.</span></h2>
                    <p style={{ color: props.Mode === "dark" ? "white" : "black" }} className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure vel, minus magnam magni facilis eos voluptates ex sed ducimus beatae quaerat aliquam harum pariatur? Quisquam et reprehenderit soluta ex.</p>
                </div>

                <div className="col-md-3 order-md-1">
                    {images[2] && <img className="img-fluid" style={{ maxWidth: "100%" }} src={images[2]} alt="" />}
                </div>

            </div>
            <div className="row featurette d-flex justify-content-center align-items-center my-3">
                <div className="col-md-6 order-md-1">
                    <h2 className="featurette-heading fw-normal lh-1" style={{ color: props.Mode === "dark" ? "white" : "black" }}>Oh yeah, it’s that good. <span className={`text-body-${props.Mode}`}>See for yourself.</span></h2>
                    <p style={{ color: props.Mode === "dark" ? "white" : "black" }} className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam pariatur odio, reiciendis nostrum, facere rerum provident quae, dolore assumenda facilis laboriosam ratione! Ea ducimus tempore explicabo delectus fugit accusantium.</p>
                </div>

                <div className="col-md-3 order-md-2">
                    {images[3] && <img className="img-fluid" style={{ maxWidth: "100%" }} src={images[3]} alt="" />}
                </div>

            </div>
        </div>
    );
}
