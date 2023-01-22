import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { db } from '../firebase-config'
import "./Page.css"

function Page() {
    const [data, setData] = useState([]);
    let { id } = useParams();


    useEffect(() => {
        const dataRef = db.ref('data');
        dataRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setData(data);

        });
        return () => dataRef.off();
    }, []);

    if (!data) return null;
    return (
        <div>
            {data.map((item, index) => {
                if (item.clientname == id) {
                    return (
                        <div key={index}>


                            <header class="header">

                                <a href="#" class="logo ">Jonathan.</a>

                                <nav class="navbar">
                                    <a href="#home">Solutions</a>
                                    <a href="#about">About</a>
                                    <a href="#contact" class="try">Contact</a>

                                </nav>

                                <div id="menu-btn" class="fas fa-bars"></div>

                            </header>

                            <section class="home" id="home">



                                <div class="content">
                                    <h3 class="animate__animated animate__rubberBand ">Jonathan </h3>
                                    <p class="position">Principal Consultant</p>
                                    <p>this is a site for {item.clientname}
                                    </p>
                                    <a href="#contact" class="btn">Contact now</a>
                                </div>


                            </section>

                            <section class="about" id="about">
                                <h1 class="heading">More About me</h1>
                                <div class="row">
                                    <div class="image">
                                        <img alt="" height="550" src="images/home_img.jpg" width="400px" />
                                        <div class="share">
                                            <a href="#" class="fas fa-phone"></a>
                                            <a href="#" class="fab fa-twitter"></a>
                                            <a href="#" class="fab fa-instagram"></a>
                                            <a href="#" class="fab fa-linkedin"></a>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Core Capabilities</h3>
                                        <p>
                                            A dynamic, entrepreneurial-minded sales and marketing professional with a proven track record of implementing winning business development strategies. A true non-linear thinker who thrives when faced with the challenges of bringing to market new products and service lines in a crowded and competitive environment.
                                            <br /> <br />

                                            <b> Core competencies include: </b>Strong Background in successful Business Development, Channel Development, Customer Lifecycle Management and Internet Marketing. Architect of aggressive go-to-market strategies, new service line development and creative problem solving. Engages early to deliver innovation and efficiencies all along the value chain.

                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section class="work">
                                <h1 class="heading"><span>Work</span> history</h1>

                                <div class="content">
                                    <div class="box-container">

                                        <div class="box">
                                            <h1>Principal Consultant, Enter Action <span> Nashville, TN (2009-Present) </span></h1>
                                            <p>Leveraging 15 Years of successful sales, marketing and business development experience, I work with business owners to identify growth opportunities, develop and implement end-to-end sales and marketing processes to ultimately deliver desired outcomes to increase revenues.</p>

                                            <h2>Functional areas</h2>
                                            <ul>
                                                <li>Competitive and SWOT Analysis</li>
                                                <li>Business Process Analysis and Development</li>
                                                <li>Customer Lifecycle Management</li>
                                                <li>Sales Management and Training</li>
                                                <li>Google AdWords- Expert Level, Google Partner (Agency Level)</li>
                                                <li>Conversion and Landing Path Optimization</li>
                                                <li>Remarketing Campaign Management</li>
                                                <li>Copywriting - all media, press releases, script writing, video direction, etc</li>
                                                <li>Email and Sequential Marketing Campaign Management</li>
                                                <li>Customer Relationship Management (CRM) Implementation- various platforms</li>
                                                <li>Analytics and Reporting</li>
                                            </ul>
                                        </div>


                                        <div class="box">
                                            <h1>Director of Business Development, eTransX, Inc. <span> Nashville, TN (2005-2009) </span></h1>
                                            <p>Managed all aspects of business development for an Independent Software Vendor in the field of Enterprise Application Integration (EAI) and Business Intelligence (BI), with a focus on the defense, aerospace and healthcare industries. Worked directly with C-level executives, elected government officials, leaders of military, police and healthcare agencies worldwide to identify and implement EAI and BI solutions for the integration of disparate management systems across the enterprise</p>

                                            <ul>
                                                <li>Managed all aspects of sales and marketing including video, print and web-based media, extensive Pay Per Click</li>
                                                <li>campaigns, analytics, sequential direct marketing campaigns, YouTube channel development, public relations,
                                                    press, releases, white papers, etc.</li>
                                                <li>Conceptualized and brought to market the industry-first Healthcare Enterprise Messaging and Integration Engine appliance (eTX HEMI). Managed associated branding, trademarking, licensing and go-to-market strategies.</li>
                                                <li>Implemented proprietary Customer Lifecycle Management program, integrating front end Lead Generation with proprietary Business Intelligence system and CRM Implementation (Sugar and Salesforce), etc.</li>
                                                <li>Sold the first software license in six-year company history for a project totaling $330k, subsequently sold 19 additional licenses to leading healthcare organizations during my tenure.</li>
                                                <li>Channel Management- created and managed strategic alliances with industry partners.</li>
                                                <li>Published as a thought leader in various industry related media outlets.</li>
                                                <li>Led development efforts in participation of NASA’s Small Business Innovative Research (SBIR) program.</li>
                                                <li>Ultimately responsible for revenue that grew the company from three employees to an industry leader in the field of Electronic Medical Record Integration in four years.</li>


                                            </ul>
                                        </div>


                                        <div class="box">
                                            <h1>Sales Manager, Adept Consulting Technology Group <span> Nashville, TN (2004-2005) </span></h1>
                                            <p>Managed sales operations for a boutique technology consulting firm with a focus on wireless data infrastructure. Created relationships at the executive level to bring bleeding edge technology solutions to first responder agencies such as law enforcement, fire, Offices of Emergency Management, and healthcare.</p>

                                            <ul>
                                                <li>Sold the first Gigabit wireless point-to-multipoint network in the United States.</li>
                                                <li>Negotiated and closed a $760,000 contract for implementation of large wireless WAN for a regional utility
                                                    company</li>
                                                <li>Presented the first mobile Mesh Network deployment in the region to elected officials at the state and local level.</li>
                                                <li>Personally featured in various media outlets for efforts with first responder and healthcare agencies.
                                                </li>
                                            </ul>
                                        </div>


                                        <div class="box">
                                            <h1>President, Brilliant Spaces, Inc. <span> Nashville, TN (2003-2004) </span></h1>
                                            <p>Managed daily operations of a small business with a focus on energy-conservative daylighting solutions for residential and commercial applications.</p>

                                            <ul>
                                                <li>Secured contract for commercial daylighting pilot project for large national retailer.</li>
                                                <li>Actively participated in all related industry associations.</li>
                                                <li>Featured in various media outlets for innovation in the marketplace.</li>
                                                <li>Acquired and leveraged leading industry internet domain names resulting in the first company to represent all three top manufacturers.</li>
                                            </ul>
                                        </div>


                                        <div class="box">
                                            <h1>Director of Business Development, Packet Leap Networks. <span> Nashville, TN (2003) </span></h1>
                                            <p>Managed all aspects of the sales process for a start-up business in the wireless networking arena. Marketed hybrid 802.11x wireless LANs to hotels, conference centers, hospitals, and corporate applications.</p>

                                            <ul>
                                                <li>Sold many of the first WiFi deployments in the Southeast region.</li>
                                                <li>Aligned the company with industry association leaders and technology-based networking partners.</li>
                                                <li>Created relationships with Hilton Corporation that resulted in the award of a contract to define the engineering standards for all WiFi deployments Worldwide.</li>
                                            </ul>
                                        </div>


                                        <div class="box">
                                            <h1>Account Executive, Xspedius Communications. <span> Nashville, TN (2001-2003) </span></h1>
                                            <p>Worked through a consultative approach to help small and medium-sized businesses maintain a competitive edge in their market by providing integrated voice, data and Internet solutions.</p>

                                            <ul>
                                                <li>Maintained and surpassed sales quotas by closing new business through extensive cold calling and networking.</li>
                                                <li>Participated in industry-related events such as Chamber of Commerce, Nashville Technology Council, etc.</li>
                                                <li>Maintained an exceptional ethic towards customer service and satisfaction.
                                                </li>
                                            </ul>
                                        </div>


                                        <div class="box">
                                            <h1>Account Executive, C Spire Wireless <span> Jackson, MS (1998-2001) </span></h1>
                                            <p>Sold cellular telephone hardware and service contracts to individual and business customers while providing added value to the employer by proactively creating and executing improvement programs for peer groups.
                                            </p>

                                            <ul>
                                                <li>Promoted three times in two years ending with appointment to Major Market Account Executive.</li>
                                                <li>Selected to open new markets and stores.</li>
                                                <li>Secured such large contracts as Entergy Corporation, Mississippi Farm Bureau and MS Society of CPA’s.</li>
                                                <li>Selected to host company-wide equipment and sales training programs.</li>
                                                <li>Volunteered as Company Captain and Committee Member- March of Dimes Walk America program.</li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </section>
                            <section class="contact" id="contact">
                                <h1 class="heading"><span>Contact</span> me</h1>
                                <div class="icons-container">
                                    <div class="icons"><img alt="" height="10px" src="/images/contact.png" width="20px" class="i" />
                                        <h3>Telephone</h3>
                                        <p> 615-961-8360</p>
                                    </div>
                                    <div class="icons"><img alt="" height="10px" src="/images/mail.png" width="20px" class="i" />
                                        <h3>Email</h3>
                                        <p>jladdsmith@gmail.com</p>
                                    </div>
                                    <div class="icons"><img alt="" height="10px" src="/images/location.png" width="20px" class="i" />
                                        <h3>Location</h3>
                                        <p>Columbus, MS 39705</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <form action=""><input class="box" placeholder="Name" />
                                        <input class="box" placeholder="Email" type="email" />
                                        <input class="box" placeholder="Telephone" type="number" />
                                        <textarea class="box" cols="30" name=""
                                            placeholder="Message" rows="10"></textarea> <input class="btn" type="submit" value="send message" />
                                    </form>
                                </div>
                            </section>



                            <section class="footer">

                                <div class="box-container">

                                    <div class="box">
                                        <h3> Jonathan ladd smith</h3>
                                        <p>A dynamic, entrepreneurial-minded sales and marketing professional with a proven track record of
                                            implementing winning business development strategies.</p>
                                        <div class="share">
                                            <a href="#" class="fab fa-facebook-f"></a>
                                            <a href="#" class="fab fa-twitter"></a>
                                            <a href="#" class="fab fa-instagram"></a>
                                            <a href="#" class="fab fa-linkedin"></a>
                                        </div>
                                    </div>

                                    <div class="box">
                                        <h3>Contact info</h3>
                                        <a href="#" class="links"> <i class="fas fa-phone"></i> 615-961-8360 </a>
                                        <a href="#" class="links"> <i class="fas fa-envelope"></i> jladdsmith@gmail.com </a>
                                        <a href="#" class="links"> <i class="fas fa-map-marker-alt"></i> 140 Co-Op Rd., Columbus, MS 39705 </a>
                                    </div>

                                    <div class="box">
                                        <h3>Quick links</h3>
                                        <a href="#" class="links"> <i class="fas fa-arrow-right"></i> Home </a>
                                        <a href="#" class="links"> <i class="fas fa-arrow-right"></i> Solutions </a>
                                        <a href="#about" class="links"> <i class="fas fa-arrow-right"></i> About </a>
                                        <a href="#contact" class="links"> <i class="fas fa-arrow-right"></i> Contact </a>
                                    </div>

                                    <div class="box">
                                        <h3>Interested?</h3>
                                        <p>Drop your email, lets talk</p>
                                        <input type="email" placeholder="your email" class="email" />
                                        <input type="submit" value="Submit" class="btn" />
                                    </div>

                                </div>

                                <div class="credit">Jonathan ladd smith | 615-961-8360 | jladdsmith@gmail.com</div>

                            </section>

                        </div>
                    )
                }
            })}
        </div>
    );
}

export default Page;
