
import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Import your custom CSS file

function About({ submittedMessage }) {
    return (
        <>
            <div className="row">
                {/* Left Sidebar */}
                <div className="col-2">
                    <div id="list-example" className="list-group">
                        
                  
                        <a class="list-group-item list-group-item-action" href="#About">About Us</a>
                        <a class="list-group-item list-group-item-action" href="#Blog">Blog</a>
                        <a class="list-group-item list-group-item-action" href="#FQAs">FAQs</a>
                
                    </div>
                </div>
                {/* Right Content */}
                <div className="col-10">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                        {/* Content */}
                        <h4 id="About">About Us:</h4>
                        {/* Carousel and content */}
                        <p>
                            <h1>Welcome to SR HOTEL</h1>
                            <div>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://siarahotels.com/images/Gallery4.jpg"
                                            alt="Hotel Exterior"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://siarahotels.com/images/Gallery3.jpg"
                                            alt="Hotel Lobby"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://siarahotels.com/images/Gallery2.jpg"
                                            alt="Hotel Dining"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <div className='col-8'>
                                    Nestled in the heart of Rajkot, SR is more than just a place to stay – it's an immersive experience crafted to indulge your senses and elevate your stay to new heights.
                                </div>
                                <p>
                            <h4>A Legacy of Hospitality</h4>
                            Since 2015, SR has been a beacon of hospitality, drawing guests from around the globe with its blend of timeless elegance and modern comfort. From its humble beginnings as a family-owned establishment to its current status as a hallmark of luxury, our hotel has remained dedicated to providing unparalleled service and creating lasting memories for every guest.
                        </p>
                        <p>
                            <h4>Our Commitment to Excellence</h4>
                            At SR, excellence is not just a standard – it's our passion. From the moment you step through our doors, you'll be greeted with warmth and genuine hospitality that sets us apart. Our mission is simple: to exceed your expectations at every turn, ensuring that your stay with us is nothing short of extraordinary.
                        </p>
                        <p>
                            <h4>Discover a World of Luxury</h4>
                            Located in the vibrant [neighborhood/district], SR offers unparalleled access to Rajkot's rich cultural tapestry. Explore nearby landmarks, indulge in culinary delights at renowned restaurants, or simply soak in the vibrant atmosphere of the bustling streets – the possibilities are endless.
                        </p>
                        <p>
                            <h2>Immerse Yourself in Local Culture</h2>
                            Indulge in the finest accommodations and amenities that SR has to offer. From luxurious rooms and suites adorned with elegant furnishings to world-class dining experiences and rejuvenating spa treatments, every aspect of your stay is meticulously curated to provide the utmost comfort and satisfaction.
                        </p>
                        <p>
                            <h2>Meet Our Dedicated Team</h2>
                            Behind every memorable stay at SR is a team of passionate individuals dedicated to ensuring your comfort and satisfaction. From our experienced concierge to our talented chefs and attentive housekeeping staff, every member of our team is committed to providing personalized service that exceeds your expectations.
                        </p>
                        <p>
                            <h2>Book Your Stay Today</h2>
                            Whether you're traveling for business or leisure, SR invites you to experience the pinnacle of luxury hospitality. Book your stay with us today and discover why discerning travelers choose SR for an unforgettable experience.
                        </p>

                            </div>
                        </p>
                        <h4 id="Blog">Blog</h4> 
                        {/* Additional content */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* First Card */}
                                    <Card>
                                        <Card.Body>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src="https://menagetotal.com/wp-content/uploads/2017/10/Hotel-Housekeeping-Done-Right.jpg"
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src="http://3.bp.blogspot.com/-Pca2as0uowI/U9traqprXZI/AAAAAAAAAHY/KJwXhEaOHAM/s1600/Business+Center+3.JPG"
                                                        alt="Second slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src="http://products.skift.com/wp-content/uploads/2015/03/SPG-Keyless-Aloft-big.jpg"
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                            </Carousel>
                                            <Card.Text>

                                           
                                                <h4><u>Facility:</u></h4>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-md-6">
                                    {/* Second Card */}
                                    <Card>
                                        <Card.Body>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src="https://www.hoteliermiddleeast.com/public/images/2018/10/29/Best-Hotel.jpg"
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src="https://news.gtp.gr/wp-content/uploads/2017/11/Boutique-Hotel-Awards_01.jpg"
                                                        alt="Second slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src="https://www.theworldluxuryawards.com/wp-content/uploads/2020/10/IMG_2876-scaled.jpg"
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                            </Carousel>
                                            <Card.Text>
                                                <h4><u>Best Hotel Award</u></h4>
                                                <p>Paris Fashion Week is one of the most prominent fashion events in the world...</p>
                                                <div className="contact">
                                                    <h5>Contact Information</h5>
                                                    <p>Email: example@example.com</p>
                                                    <p>Phone: +123456789</p>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            {/* Third Card */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img src="https://www.roarforgood.com/wp-content/uploads/2023/03/Hotel-Laws-and-Regulations-for-Safety-%E2%80%94-What-Safety-Regulations-Must-Hotels-Follow_v1b.png" className="d-block w-100" alt="Image" />
                                                </Carousel.Item>
                                            </Carousel>
                                            <div className="card-text">
                                                <h4><u>Rules and Regulations</u></h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Additional content */}
                        <h4 id="FQAs">FAQs:</h4>
                        <p>
                            <h5>1. Welcome to Our Hotel: Your Home Away from Home</h5>
                            As the administrative team behind [Hotel Name], we're thrilled to extend a warm welcome to all our guests, both new and returning. At our hotel, we believe in more than just providing a place to stay; we strive to create memorable experiences and ensure your comfort and satisfaction from the moment you walk through our doors.
                        </p>
                        <p>
                            <h5>2. A Commitment to Excellence</h5>
                            From the meticulous upkeep of our facilities to the attentive service provided by our dedicated staff, excellence is at the heart of everything we do. Our goal is not only to meet but to exceed your expectations, ensuring that every aspect of your stay is nothing short of exceptional.
                        </p>
                        <p>
                            <h5>3. Unparalleled Comfort and Convenience</h5>
                            Whether you're traveling for business or leisure, solo or with family, we offer a range of accommodations to suit your needs. Our well-appointed rooms and suites are designed with your comfort in mind, featuring plush bedding, modern amenities, and thoughtful touches to make you feel right at home.
                        </p>
                        <p>
                            <h5>4. Amenities That Enhance Your Stay</h5>
                            At [Hotel Name], we believe in providing more than just a place to rest your head. That's why we offer an array of amenities to enhance your stay, including complimentary Wi-Fi, a fitness center, a refreshing outdoor pool, and convenient on-site dining options. Whatever your needs may be, we're here to ensure you have everything you need for a comfortable and enjoyable stay.
                        </p>
                        <p>
                            <h5>5. Experience [Hotel Name] for Yourself</h5>
                            Whether you're visiting for business or pleasure, we invite you to experience the exceptional hospitality and warmth of [Hotel Name]. Book your stay with us today and discover why we're the preferred choice for discerning travelers seeking comfort, convenience, and unparalleled service. We look forward to welcoming you and creating unforgettable memories together.
                        </p>
                        <p>
                            <h5>6. Personalized Service, Every Step of the Way</h5>
                            As a guest of [Hotel Name], you can expect personalized service from the moment you make your reservation to the time of your departure. Our friendly and attentive staff are here to assist with any request, whether it's arranging transportation, recommending local attractions, or fulfilling special dietary needs. Your comfort and satisfaction are our top priorities, and we'll go above and beyond to ensure you have a seamless and memorable experience.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export { About };

