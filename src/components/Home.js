import React from "react";
import AddEvent from "./AddEvent";
import EventsPage from "./EventsPage";

function Home() {


    return(
       <section>
        <div className="leftBox">
        <img src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg" alt="" style={{ width: '100%', height: '50%' }} />

        <div className="content">
            <h1>EVENTS AND SHOWS</h1>
           <p style={{ width: '50%', height: '50%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

       </div>
       </div>
       </section>
    )

    
}

export default Home;