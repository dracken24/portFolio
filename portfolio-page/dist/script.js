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
		React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/

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
		React.createElement("span", { className: "line" }, "I do"), /*#__PURE__*/
		React.createElement("span", { className: "line" }, "object programming"), /*#__PURE__*/
		React.createElement("span", { className: "line" }, /*#__PURE__*/
		React.createElement("span", { className: "color" }, "&"), " more.")), /*#__PURE__*/


		React.createElement("div", { className: "buttons" }, /*#__PURE__*/
		React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
		React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));

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
		React.createElement("h3", null, "Who's that girl?"), /*#__PURE__*/
		React.createElement("p", { className: "separator" })), /*#__PURE__*/

		React.createElement("div", { className: "desc full" }, /*#__PURE__*/
		React.createElement("h4", { className: "subtitle" }, "My name is Nadia."), /*#__PURE__*/
		React.createElement("p", null, "I am a C language programmer from the beautiful region of Quebec in Canada."), /*#__PURE__*/

		React.createElement("p", null, "I love complex challenges and trying to find the best way to solve them.I constantly want to learn.I also have a course in 3D modeling for video games.Come challenge me.")), /*#__PURE__*/

		React.createElement("div", { className: "title" }, /*#__PURE__*/
		React.createElement("h3", null, "What does she do?"), /*#__PURE__*/
		React.createElement("p", { className: "separator" })), /*#__PURE__*/

		React.createElement("div", { className: "desc" }, /*#__PURE__*/
		React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
		React.createElement("p", null, "I'm a back-end developer. I mainly work in C and C++ on vsCode. I also study C# which I also find very interesting."), /*#__PURE__*/

		React.createElement("p", null, "I am familiar with Makefiles and github which are very practical to save time")), /*#__PURE__*/

		React.createElement("div", { className: "desc" }, /*#__PURE__*/
		React.createElement("h4", { className: "subtitle" }, "3D designer."), /*#__PURE__*/
		React.createElement("p", null, "I have a college education in 3D design. I mainly work with 3D StudioMax and Blender. I also have a good knowledge of the Unity game engine. I love doing level design."), /*#__PURE__*/

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
		React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
		React.createElement("p", { className: "separator" }), /*#__PURE__*/
		React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
			React.createElement("u", null, "most"), " of the projects I've been working on lately. Some during my studies at ",
		' ', /*#__PURE__*/
			React.createElement("a", { href: "https://42quebec.com/en/home/", target: "_blank", rel: "noopener noreferrer" }, "school 42"), ", and others as personal projects.")), /*#__PURE__*/


//*********************************************************************************************************************************/


		React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
		React.createElement(Project, {
			title: "Game Engine.",
			img: "/home/dracken24/Desktop/prog/portFolio/imgs/onyx00.jpg",
			// tech: "C++ CS react node",
			link: "https://github.com/dracken24/OnyXEngine/tree/main/OnyXEngine",
			repo: "https://github.com/dracken24/OnyXEngine/tree/main/OnyXEngine" }, /*#__PURE__*/

		React.createElement("small", null, "Built using C++ on vsCode."), /*#__PURE__*/


		React.createElement("p", null, "It's a really interesting project that helped me improve my C++. This project is still ongoing.")), /*#__PURE__*/


//*********************************************************************************************************************************/


		React.createElement(Project, {
			title: "RPG Core system.",
			img: '/home/dracken24/Desktop/prog/portFolio/imgs/resistance_03.jpg',
			// tech: "js node css",
			link: "https://github.com/yagoestevez/fcc-stock-price-checker",
			repo: "https://github.com/yagoestevez/fcc-stock-price-checker" }, /*#__PURE__*/

		React.createElement("small", null, "Built using Unity and C# on vsCode"), /*#__PURE__*/


		React.createElement("p", null, "Game edited in Unity. Top view and raycasting point and click with navigation mesh like Diablo.")), /*#__PURE__*/


//*********************************************************************************************************************************/


		React.createElement(Project, {
			title: "Cub 3D",
			img: '/home/dracken24/Desktop/prog/portFolio/imgs/cub3d00.jpg',
			// tech: "js node css",
			link: "https://github.com/dracken24/cub3d",
			repo: "https://github.com/dracken24/cub3d" }, /*#__PURE__*/

		React.createElement("small", null, "Pure C "), /*#__PURE__*/
		React.createElement("p", null, "Game entirely made in C with images and raycasting. School project.")), /*#__PURE__*/


//*********************************************************************************************************************************/


		React.createElement(Project, {
			title: "Design 3D",
			img: '/home/dracken24/Desktop/prog/portFolio/imgs/Slide10.jpg',
			// tech: "js node css",
			link: "https://github.com/dracken24",
			repo: "https://github.com/dracken24" }, /*#__PURE__*/

		React.createElement("small", null, "Bass guitar"), /*#__PURE__*/
		React.createElement("p", null, "Bass guitar GNL-LB100 made with 3ds max.")), /*#__PURE__*/

		))));

};


/***********************
	Contact Component
 ***********************/

const Contact = props => {
	return /*#__PURE__*/(
		React.createElement("section", { id: "contact" }, /*#__PURE__*/
		React.createElement("div", { className: "container" }, /*#__PURE__*/
		React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
		React.createElement("div", { className: "heading" }, /*#__PURE__*/
		React.createElement("p", { className: "title" }, "Want to: ", /*#__PURE__*/
		React.createElement("br", null), "contact me?"), /*#__PURE__*/


		React.createElement("p", { className: "separator" }), /*#__PURE__*/
		React.createElement("p", { className: "subtitle" }, "You can send an email to: ",
		'', /*#__PURE__*/
		React.createElement("span", { className: "mail" }, "dracken24", /*#__PURE__*/
		React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/
		React.createElement("i", { className: "fas fa-circle dot" }), "com")),
		

		React.createElement("p", { className: "subtitle" }, "Or "),


		React.createElement("p", { className: "subtitle" }, "My Linkedin at: ",
		'', /*#__PURE__*/
		React.createElement("span", { className: "mail" }, "https://www.linkedin.com/in/nadia-desjardins-a57b9b247"))
		
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
		React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
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
			title: "Link to author's Twitter profile" },

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