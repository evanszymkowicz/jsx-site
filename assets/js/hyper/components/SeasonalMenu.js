import { h, app } from "hyperapp";

export default function SeasonalMenu({ state, actions }) {
  var searchMenu = function() {
    return state.seasonalMenu.map(function(item) {
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

  return (
    <section id="SpecialMenu" className="texturebg">
      <div className="container">
        <h5 className="comp-title">Seasonal Menu</h5>
        <h2>Upcoming Summer Specialties</h2>
        <div className="row boxes">{searchMenu()}</div>
        <a href="#" className="link">
          {" "}
          View Menu
        </a>
      </div>
    </section>
  );
}
