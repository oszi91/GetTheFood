import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="footer__container">
						<div className="aboutMe">
							<p className="aboutMe__contact">Contact</p>
							<ul className="aboutMe-list">
								<li className="aboutMe__data">
									<a
										className="aboutMe__data__link"
										href="https://github.com/oszi91"
										target="_blank"
									>
										<i className="fab fa-github"></i>
										Oszi91
									</a>
								</li>
								<li className="aboutMe__data">
									<a
										className="aboutMe__data__link"
										href="mailto:oszywapawel@gmail.com"
									>
										<i className="fas fa-envelope"></i>
										oszywapawel@gmail.com
									</a>
								</li>
								<li className="aboutMe__data">
									<a
										className="aboutMe__data__link"
										href="https://www.linkedin.com/in/pawel-oszywa"
										target="_blank"
									>
										<i className="fab fa-linkedin"></i>
										PawelOszywa
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
