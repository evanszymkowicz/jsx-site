import {h, app} from 'hyperapp'
//I'm going to keep using className so I don't forget about it
//Hyper doesn't require it, but it is jsx standard

export default function Header({state, actions}) {
	return (
		<header>
			<div className="container">
					<div className="logo">
						Logo
					</div>
					<nav>
						<a href="#">Home</a>
						<a href="#">Home</a>
						<a href="#">Locations</a>
						<a href="#">Rewards</a>
						<a href="#">Reservations</a>
					</nav>
			</div>
		</header>
	)
}
