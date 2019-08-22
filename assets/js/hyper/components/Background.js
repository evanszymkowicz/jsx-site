import {h, app} from 'hyperapp'

export const OurStory = ({state, actions}) => {
  return (
    <section id="OurStory" data-aos="fade-up" data-aos-once="true">
      <div className="container">
        <div className="row">
          <div className="col-md-6 first">
            <h6>Our Story</h6>
            <h2>We brought the taste of New York to Washington</h2>
            <p>Home is where the steak sizzles.</p>
            <div className="quote">
              <strong>Chef in Residence</strong> <span>&#9702;</span> Fredrick Helsing Von Heisenhoper
            </div>
            <a href="#" className="reserve-btn">Book A Reservation</a>
          </div>
          <div className="col-md-6 second">
            <img src="/images/lambChop.jpg"/>
          </div>
        </div>
      </div>
    </section>
  )
}

/* <div className="col-md-6">
	<h5 className="comp-title">About us:</h5>
	<h2>Because when you think Washington, you think steaks</h2>
	<p></p>
	<div className="quote"><i></i>Joe Schmo</div>
	<a href="#" className="reserve-btn">Reservations</a>
</div> */
