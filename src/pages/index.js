import React from 'react'
import Link from 'gatsby-link'

import 'font-awesome/css/font-awesome.min.css';
import '../styles/main.css'

const IndexPage = () => (
<div>
    <div className="site-wrapper">
        <div className="header-top">
            <div className="header-language site-width">
                <i className="fa fa-globe"></i> Slovenčina (SK)
                <i className="fa fa-angle-down"></i>
            </div>
        </div>
        <div className="header-bottom site-width">
            <div className="logo">
                <img src={require('../assets/on-board-logo.svg')} alt="onBoard" />
            </div>
            <a href="#">
                <button className="button-smol">About Us</button>
            </a>
            <a href="#">
                <button className="button-smol">Australia</button>
            </a>
            <a href="#">
                <button className="button-smol">New Zealand</button>
            </a>
            <a href="#">
                <button className="button-smol">Canada</button>
            </a>
            <a href="#">
                <button className="button-smol">Contact</button>
            </a>
        </div>
        <div className="header">
            <div className="hero site-width">
                <h2>Welcome to OnBoard Study Australia</h2>
                <div className="text">OnBoard Study Australia offers free advice and student counselling to students from all parts of the world
                    via our Australian and international offices. Our services include academic course selection, visa processing,
                    help finding jobs, migration services, accommodation and general welfare.
                </div>
                <a href="#">
                    <button className="button">Find out more
                        <i className="fa fa-angle-right"></i>
                    </button>
                </a>
            </div>
        </div>
        <div className="content site-width">
            <div className="wells">
                <div className="well">
                    <img src={require('../assets/koala.jpg')} alt="canada" />
                    <h3>Australia</h3>Bacon ipsum dolor amet brisket buffalo rump.
                    <a href="#">
                        <button>More
                            <i className="fa fa-angle-right"></i>
                        </button>
                    </a>
                </div>
                <div className="well">
                    <img src={require('../assets/new-zealand.jpg')} alt="canada" />
                    <h3>New Zealand</h3>Bacon ipsum dolor amet brisket buffalo rump.
                    <a href="#">
                        <button>More
                            <i className="fa fa-angle-right"></i>
                        </button>
                    </a>
                </div>
                <div className="well">
                    <img src={require('../assets/canada-bike.jpg')} alt="canada" />
                    <h3>Canada</h3>Bacon ipsum dolor amet brisket buffalo rump.
                    <a href="#">
                        <button>More
                            <i className="fa fa-angle-right"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div className="content site-width">
            <h2>Services</h2>
            <div className="text">
                OnBoard Study Australia offers free advice and student counselling to students from all parts of the world via
                our Australian and international offices. Our services include academic course selection, visa processing,
                help finding jobs, migration services, accommodation and general welfare.
            </div>
            <div className="services">
                <a href="#" className="service canada">Work</a>
                <a href="#" className="service beach">Study</a>
                <a href="#" className="service globe">Language</a>
                <a href="#" className="service surfer">School</a>
                <a href="#" className="service girl">Other</a>
            </div>
        </div>

        <div className="content site-width">
            <h2>Lates articles</h2>
            <div className="articles">
                <div className="article">
                    <div className="thumb">
                        <a href="#">
                            <img src={require('../assets/surfer.jpg')} alt="" />
                        </a>
                    </div>
                    <div className="article-body">
                        <a href="#">
                            <a href="#">
                                <h3 className="title">Title of the Article</h3>
                            </a>
                        </a>
                        <div className="published">12.3.2018 12:03:45</div>
                        <div className="text">Bacon ipsum dolor amet brisket buffalo rump ball tip beef ground round salami kevin cupim flank short
                            ribs pork belly jowl capicola. Meatball swine pork, brisket beef ribs porchetta short loin shoulder
                            t-bone. Sirloin leberkas shoulder tri-tip. Turkey short loin t-bone, andouille prosciutto capicola
                            porchetta jowl landjaeger filet mignon bacon sausage. Sausage chicken leberkas pork corned beef
                            kevin cupim turkey tenderloin pork chop.
                        </div>
                        <a href="#" className="article-read-more">
                            <button className="button-main">Read more
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="article">
                    <div className="thumb">
                        <a href="#">
                            <img src={require('../assets/girl-in-front-of-sea.jpg')} alt="" />
                        </a>
                    </div>
                    <div className="article-body">
                        <a href="#">
                            <h3 className="title">Title of the Article</h3>
                        </a>
                        <div className="published">12.3.2018 12:03:45</div>
                        <div className="text">Bacon ipsum dolor amet brisket buffalo rump ball tip beef ground round salami kevin cupim flank short
                            ribs pork belly jowl capicola. Meatball swine pork, brisket beef ribs porchetta short loin shoulder
                            t-bone. Sirloin leberkas shoulder tri-tip. Turkey short loin t-bone, andouille prosciutto capicola
                            porchetta jowl landjaeger filet mignon bacon sausage. Sausage chicken leberkas pork corned beef
                            kevin cupim turkey tenderloin pork chop.
                        </div>
                        <a href="#" className="article-read-more">
                            <button className="button-main">Read more
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="article">
                    <div className="thumb">
                        <a href="#">
                            <img src={require('../assets/beach-entrance.jpg')} alt="" />
                        </a>
                    </div>
                    <div className="article-body">
                        <a href="#">
                            <h3 className="title">Title of the Article</h3>
                        </a>
                        <div className="published">12.3.2018 12:03:45</div>
                        <div className="text">Bacon ipsum dolor amet brisket buffalo rump ball tip beef ground round salami kevin cupim flank short
                            ribs pork belly jowl capicola. Meatball swine pork, brisket beef ribs porchetta short loin shoulder
                            t-bone. Sirloin leberkas shoulder tri-tip. Turkey short loin t-bone, andouille prosciutto capicola
                            porchetta jowl landjaeger filet mignon bacon sausage. Sausage chicken leberkas pork corned beef
                            kevin cupim turkey tenderloin pork chop.
                        </div>
                        <a href="#" className="article-read-more">
                            <button className="button-main">Read more
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="article">
                    <div className="thumb">
                        <a href="#">
                            <img src={require('../assets/globe.jpg')} alt="" />
                        </a>
                    </div>
                    <div className="article-body">
                        <a href="#">
                            <h3 className="title">Title of the Article</h3>
                        </a>
                        <div className="published">12.3.2018 12:03:45</div>
                        <div className="text">Bacon ipsum dolor amet brisket buffalo rump ball tip beef ground round salami kevin cupim flank short
                            ribs pork belly jowl capicola. Meatball swine pork, brisket beef ribs porchetta short loin shoulder
                            t-bone. Sirloin leberkas shoulder tri-tip. Turkey short loin t-bone, andouille prosciutto capicola
                            porchetta jowl landjaeger filet mignon bacon sausage. Sausage chicken leberkas pork corned beef
                            kevin cupim turkey tenderloin pork chop.
                        </div>
                        <a href="#" className="article-read-more">
                            <button className="button-main">Read more
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="content site-width">
            <div className="form-box">
                <div>
                    <h2>Contact Us</h2>
                    Send Us a message. Anything you ever wanted to ask. Anything. This text is just a filler.
                </div>
                <form id="contact">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" />

                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="your@email.com" />

                    <label for="text">Message</label>
                    <textarea name="text" id="text" placeholder="Ask anything you want"></textarea>

                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>

        <div className="footer">
            <div className="footer-content site-width">
                <div>
                    <div className="logo">OnBoard</div>
                </div>
                <div>
                    492 Near beach road
                    <br /> 2009 Pyrmont
                    <br />
                    <br /> zuzka@onboardstudy.sk
                </div>
                <div className="footer-menu">
                    <div>
                        <a href="#">About Us</a>
                    </div>
                    <div>
                        <a href="#">Austradiva</a>
                    </div>
                    <div>
                        <a href="#">New Zealand</a>
                    </div>
                    <div>
                        <a href="#">Canada</a>
                    </div>
                    <div>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div>
                    <div>
                        <a href="#">
                            <i className="fa fa-facebook-square"></i> OnBoard
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <i className="fa fa-twitter-square"></i> @OnBoard
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <i className="fa fa-instagram"></i> @OnBoard
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom site-width">
                <div>&copy; 2018 &middot; OnBoard Study <div className="created-by">Created by <a href="#">sajgal.com</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default IndexPage
