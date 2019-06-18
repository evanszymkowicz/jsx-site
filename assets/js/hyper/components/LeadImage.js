import { h, app } from "hyperapp";

export default function LeadImage({ state, actions }) {
  return (
    //I'm going to keep using className so I don't forget about it
    //Hyper doesn't require it, but it is jsx standard
    <section id="LeadImage">
    <div className="container">
        <div className="title" data-aos="fade-right" data-aos-once="true">
          <h5>Welcome</h5>
          <h1> {this.state.restaurantInfo.title} </h1>
        </div>
        <div className="contact-info" id="contact-info" data-aos-anchor="#contact-info" data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-once="true">
          <div>Call for reservations</div>
          <h2>{state.restaurantInfo.phone}</h2>
          <div className="hours">
            <span>Opening Hours: </span>
            <span><strong>Mon-Fri:</strong> 9am - 9pm </span>
            <span><strong>Weekend:</strong> 9am - 11:00pm </span>
          </div>
        </div>
      </div>
    </section>
  )
}
