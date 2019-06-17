import {h, app} from "hyperapp";
import Header from "./Header.js";
import LeadImage from "./LeadImage.js";
import Background from "./Background.js";
import SeasonalMenu from "./SeasonalMenu.js";
import QuoteGenerator from "./QuoteGenerator.js";
import Contact from "./Contact.js";
import Reviews from "./Reviews.js";
import Reservations from "./Reservations.js";
import Promotions from "./Promotions.js";
import Footer from "./Footer.js";

export default function App({ state, actions }) {
	return (
    <div class={'app'}>
      <Header state={state} actions={actions} />

    </div>
  )
}
