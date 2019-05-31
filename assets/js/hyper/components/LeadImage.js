import { h, app } from "hyperapp";

export default function LeadImage({ state, actions }) {
  // console.log(state.globalState.companyInfo.title)
  return (
    //I'm going to keep using className so I don't forget about it
    //Hyper doesn't require it, but it is jsx standard
    <section id="LeadImage">
      <div className="container">
        <div className="title">
          <h5>Welcome</h5>
          <h1>{this.state.globalState.companyInfo.title}</h1>
        </div>
        <div className="contact-info">
          <div className="container">
            <div className="book">Call us Today</div>
            <h2>(202) 555-5555</h2>
            <div className="hours">
              Hours <strong>Mon - Wed: </strong> 4:30p.m. - 11:45 p.m.
              <strong>Thurs - Sat: </strong> 4:00.m. - 1:00 a.m.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
