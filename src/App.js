import './assets/style/style.css';
import Header from './components/header/Header';
import Link from "./components/link/Link";

import globe from './assets/images/globe.svg';
import twitch from './assets/images/twitch.svg';
import insta from './assets/images/instagram.svg';
import github from './assets/images/github.svg';
import linkedin from './assets/images/linkedin.svg';


function App() {
	return (
		<>
			<Header />
			<div className='container'>
				<Link name="Portfolio" link="https://joaolucasmm.github.io/portfolio" icon={globe} alt_text="Icone globo"/>
				<Link name="Github" link="https://github.com/joaolucasmm/" icon={github} alt_text="Icone Github"/>
				{/* <Link name="Instagram" link="https://instagr.am/sir_joey" icon={insta} alt_text="Icone Insta"/> */}
				<Link name="Linkedin" link="https://www.linkedin.com/in/jo%C3%A3o-lucas-miranda-menegasso/" 
					icon={linkedin} alt_text="Icone Linkedin"/>
				{/*<Link name="Twitch" link="https://twitch.tv/joaoluzao" icon={twitch} alt_text="Icone Twitch"/>*/}
			</div>
		</>
  	);
}

export default App;
