import {h, app} from "hyperapp";

export const SpecialMenu = ({state, actions}) => {
  let searchMenu = (() => {
    return state.specialMenu.map((item) => {
      return (
        <div className="one special">
          <div className="specialTop">
            <div className="specialPrice">
              {item.price}
            </div>
          </div>
          <div className="specialDescription">
            <div className="dish">{item.title}</div>
            <div className="ingredients">{item.description}</div>
          </div>
        </div>
      )
    })
  })

  return (
    <section id="SeasonalMenu" className="texturebg">
      <div className="container">
        <h5 className="comp-title">Seasonal Menu</h5>
        <h2>Upcoming Summer Specialties</h2>
        <div className="row boxes">
          {searchMenu()}
        </div>
        <a target="_blank"  href="http://www.hydeparkrestaurants.com/dtlunch.pdf" class="view-menu"><strong>View Full Menu</strong></a>
      </div>
    </section>
  )
}
