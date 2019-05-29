import {h, app} from 'hyperapp';

export default function SeasonalMenu({state, actions}) {
	return (
		<section id="SpecialMenu">
				<div className="container">
					<h5 className="comp-title">Seasonal Menu</h5>
					<h2>Upcoming Summer Specialties</h2>
					<div className="row boxes">
						<div className="col-md-4">
							<div className="box">
								<div className="box-img">
									<div className="pricey-boy">$39</div>
								</div>
								//TODO: come back to this for the portfolio site
								<span className="title">Come back to this</span>
								<p class="details">Some details to add later</p>
							</div>
						</div>


						<div className="col-md-4">
							<div className="box">
								<div className="box-img">
									<div className="pricey-boy">$39</div>
								</div>
								//TODO: come back to this for the portfolio site
								<span className="title">Come back to this</span>
								<p class="details">Some details to add later</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="box">
								<div className="box-img">
									<div className="pricey-boy">$39</div>
								</div>
								//TODO: come back to this for the portfolio site
								<span className="title">Come back to this</span>
								<p class="details">Some details to add later</p>
							</div>
						</div>
				</div>
				<a href="#" className="link"> View Menu</a>
			</div>
		</section>
	)
}
