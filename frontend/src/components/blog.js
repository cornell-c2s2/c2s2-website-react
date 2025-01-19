import React from "react";

//thumbnails
import vayunDigitalThumbnail from '../blogposts/FA24/thumbnails/VayunDigital.png';
import unboxingThumbnail from '../blogposts/FA24/thumbnails/unboxing.png';
import groundUpThumbnail from '../blogposts/FA24/thumbnails/groundUp.png';

function Blog() {
    return (
        <main id="main">
            <section id="apply" class="breadcrumbs">
                <div class="container">
                    <div class="section-title">
                        <h1>C2S2 Blog</h1>
                    </div>
                </div>
            </section>
            
            <section id="posts" class="services section-bg" style = {{padding:0}} >
                <div class="container" data-aos="fade-up">
                    
                    <div class="section-title">
                        <p>Fall 2024</p>
                    </div>
                    
                    <div class="row">

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA24/VayunDigital.html">
                                    <img src= {vayunDigitalThumbnail} class="img-fluid" alt=""/>
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Digital Design Subteam Advances </h4>
                                                <span>Vayun Tiwari</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>
                        
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA24/groundUp.html">
                                    <img src = {groundUpThumbnail} class="img-fluid" alt=""/>
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Building from the Ground Up: The Platforms Subteam's Evolution </h4>
                                                <span>Adele Thompson</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA24/unboxing.html">
                                    <img src= {unboxingThumbnail} class="img-fluid" alt=""/>
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Unboxing C2S2's 2024 Spring Tape Outs! </h4>
                                                <span>Jason Wang</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    

                    {/*
                    <div class="section-title">
                        <p>Spring 2024</p>
                    </div>

                    <div class="row">

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/TechnicalPM.html">
                                    <img src="blogposts/SP24/thumbnails/TechnicalPM.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Sync & Innovate: Technical PM Applied</h4>
                                                <span>Taylor Do and Jason Wang</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/VerifyBetterFFT.html">
                                    <img src="blogposts/SP24/thumbnails/VerifyBetterFFT.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Synthesizing and Verifying a Better FFT</h4>
                                                <span>Edmund Lam and Barry Lyu</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>


                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/ASICDesignFlow.html">
                                    <img src="blogposts/SP24/thumbnails/ASICDesignFlow.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>From Idea to Chip: ASIC Design Flow</h4>
                                                <span>Kevin Rodriguez and Vicky Le</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/ImgSilicon.html">
                                    <img src="blogposts/SP24/thumbnails/ImgSilicon.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Room at the Bottom: Imaging Silicon</h4>
                                                <span>Daniel Kaminski and Caden Xu</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/Magic.html">
                                    <img src="blogposts/SP24/thumbnails/Magic.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Doing Magic in Magic VLSI </h4>
                                                <span>Thomas Figura </span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/CMake.html">
                                    <img src="blogposts/SP24/thumbnails/CMake.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>C-Making a Build System</h4>
                                                <span>Jack Frank and Aidan McNay</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/OverCloud.html">
                                    <img src="blogposts/SP24/thumbnails/OverCloud.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Over-the-Cloud Communication using the Particle Argon</h4>
                                                <span>Akshati Vaishnav and Kene Chukwuma-Orakwe</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/ChipChatter.html">
                                    <img src="blogposts/SP24/thumbnails/ChipChatter.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Chip Chatter</h4>
                                                <span>Abigail Varghese and Adele Thompson</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>


                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/ScrubJay.html">
                                    <img src="blogposts/SP24/thumbnails/ScrubJay.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>How to Know a Scrub Jay is a Scrub Jay</h4>
                                                <span>Elias Castro</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/TwoWorlds.html">
                                    <img src="blogposts/SP24/thumbnails/TwoWorlds.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Bridging Two Worlds: Analog-to-Digital Converters</h4>
                                                <span>David Bertuch and Jon Ho</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/GDS.html">
                                    <img src="blogposts/SP24/thumbnails/GDS.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>GDS Chip Art</h4>
                                                <span>Emily Lan and Demetrios Gavalas</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/chooseFighter.html">
                                    <img src="blogposts/SP24/thumbnails/chooseFighter.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>KiCad vs. Altium: Choosing Your Fighter!</h4>
                                                <span>Chimdi Anude and Sherri Qazi</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>


                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP24/NotEasy">
                                    <img src="blogposts/SP24/thumbnails/NotEasy.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Making Chips is NOT Easy</h4>
                                                <span>Angela Cui and Tomas Choi</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>


                    </div>

                    <div class="section-title">
                        <p>Fall 2023</p>
                    </div>

                    <div class="row">

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/PCBDesign">
                                    <img src="blogposts/FA23/thumbnails/PCBDesign.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>PCB Design: "There's Layers To It"</h4>
                                                <span>Chimdi Anude and Sherri Qazi</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/DesigningAndSynthesizingABetterFFT">
                                    <img src="blogposts/FA23/thumbnails/DesigningAndSynthesizingABetterFFT.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Designing and Synthesizing a Better FFT</h4>
                                                <span>Edmund Lam and Barry Lyu</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/TestAndValOfPCBs">
                                    <img src="blogposts/FA23/thumbnails/TestAndValOfPCBs.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Testing and Validation of Printed Circuit Boards</h4>
                                                <span>Akshati Vaishnav and Kene Chukwuma</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/ChippingAwayAtChallenges">
                                    <img src="blogposts/FA23/thumbnails/ChippingAwayAtChallenges.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Chipping Away at Challenges: Drafting a Roadmap</h4>
                                                <span>Abigail Varghese and Adele Thompson</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/ElectronicDesignAutomation">
                                    <img src="blogposts/FA23/thumbnails/ElectronicDesignAutomation.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Electronic Design Automation: Creating Computers from Code</h4>
                                                <span>Angela Cui and Ethan Gabizon</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/UnravelingBirdSoundsWithSpectrograms">
                                    <img src="blogposts/FA23/thumbnails/UnravelingBirdSoundsWithSpectrograms.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Unraveling Bird Sounds with Spectrograms</h4>
                                                <span>Sana Chawla and Jay Patel</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/IterativeVsUnrolledCalculations">
                                    <img src="blogposts/FA23/thumbnails/IterativeVsUnrolledCalculations.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Iterative vs. Unrolled Calculations</h4>
                                                <span>Steven Sun and Aidan McNay</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/DigitalArt">
                                    <img src="blogposts/FA23/thumbnails/DigitalArt.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Digital Art: Principles Of Digital Circuit Design</h4>
                                                <span>Setor Simpri and Ena Jovanovic</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/HelloWorld">
                                    <img src="blogposts/FA23/thumbnails/HelloWorld.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Hello World! New Updates on Sponsorship Packet and Newsletter</h4>
                                                <span>Taylor Do and Jason Wang</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/MallocFromScratch">
                                    <img src="blogposts/FA23/thumbnails/MallocFromScratch.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Malloc from Scratch: Diving into Memory's Secret Keeper</h4>
                                                <span>Akanksha Sarkar</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/FromSandToSilicon">
                                    <img src="blogposts/FA23/thumbnails/FromSandToSilicon.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>From Sand To Silicon: ASICs and FPGAs Explained</h4>
                                                <span>Tomas Choi and Johnny Martinez</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/ABlinkIntoSiliconsPotential">
                                    <img src="blogposts/FA23/thumbnails/ABlinkIntoSiliconsPotential.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>A Blink Into Silicon's Potential</h4>
                                                <span>Ananya Goenka and Elias Castro</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/RepresentingNumbersInHardware">
                                    <img src="blogposts/FA23/thumbnails/RepresentingNumbersInHardware.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Representing Numbers In Hardware</h4>
                                                <span>Mattie Lee and Vicky Le</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/FA23/TheAnalogSubteamProcessFlow">
                                    <img src="blogposts/FA23/thumbnails/TheAnalogSubteamProcessFlow.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>The Analog Subteam Process Flow</h4>
                                                <span>Thomas Figura and David Bertuch</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div class="section-title">
                        <p>Spring 2023</p>
                    </div>

                    <div class="row">

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/SystemArchitectureBlogPost">
                                    <img src="blogposts/SP23/thumbnails/SystemArchitectureBlogPost.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>System Architecture Blog Post</h4>
                                                <span>Matt Hales and Akshati Vaishnav</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/DeserializerAndTapeOutUpdate">
                                    <img src="blogposts/SP23/thumbnails/DeserializerAndTapeOutUpdate.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Deserializer and Tape-Out Update</h4>
                                                <span>Vicky Le</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/TwoSidesOfACoin">
                                    <img src="blogposts/SP23/thumbnails/TwoSidesOfACoin.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Two Sides Of A Coin: How Modules on a Chip Communicate</h4>
                                                <span>Tomas Choi and Kevin Liu</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/MagicVLSIvsCadenceVirtuoso">
                                    <img src="blogposts/SP23/thumbnails/MagicVLSIvsCadenceVirtuoso.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Magic VLSI vs. Cadence Virtuoso</h4>
                                                <span>Thomas Figura and Aidan McNay</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/ProgressReport4_23_23">
                                    <img src="blogposts/SP23/thumbnails/ProgressReport4_23_23.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Progress Report - 4/23/2023</h4>
                                                <span>Christopher Schiff and Johnny Martinez</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/SoftwareAndRelativePositionEstimator">
                                    <img src="blogposts/SP23/thumbnails/SoftwareAndRelativePositionEstimator.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Software and Relative Position Estimator</h4>
                                                <span>Akanksha Sarkar and Sana Chawla</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/SPIMinion-Adapter-PythonTools">
                                    <img src="blogposts/SP23/thumbnails/SPIMinion-Adapter-PythonTools.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>SPI Minion, Adapter, & Python Tools</h4>
                                                <span>Alga Peng and Xiangyi Zhao</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/SiliconForScrubJays">
                                    <img src="blogposts/SP23/thumbnails/SiliconForScrubJays.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Silicon For Scrubs Jays</h4>
                                                <span>Chidera Wokonko and Abigail Varghese</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/AnalogMultiplexer">
                                    <img src="blogposts/SP23/thumbnails/AnalogMultiplexer.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Analog Multiplexer</h4>
                                                <span>Adele Thompson and David Bertuch</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/ISPI">
                                    <img src="blogposts/SP23/thumbnails/ISPI.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>I SPI</h4>
                                                <span>Austin Brown and Mika Finkman</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/CrashDetectors&Calculators">
                                    <img src="blogposts/SP23/thumbnails/CrashDetectors&Calculators.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Crash Detectors & Calculators</h4>
                                                <span>Ananya Goenka and Michael Wei</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/SystemArchitectureProgressReport">
                                    <img src="blogposts/SP23/thumbnails/SystemArchitectureProgressReport.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>System Architecture Progress Report</h4>
                                                <span>Chimdi Anude and Kene Chukwuma-Orakwe</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/ProgressReportMarch2023">
                                    <img src="blogposts/SP23/thumbnails/ProgressReportMarch2023.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Progress Report - March 2023</h4>
                                                <span>Dylan Tom and Edmund Lam</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/TheProcessOfAcquiringSponsors">
                                    <img src="blogposts/SP23/thumbnails/TheProcessOfAcquiringSponsors.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>The Process of Acquiring Sponsors</h4>
                                                <span>Jasmine Samadi and Jay Patel</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/ProgressReport">
                                    <img src="blogposts/SP23/thumbnails/ProgressReport.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Progress Report</h4>
                                                <span>Will Salcedo and Steven Sun</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 d-block align-items-center" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="post">
                                <a href="blogposts/SP23/ConstantGmCurrentReferenceTapeIn">
                                    <img src="blogposts/SP23/thumbnails/ConstantGmCurrentReferenceTapeIn.png" class="img-fluid" alt="">
                                        <div class="post-info">
                                            <div class="post-info-content">
                                                <h4>Constant-g<sub>m</sub> Current Reference Tape-In</h4>
                                                <span>Jon Ho and Emmi Wyttenbach</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    */}
                </div> 
            </section>
        </main>
    );
}

export default Blog;