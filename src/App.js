import './assets/style/style.css';
import Link from "./components/link/Link";

import globe from './assets/images/globe.svg';
import twitch from './assets/images/twitch.svg';
import insta from './assets/images/instagram.svg';
import github from './assets/images/github.svg';
import Header from './components/header/Header';

function App() {
	return (
		<>
			<Header />
			<div className='container'>
				<Link name="Portfolio" link="https://joaolucasmm.github.io/portfolio" icon={globe}/>
				<Link name="Github" link="https://github.com/joaolucasmm/" icon={github}/>
				<Link name="Instagram" link="https://instagr.am/sir_joey" icon={insta}/>
				<Link name="Twitch" link="https://twitch.tv/joaoluzao" icon={twitch}/>
			</div>
		</>
  	);
}

export default App;
