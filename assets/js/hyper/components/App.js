import {h, app} from 'hyperapp'
import Header from './Header.js'
import LeadImage from './LeadImage.js'
import Background from './Background.js'
import SpecialMenu from './SpecialMenu.js'

export default function App({state, actions}) {
	return (
		//do this to pass down state to every component
		<div class={'app'}>
			<Header state={state} actions={actions}/>
			<LeadImage state={state} actions={actions}/>
			<Background state={state} actions={actions}/>
			<SpecialMenu state={state} actions={state}/>
		</div>
	)
}
