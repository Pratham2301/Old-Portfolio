import emoji from "react-easy-emoji";

export const greetings = {
	name: "Pratham Rajbhoj",
	title: "Hey all!! I'm Pratham Rajbhoj",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Django, RestFramework, Javascript, React.js, Next.js and a Competitive Programmer ",
	resumeLink:
		"https://drive.google.com/file/d/1qM6g9ImB3jQO9zCP3k-3OoqRbGK7y0vX/view?usp=share_link",
};

export const openSource = {
	githubUserName: "Pratham2301",
};

export const contact = {};

export const socialLinks = {
	url: "",
	linkedin: "https://www.linkedin.com/in/prathamesh-rajbhoj-2bb157200/",
	github: "https://github.com/Pratham2301",
	instagram: "https://www.instagram.com/pratham_rajbhoj23",
};

export const skillsSection = {
	title: "Skills",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Web-Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"
				),
				
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		// {
		// 	title: "Cloud Infra-Architecture",
		// 	lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji("⚡ Experience of working on multiple cloud platforms"),
		// 		emoji(
		// 			"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
		// 		),
		// 		emoji(
		// 			"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		// ? Check README To get icon details
		// 		{
		// 			skillName: "AWS",
		// 			fontAwesomeClassname: "logos:aws",
		// 		},
		// 		{
		// 			skillName: "Azure",
		// 			fontAwesomeClassname: "logos:microsoft-azure",
		// 		},
		// 		{
		// 			skillName: "Heroku",
		// 			fontAwesomeClassname: "logos:heroku-icon",
		// 		},
		// 		{
		// 			skillName: "PostgreSQL",
		// 			fontAwesomeClassname: "logos:postgresql",
		// 		},
		// 		{
		// 			skillName: "Github",
		// 			fontAwesomeClassname: "akar-icons:github-fill",
		// 		},
		// 		{
		// 			skillName: "Docker",
		// 			fontAwesomeClassname: "logos:docker-icon",
		// 		},
		// 		{
		// 			skillName: "Github Actions",
		// 			fontAwesomeClassname: "logos:github-actions",
		// 		},
		// 		{
		// 			skillName: "Cloudinary",
		// 			fontAwesomeClassname: "logos:cloudinary",
		// 		},
		// 		{
		// 			skillName: "Nginx",
		// 			fontAwesomeClassname: "logos:nginx",
		// 		},
		// 		{
		// 			skillName: "Sentry",
		// 			fontAwesomeClassname: "logos:sentry-icon",
		// 		},
		// 	],
		// },
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
		subHeader: "B.Tech in Computer Science",
		duration: "2020 - 2024",
		desc: "",
		grade: "9.31 CGPA",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Yashoda Higher Secondary College, Nagpur",
		subHeader: "Secondary - 12th",
		duration: "2018 - 2020",
		desc: "",
		grade: "85%",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Prerna Public School, Nagpur",
		subHeader: "Primary - 10th",
		duration: "2016 - 2018",
		desc: "",
		grade: "91%",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "Backend Intern",
		company: "Catalysing Dream and Beyond",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Feb 2022 – Jul 2022 (6-months)",
		desc: "I worked as backend web developer to design backend using Django, RestFramework some other libraries.",
	},
	// {
	// 	role: "Frontend Developer",
	// 	company: "Duseca Software",
	// 	companylogo: "/img/icons/common/dusecaSoftware.jpg",
	// 	date: "Apr 2022 – Jun 2022",
	// 	desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	// },
];

export const Volunteerexperience = [
	{
		role: "Backend Lead",
		company: "The CodeBreakers Club",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Feb 2022 – Jul 2022 (6-months)",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "Full Stack Developer",
		company: "Geeks for Geeks Chapter",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Feb 2022 – Jul 2022 (6-months)",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "CP Problem Setter",
		company: "Codechef Rcoem Chapter",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Feb 2022 – Jul 2022 (6-months)",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
];

export const projects = [
	{
		name: "CollegeWit",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/RCOEM-Overflow/College_Wit_Website",
		link: "https://collegewit.netlify.app/",
	},
	{
		name: "URL-Shortner",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		github: "https://github.com/Pratham2301/url_shortner",
		link: "https://pr-url.herokuapp.com/",
	},
	{
		name: "Travel-with-Brains",
		desc: "Get hands-on experience in technical skills with Technota",
		github: "https://github.com/Pratham2301",
	},
	{
		name: "Portfolio",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		github: "https://github.com/Pratham2301",
	},
	{
		name: "O1-Analysis",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		github: "https://github.com/Pratham2301",
	},
	{
		name: "Imagizer",
		desc: "Get hands-on experience in technical skills with Technota",
		github: "https://github.com/Pratham2301",	
	},
	{
		name: "To-Do-List",
		desc: "Get hands-on experience in technical skills with Technota",
		github: "https://github.com/Pratham2301",	
	},
	{
		name: "Github-Wrapper",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		github: "https://github.com/Pratham2301",	
	},
];

export const feedbacks = [
	{
		name: "Smart India Hackathon 2022 Finalist",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "IIT Bombay Techfest-CoDecode 2022 Zonal Winner",
		feedback:
			"Lorem ipsum dolor sit amet consectetur,  fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "4 Star on Codechef",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "Pupil on Codeforces",
		feedback:
			"Lorem ipsum dolor sit amet consectetur,  fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "Publicis Sapient Jumpstart 2022 Finalist",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "Institute Rank #1 in BKP Coding Contest by GDSC RCOEM",
		feedback:
			"Lorem ipsum dolor sit amet consectetur,  fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Pratham Rajbhoj",
	description:
		"A passionate Full Stack Web Developer and Competitive Programmer.",
	author: "Pratham Rajbhoj",
	image: "https://avatars.githubusercontent.com/u/84040204?v=4",
	url: "",
	keywords: [
		"Pratham",
		"Pratham Rajbhoj",
		"@1hanzla100",
		"1hanzla100",
		"Portfolio",
		"Pratham Portfolio ",
		"Pratham Rajbhoj Portfolio",
	],
}
