import { h, app } from "hyperapp";

export default function SeasonalMenu({state, actions}) {
  var searchMenu = function() {
    return state.seasonalMenuData.map(function(item){
      return (
        <div className="col-md-4">
          <div className="box">
            <div className="box-img">
              <div className="price-circle">{item.price}</div>
              <span className="title">{item.title}</span>
              <p className="details">{item.description}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  //this prints the stuff called up above
  return (
    <section id="SeasonalMenu">
      <div className="container">
        <div className="hContainer" data-aos="fade" data-aos-once="true">
          <h6>Seasonal Menu</h6>
          <h3>Upcoming Summer Specials</h3>
        </div>
        <div className="specialContainer" data-aos="fade-up" data-aos-once="true">
          {menuItems()}
        </div>
        <div className="menuLink" data-aos="fade" data-aos-once="true">
          <a href="#">View full menu</a>
        </div>
      </div>
    </section>
  )
}
