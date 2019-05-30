import {h, app} from 'hyperapp';

export default function Reviews({state, actions}) {
	return (
		<section id="Reviews">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<img src="" />
					</div>

					</div>
					<div className="col-md-4">
					<h5 className="comp-title">What They're Saying</h5>
					<h2>Gabagool?</h2>
					<h4>Ova Here!</h4>
					<p></p>
					<div className="auth"><strong>John Q. Doe</strong> - this steak is p dank</div>
					<div className="decoration">
						<i className="fa fa-arrow-left" aria-hidden="true"></i>
						<i className="fa fa-arrow-right ready" aria-hidden="true"></i>
					</div>
					</div>
				</div>
		</section>
	)
}
