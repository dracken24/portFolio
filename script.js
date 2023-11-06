function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
	Menu Component
 ***********************/

const Menu = props => {
	return /*#__PURE__*/(
		React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
		React.createElement("div", { className: "overlay" }), /*#__PURE__*/
		React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
		React.createElement("ul", null, /*#__PURE__*/
		React.createElement("li", null, /*#__PURE__*/
		React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/

		React.createElement("li", null, /*#__PURE__*/
		React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "A PROPOS")), /*#__PURE__*/

		React.createElement("li", null, /*#__PURE__*/
		React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/

		React.createElement("li", null, /*#__PURE__*/
		React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/

		React.createElement(SocialLinks, null))));
};


/***********************
	Nav Component
 ***********************/

const Nav = props => {
	return /*#__PURE__*/(
		React.createElement(React.Fragment, null, /*#__PURE__*/
		React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
		React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
		React.createElement("p", { className: "brand" }, "Nadia", /*#__PURE__*/

		React.createElement("strong", null, "Desjardins")), /*#__PURE__*/

		React.createElement("a", {
			onClick: props.toggleMenu,
			className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

		React.createElement("span", null))))));

};


/***********************
	Header Component
 ***********************/

const Header = props => {
	return /*#__PURE__*/(
		React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
		React.createElement("div", { className: "forest" }), /*#__PURE__*/
		React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
		React.createElement("div", { className: "moon" }), /*#__PURE__*/
		React.createElement("div", { className: "container" }, /*#__PURE__*/
		React.createElement("h1", null, /*#__PURE__*/
		React.createElement("span", { className: "line" }, "Spécialité"), /*#__PURE__*/
		React.createElement("span", { className: "line" }, "Programmation ojets"), /*#__PURE__*/
		React.createElement("span", { className: "line" }, /*#__PURE__*/
		React.createElement("span", { className: "color" }, "&"), " plus.")), /*#__PURE__*/


		React.createElement("div", { className: "buttons" }, /*#__PURE__*/
		React.createElement("a", { href: "#projects" }, "mon portfolio"), /*#__PURE__*/
		React.createElement("a", { href: "#contact", className: "cta" }, "contactez-moi")))));

};


/***********************
	About Component
 ***********************/

const About = props => {
	return /*#__PURE__*/(
		React.createElement("section", { id: "about" }, /*#__PURE__*/
		React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
		React.createElement("article", null, /*#__PURE__*/
		React.createElement("div", { className: "title" }, /*#__PURE__*/
		React.createElement("h3", null, "Qui suis-je?"), /*#__PURE__*/
		React.createElement("p", { className: "separator" })), /*#__PURE__*/

		React.createElement("div", { className: "desc full" }, /*#__PURE__*/
		React.createElement("h4", { className: "subtitle" }, "Je m'appelle Nadia"), /*#__PURE__*/
		React.createElement("p", null, "Je suis une programmeuse spécialisée en langage C de la belle région de Québec au Canada."), /*#__PURE__*/

		React.createElement("p", null, "J'aime les défis complexes et essayer de trouver la meilleure façon de les résoudre. J'ai constamment envie d'apprendre. J'ai aussi un cours de modélisation 3D pour les jeux vidéo.")), /*#__PURE__*/

		React.createElement("div", { className: "title" }, /*#__PURE__*/
		React.createElement("h3", null, "Qu'est-ce que je fais?"), /*#__PURE__*/
		React.createElement("p", { className: "separator" })), /*#__PURE__*/

		React.createElement("div", { className: "desc" }, /*#__PURE__*/
		React.createElement("h4", { className: "subtitle" }, "Je suis programmeuse"), /*#__PURE__*/
		React.createElement("p", null, "Je suis développeuse back-end. Je travaille principalement en C et C++ sur vsCode. Je fais également du C# axé vers Unity ou avec le framework .NET axé vers Xamarin pour le développement d'application multi-platform."), /*#__PURE__*/

		React.createElement("p", null, "Je de bonnes connaissances les Makefiles et github ainsi que des bases en php, javascipt, bash et gestion de base de donné SQL")), /*#__PURE__*/

		React.createElement("div", { className: "desc" }, /*#__PURE__*/
		React.createElement("h4", { className: "subtitle" }, "3D Designer"), /*#__PURE__*/
			React.createElement("p", null, "J'ai une formation collégiale en design 3D. Je travaille principalement avec 3D StudioMax et Blender. J'ai également une bonne connaissance du moteur de jeu Unity. J'adore faire du level design."), /*#__PURE__*/

		)))));
};


/***********************
	Project Component
 ***********************/

const Project = props => {
	const tech = {
		sass: 'fab fa-sass',
		css: 'fab fa-css3-alt',
		js: 'fab fa-js-square',
		react: 'fab fa-react',
		vue: 'fab fa-vuejs',
		d3: 'far fa-chart-bar',
		node: 'fab fa-node' };


	const link = props.link || 'http://';
	const repo = props.repo || 'http://';

	return /*#__PURE__*/(
		React.createElement("div", { className: "project" }, /*#__PURE__*/
		React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
		React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

		React.createElement("div", { className: "project-details" }, /*#__PURE__*/
		React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
		// React.createElement("p", { className: "icons" },
		// props.tech.split(' ').map((t) => /*#__PURE__*/
		// React.createElement("i", { className: tech[t], key: t }))),


		props.title, ' '),

		props.children, /*#__PURE__*/
		React.createElement("div", { className: "buttons" }, /*#__PURE__*/
		React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
		React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

		))));

};


/***********************
	Projects Component
 ***********************/

const Projects = props => {
	return /*#__PURE__*/(
		React.createElement("section", { id: "projects" }, /*#__PURE__*/
		React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
		React.createElement("div", { className: "heading" }, /*#__PURE__*/
		React.createElement("h3", { className: "title" }, "Mes Réalisations"), /*#__PURE__*/
		React.createElement("p", { className: "separator" }), /*#__PURE__*/
		React.createElement("p", { className: "subtitle" }, "Voici une liste des ", /*#__PURE__*/
			React.createElement("u", null, ""), "projets sur lesquels j'ai travaillé dernièrement. Certains durant mes études à l'école",
		' ', /*#__PURE__*/
		React.createElement("a", { href: "https://42quebec.com/en/home/", target: "_blank", rel: "noopener noreferrer" }, "42 Québec"), ", et d'autres comme projets personnels.")), /*#__PURE__*/


//*********************************************************************************************************************************/


		React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/

		React.createElement(Project, {
			title: "Vulkan Engine",
			img: "imgs/puit_01.png",
			// tech: "C++ CS react node",
			link: "https://github.com/dracken24/DrackenLib_Vulkan_Project",
			repo: "https://github.com/dracken24/DrackenLib_Vulkan_Project" }, /*#__PURE__*/

			React.createElement("small", null, "Petit moteur de rendu graphique fabriqué uniquement avec Vulkan."), /*#__PURE__*/


			React.createElement("p", null, "Pour voir comment les choses fonctionnent, j'ai fait un petit programme avec Vulkan et glfw \
			pour communiquer avec la carte graphique. Importez des .obj ou des textures par drag and drop. Faire pivoter, mettre à l'échelle et redimensionner le modèle avec des key events.")), /*#__PURE__*/


//*********************************************************************************************************************************/


		React.createElement(Project, {
			title: "Game Engine",
			img: "imgs/onyx00.jpg",
			// tech: "C++ CS react node",
			link: "https://www.linkedin.com/feed/update/urn:li:activity:7000513669012877312",
			repo: "https://github.com/dracken24/OnyXEngine/tree/main/OnyXEngine" }, /*#__PURE__*/

		React.createElement("small", null, "Fait en C++ sur vsCode."), /*#__PURE__*/


			React.createElement("p", null, "C'est un projet vraiment intéressant qui m'a aidé à m'améliorer \
			mon C++. Ce projet est toujours en cours. Petit moteur de jeu fait avec la physique et les mouvements de base.")), /*#__PURE__*/


//*********************************************************************************************************************************/

React.createElement(Project, {
	title: "SporeFall",
	img: "imgs/BG Card Game 00.png",
	// tech: "C++ CS react node",
	link: "https://github.com/dracken24/DrackenLib_Vulkan_Project",
	repo: "https://github.com/dracken24/DrackenLib_Vulkan_Project" }, /*#__PURE__*/

	React.createElement("small", null, "Jeu de cartes et exploration en équipe."), /*#__PURE__*/


	React.createElement("p", null, "Voici un gros projet sur lequel je travaille présentement avec une équipe de graphistes et un artiste sonore \
	. Cèst un jeu de carte en équipe avec de lèxploration spatiale. Développé en C# dans Unity. Cèst une grosse gestion de UI et de parsing")), /*#__PURE__*/


//*********************************************************************************************************************************/


		React.createElement(Project, {
			title: "RPG Core system",
			img: 'imgs/resistance_03.jpg',
			// tech: "js node css",
			link: "https://github.com/dracken24/RPG_Resistance",
			repo: "https://github.com/dracken24/RPG_Resistance" }, /*#__PURE__*/

			React.createElement("small", null, "Construit avec Unity et C# sur vsCode"), /*#__PURE__*/


			React.createElement("p", null, "Jeu édité dans Unity. Vue de dessus et raycasting point and click \
				avec un navigation mesh comme Diablo. Les ennemis vous attaque si vous êtes trop proche.")), /*#__PURE__*/


//*********************************************************************************************************************************/


		React.createElement(Project, {
			title: "Cub 3D",
			img: 'imgs/cub3d00.jpg',
			// tech: "js node css",
			link: "https://github.com/dracken24/cub3d",
			repo: "https://github.com/dracken24/cub3d" }, /*#__PURE__*/

		React.createElement("small", null, "Pure C "), /*#__PURE__*/
			React.createElement("p", null, "Jeu entièrement réalisé en C avec images et raycasting. Projet scolaire.")), /*#__PURE__*/

//*********************************************************************************************************************************/


			React.createElement(Project, {
				title: "Application",
				img: 'imgs/app_annaLoup.png',
				// tech: "js node css",
				link: "https://github.com/dracken24/App_Phare/tree/main/FindYourPath",
				repo: "https://github.com/dracken24/App_Phare/tree/main/FindYourPath"
			}, /*#__PURE__*/

				React.createElement("small", null, "Organisme communautaire"), /*#__PURE__*/
				React.createElement("p", null, "Voici une application réalisée en c# avec l'API Xamarin. Le but est de regrouper tous les services pertinents pour les filles qui sortes de prisons pour faciliter leur réinsertion sociale.")), /*#__PURE__*/

//*********************************************************************************************************************************/


		React.createElement(Project, {
			title: "Design 3D",
			img: 'imgs/Anime_Girl_00.0.png',
			// tech: "js node css",
			link: "https://github.com/dracken24",
			repo: "https://github.com/dracken24" }, /*#__PURE__*/

		React.createElement("small", null, "Character"), /*#__PURE__*/
		React.createElement("p", null, "Anime character girl")), /*#__PURE__*/

		))));



};//*********************************************************************************************************************************/




/***********************
	Contact Component
 ***********************/

const Contact = props => {
	return /*#__PURE__*/(
		React.createElement("section", { id: "contact" }, /*#__PURE__*/
		React.createElement("div", { className: "container" }, /*#__PURE__*/
		React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
		React.createElement("div", { className: "heading" }, /*#__PURE__*/
		React.createElement("p", { className: "title" }, "Contactez-moi"), /*#__PURE__*/


		React.createElement("p", { className: "separator" }), /*#__PURE__*/
			React.createElement("p", { className: "subtitle" }, "Vous pouven m'envoyé un e-mail à: ",
		'', /*#__PURE__*/
		React.createElement("span", { className: "mail" }, "dracken24", /*#__PURE__*/
		React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/
		React.createElement("i", { className: "fas fa-circle dot" }), "com")),
		

		React.createElement("p", { className: "subtitle" }, "Ou "),


		React.createElement("p", { className: "subtitle" }, "Mon Linkedin à: ",
		'', /*#__PURE__*/
		React.createElement("span", { className: "mail" }, "https://www.linkedin.com/in/nadia-desjardins-a57b9b247")),
		
		), /*#__PURE__*/

		





		React.createElement(SocialLinks, null)), /*#__PURE__*/

		// React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
		// React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
		// React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
		// React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
		// React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" }))
		)));

};



/***********************
	Footer Component
 ***********************/

const Footer = props => {
	return /*#__PURE__*/(
		React.createElement("footer", null, /*#__PURE__*/
		React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
		React.createElement("h3", null, "MERCI DE VOTRE VISITE"), /*#__PURE__*/
		React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
		React.createElement(SocialLinks, null))));
};


/***********************
	Social Links Component
 ***********************/

const SocialLinks = props => {
	return /*#__PURE__*/(
		React.createElement("div", { className: "social" }, /*#__PURE__*/
		React.createElement("a", {
			href: "https://www.linkedin.com/in/nadia-desjardins-a57b9b247/",
			target: "_blank",
			rel: "noopener noreferrer",
			title: "Link to author's Linkedin profile" },

		' ', /*#__PURE__*/
		React.createElement("i", { className: "fab fa-linkedin" })), /*#__PURE__*/

		React.createElement("a", {
			id: "profile-link",
			href: "https://github.com/dracken24",
			target: "_blank",
			rel: "noopener noreferrer",
			title: "Link to author's GitHub Profile" },

		' ', /*#__PURE__*/
		React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

		));

};



/***********************
	Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
		{
			menuState: false });_defineProperty(this, "toggleMenu",


		() => {
			this.setState(state => ({
				menuState: !state.menuState ?
				'active' :
				state.menuState === 'deactive' ?
				'active' :
				'deactive' }));

		});}

	render() {
		return /*#__PURE__*/(
			React.createElement(React.Fragment, null, /*#__PURE__*/
			React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
			React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
			React.createElement(Header, null), /*#__PURE__*/
			React.createElement(About, null), /*#__PURE__*/
			React.createElement(Projects, null), /*#__PURE__*/
			React.createElement(Contact, null), /*#__PURE__*/
			React.createElement(Footer, null)));


	}

	componentDidMount() {
		const navbar = document.querySelector('#navbar');
		const header = document.querySelector('#welcome-section');
		const forest = document.querySelector('.forest');
		const silhouette = document.querySelector('.silhouette');
		let forestInitPos = -300;

		window.onscroll = () => {
			let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollPos <= window.innerHeight) {
				silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
				forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
			}

			if (scrollPos - 100 <= window.innerHeight)
			header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
			header.style.visibility = 'hidden';

			if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
			navbar.classList.remove('bg-active');
		};

		(function navSmoothScrolling() {
			const internalLinks = document.querySelectorAll('a[href^="#"]');
			for (let i in internalLinks) {
				if (internalLinks.hasOwnProperty(i)) {
					internalLinks[i].addEventListener('click', e => {
						e.preventDefault();
						document.querySelector(internalLinks[i].hash).scrollIntoView({
							block: 'start',
							behavior: 'smooth' });

					});
				}
			}
		})();
	}}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));