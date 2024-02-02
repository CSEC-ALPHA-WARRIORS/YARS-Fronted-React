import React from "react";
import HeaderText from "../../components/hero/HeaderText";
import Button from "../../components/common/button/button";
import Card from "../../components/hero/Card";
import StudentNumber from "../../components/hero/StudentNumber";
import Footer from "../../components/common/footer/footer";
import NavBar from "../../components/common/navBar/navBar";
import "./heroPage.scss";
import data from "./data.json";
import { Link } from "react-router-dom";
import { Loader } from "../../components/common/loading/loading";
function HeroPage() {
	// console.log(data.data);
	const vision = data.data.vision;
	const mission = data.data.mission;
	const value = data.data.value;
	return (
		<div className="heroPage">
			<NavBar />
			<section className="home">
				<HeaderText
					className="white"
					text="adama science and technology university"
				/>
				<h1 className="slogan">
					WE ARE DEDICATED TO INOVATE KNOWLEDGE
				</h1>
				<div className="home-section-buttons">
					<Link to="/register">
						{" "}
						<Button
							className="white-bg orange-hover"
							text="REGISTER"
						/>
					</Link>
					<Link to="/student-portal">
						{" "}
						<Button
							className="gray-bg white orange-hover"
							text="STUDENT PORTAL"
						/>
					</Link>
				</div>
			</section>
			<section className="who-we-are">
				<HeaderText className="blue-black bm-50" text="who we are" />
				<div className="cards">
					<Card title="vision" body={vision} />
					<Card
						className="down-card white blue-black-bg"
						title="mission"
						body={mission}
					/>
					<Card title="value" body={value} />
				</div>
			</section>
			<section className="register-now">
				<div className="student-number-container">
					<StudentNumber />
					<StudentNumber />
					<StudentNumber />
					<StudentNumber />
				</div>
				<div className="about-registration">
					<HeaderText
						className="blue-black bm-20"
						text="Register now"
					/>
					<p>
						{" "}
						Lorem ipsum dolor sit amet consectetur. Faucibus
						adipiscing elementum semper maecenas elit phasellus.
						Eget at ut id enim non vel odio neque. Hac tortor
						posuere venenatis elit facilisi dictumst amet. Nunc sit
						id fringilla vel habitant gravida. Vel egestas aliquet
						massa mi lobortis tincidunt. Dolor cursus in tempor
						quis. Ullamcorper mus sed velit leo pellentesque
						elementum in accumsan tellus. Pellentesque nulla
						consequat auctor elementum velit rhoncus malesuada
						maecenas. Nibh iaculis sed velit morbi donec quam. Dis
						nibh nunc egestas sed pharetra faucibus feugiat enim.
					</p>
					<Link to="/register">
						<Button
							className="blue-black-bg white small-btn"
							text="register"
						/>
					</Link>
					<Button
						className="orange white-gray-bg small-btn"
						text="learn more"
					/>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default HeroPage;
