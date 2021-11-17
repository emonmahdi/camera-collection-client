import React from 'react';
import './Footer.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Container, Typography } from '@mui/material';
 
const Footer = () => {
    return (
		<>
		<div className="footer-section">
			<div className="container">
			<div className="row">
				<div className="col-lg-4">
					<h2 className='logo-text'>
						<a href="#">Smart Camera</a>
					</h2>
					<p>We are provide CC Camera And Your Business  And Any Appertment save our Camera service </p>
				</div>
				<div className="col-lg-4">
					<h2>
					Our Fetures Link
					</h2>
					 <li><a href="#">Standard Camera</a></li>
					 <li><a href="#">Most Useful Camera</a></li>
					 <li><a href="#">Security Camera</a></li>
				</div>
				<div className="col-lg-4">
					<h2>
					Location
					</h2>
					 <p>Uttor Badda, Hossen Tower , Dhaka- 1212.</p> 
				</div>
			</div>
			</div>
		</div>
		<div className='copy'>
			<p>&copy; Copyright Smart Camera || Allrights Reserved.</p>
		</div> 
		</>	












//         <div>
//             <footer className="footer-section">
// 	<div className="container">
// 		<div className="row">
// 			<div className="col-md-2">
// 				<h4>
// 					<a href="#">Smart Camera</a>
// 				</h4>
// 				<span>All rights reserved.&copy; 2021| Smart Camera </span>
// 				<div className="socila-footer">
// 					<a href=""><i className="fa fa-facebook"></i></a>
// 					<a href=""><i className="fa fa-twitter"></i></a>
// 					<a href=""><i className="fa fa-instagram"></i></a>
// 				</div>
// 			</div>
// 			<div className="col-md-2">
// 				<h4>Useful Links</h4>
// 				<ul>
// 					<li><a href="">Home</a></li>
// 					<li><a href="">About</a></li>
// 					<li><a href="">Service</a></li>
// 					<li><a href="">Conatact</a></li>
// 				</ul>
// 			</div>
// 			<div className="col-md-2">
// 				<h4>Useful Links</h4>
// 				<ul>
// 					<li><a href="">Blog</a></li>
// 					<li><a href="">Gallrey</a></li>
// 					<li><a href="">Portfolio</a></li>
// 					<li><a href="">Pricing</a></li>
// 				</ul>
// 			</div>
// 			<div className="col-md-2">
// 				<h4>Useful Links</h4>
// 				<ul>
// 					<li><a href="">Login</a></li>
// 					<li><a href="">Timeline</a></li>
// 					<li><a href="">Faq</a></li>
// 					<li><a href="">Coming Soon</a></li>
// 				</ul>
// 			</div>
// 			<div className="col-md-4">
// 				<h4>Subscrib</h4>
// 				<form action="" className="d-flex footer-input">
// 				  	 <input type="text" className='form-control' />
// 				  	<button className="btn btn-danger" type="submit"><i className="fa fa-paper-plane"></i>Subscribe</button>
// 			  </form>
// 			  <p>We help you to grow up your business and solution for your impressive projects.</p>
// 			</div>
// 		</div>
// 	</div>
// </footer>
//         </div>
    );
};

export default Footer;