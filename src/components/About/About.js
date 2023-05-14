import React from 'react'

function About(props) {
    return (
        <div class="container my-4">
            <div class="row featurette d-flex justify-content-center align-items-center my-3">
                <div class="col-md-6 order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1" style={{color: props.Mode === "dark" ? "white" : "black"}}>Oh yeah, it’s that good. <span class={`text-body-${props.Mode}`}>See for yourself.</span></h2>
                    <p style={{color: props.Mode === "dark" ? "white" : "black"}} class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how
                        this layout would work with some actual real-world content in place.</p>
                </div>
                <div class="col-md-3 order-md-1">
                    <img style={{width:300, height:300}} src="https://source.unsplash.com/300x300/?java,html" alt="" />
                </div>
            </div>
            <div class="row featurette d-flex justify-content-center align-items-center my-3">
                <div class="col-md-6 order-md-1">
                    <h2 style={{color: props.Mode === "dark" ? "white" : "black"}} class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class={`text-body-${props.Mode}`}>See for yourself.</span></h2>
                    <p style={{color: props.Mode === "dark" ? "white" : "black"}} class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how
                        this layout would work with some actual real-world content in place.</p>
                </div>
                <div class="col-md-3 order-md-2">
                    <img style={{width:300, height:300}} src="https://source.unsplash.com/300x300/?company,work" alt="" />
                </div>
            </div>
            <div class="row featurette d-flex justify-content-center align-items-center my-3">
                <div class="col-md-6 order-md-2">
                    <h2 style={{color: props.Mode === "dark" ? "white" : "black"}} class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class={`text-body-${props.Mode}`}>See for yourself.</span></h2>
                    <p style={{color: props.Mode === "dark" ? "white" : "black"}} class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how
                        this layout would work with some actual real-world content in place.</p>
                </div>
                <div class="col-md-3 order-md-1">
                    <img style={{width:300, height:300}} src="https://source.unsplash.com/300x300/?html,css" alt="" />
                </div>
            </div>
            <div class="row featurette d-flex justify-content-center align-items-center my-3">
                <div class="col-md-6 order-md-1">
                    <h2 style={{color: props.Mode === "dark" ? "white" : "black"}} class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class={`text-body-${props.Mode}`}>See for yourself.</span></h2>
                    <p style={{color: props.Mode === "dark" ? "white" : "black"}} class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how
                        this layout would work with some actual real-world content in place.</p>
                </div>
                <div class="col-md-3 order-md-2">
                    <img style={{width:300, height:300}} src="https://source.unsplash.com/300x300/?coding,html" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
