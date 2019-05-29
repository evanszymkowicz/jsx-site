import {h, app} from 'hyperapp'

export default function Background({state, actions}) {
	return (
		<section id="Background">
				<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h5 className="comp-title">About us:</h5>
						<h2>Because when you think Washington, you think steaks</h2>
						<p></p>
						<div className="quote"><i></i>Joe Schmo</div>
						<a href="#" className="reserve-btn">Reservations</a>
					</div>
					<div className="col-md-6">
						<div className="vide-img">
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
