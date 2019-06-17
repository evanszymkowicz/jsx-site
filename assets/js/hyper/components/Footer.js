import { h, app } from "hyperapp";

export default function Footer({ state, actions }) {
	return (
		<footer id="Footer">
			<div className="container">
				<nav className="footer-menu">
					<a href="#Header">Home</a>
					<a href="#Header">Home</a>
					<p>|</p>
					<a href="#OurStory">About</a>
					<p>|</p>
					<a href="#SpecialMenu">Seasonal Menu</a>
					<p>|</p>
					<a href="#Reviews">Reviews</a>
					<p>|</p>
					<a href="#Reservations">Reservations</a>
					<p>|</p>
					<a href="#ContactUs">Contact</a>
				</nav>

				<ul class="social-media">
					<li>
						<a href="https://twitter.com/" target="new">
							<i class="fa fa-twitter" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/" target="new">
							<i class="fa fa-facebook" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a href="https://plus.google.com/discover" target="new">
							<i class="fa fa-google-plus" aria-hidden="true" />
						</a>
					</li>
				</ul>

				<div class="copyright">
					<i class="fa fa-copyright" aria-hidden="true" />
					Evan Szymkowicz
					<br />
					2019
				</div>
			</div>
		</footer>
	);
}
