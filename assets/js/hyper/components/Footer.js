import { h, app } from "hyperapp";

export const Footer = ({ state, actions }) => {
  return (
    <section id="Footer">
      <div className="container">
        <div className="logo" />
        <div className="links">
          <li>Reservations</li>
          <li>Catering</li>
          <li>Contact</li>
          <li>Reviews</li>
        </div>
        <div className="social">
          <div className="media">
            <i class="fab fa-twitter" />
          </div>
          <div className="media">
            <i class="fab fa-facebook-f" />
          </div>
          <div className="media">
            <i class="fab fa-instagram" />
          </div>
          <div className="media">
            <i class="fas fa-rss" />
          </div>
        </div>
        <div class="copyright">
          <i class="fa fa-copyright" aria-hidden="true" />
          Evan Szymkowicz
          <br />
          2019
        </div>
      </div>
    </section>
  );
};
