import React from 'react'
import user from "../assets/img/User.png";
import mahesh from "../assets/img/mahesh.jpg";
import anand from "../assets/img/anand.jpg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
const Team = () => {
  return (
    <div class="container bootstrap snippets bootdey">
    <section id="team" class="white-bg padding-top-bottom">
		<div class="container bootstrap snippets bootdey">
			<h1 class="section-title text-center page-title">Meet our team</h1>
			<p class="section-description text-center">We are a small team with great skills. See the faces behind the lines of code. </p>	
			<div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
					<img class="img-responsive img-center img-thumbnail img-circle" style={{height:240,width:240}} src={mahesh} alt=""/>
					<h4>Meena Mahesh Kumar</h4>
					<p class="title">Founder </p>
				</div>
				<div class="col-sm-7">
					<div class="details">
						<p>Hi, i am Meena Mahesh Kumar Founder of Meena International, lets connect together in the hands of technology..</p>
						<ul class="social-icon">
                        <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
						</ul>
					</div>
				</div>
			</div>
			
			<div class="row member-content right">
				
				<div class="col-sm-7 col-sm-pull-2">
					<div class="details">
						<p>Hi I am Chimay Anand Seninor Engineer in Menna Internation, come on lets work together..</p>
						<ul class="social-icon">
                        <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
						</ul>
					</div>
				</div>
                <div class="col-sm-3 col-sm-push-8 member-thumb">
					<img class="img-responsive img-center img-thumbnail img-circle" style={{height:240,width:240}} src={anand} alt=""/>
					<h4>Chinmay Anand</h4>
					<p class="title">Engineer/Programmer/Product designer</p>
				</div>
			</div>
			
			<div class="row member-content">
				<div class="col-sm-3 col-sm-offset-1 member-thumb">
					<img class="img-responsive img-center img-thumbnail img-circle" style={{height:240,width:240}} src={user} alt=""/>
					<h4>XXX</h4>
					<p class="title"></p>
				</div>
				<div class="col-sm-7 ">
					<div class="details">
						<p>Hi i am XXX, Back end Developer at Meena International, having 10+ years experience in the field of development</p>
						<ul class="social-icon">
                        <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>    
</div>                    
  )
}

export default Team
