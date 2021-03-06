import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
  return (
    <header>
      <div className="container">
        <div className="logo" />
					<div className="hamburger" onclick={actions.showMenu}>
  				<div />
  				<div />
  				<div />
				</div>
				<nav className={state.menu}>
  					<a href="#SpecialMenu">Menu</a>
  					<a href="#" onclick={actions.close}>Reservations</a>
  					<a href="#Reviews">Reviews</a>
  					<a href="#Contact">Contact</a>
  					<div className="close" onclick={actions.closeMenu}>
  					<i class="fas fa-times" />
  					</div>
				</nav>
			</div>
		</header>
	);
};
