import {h, app} from 'hyperapp';

export default function Contact({state, actions}) {
	return (
		<section id="contact" className="texturebg">
			<div className="container">
				<h5 className="comp-title">Contact</h5>
				<h2></h2>
				<div className="box">
					<div className="row">
						<div className="col-md-6">
							<div className="city">
								{state.companyInfo.location}
							</div>
							<h6 className="address">
									123 Somewhere Avenue<br/>
									Washington, D.C.
							</h6>
							<p><strong>email us:</strong><a href="mailto:info@steakjoint.com">info@steakjoint.com</a></p>
							</div>
							<div className="col-md-6">
									<h6>
									Lunch
									</h6>
									<div className="hours">
									202 555-555
									</div>
									{/* TODO: Come back for this */}
									<p>
										Come back to this <br/>
									</p>

									<h6>
									Dinner
									</h6>
									<div className="hours">
									202 555-555
									</div>
									{/* TODO: Come back for this */}
									<p>
										Come back to this <br/>
									</p>
							</div>
					</div>
				</div>
			</div>
		</section>
	)
}
