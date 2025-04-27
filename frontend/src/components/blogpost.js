import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// FA23
import ABlinkIntoSiliconsPotential from "../blogposts/FA23/ABlinkIntoSiliconsPotential";
import ChippingAwayAtChallenges from "../blogposts/FA23/ChippingAwayAtChallenges";
import DesigningAndSynthesizingABetterFFT from "../blogposts/FA23/DesigningAndSynthesizingABetterFFT";
import DigitalArt from "../blogposts/FA23/DigitalArt";
import ElectronicDesignAutomation from "../blogposts/FA23/ElectronicDesignAutomation";
import FromSandToSilicon from "../blogposts/FA23/FromSandToSilicon";
import HelloWorld from "../blogposts/FA23/HelloWorld";
import IterativeVsUnrolledCalculations from "../blogposts/FA23/IterativeVsUnrolledCalculations";
import MallocFromScratch from "../blogposts/FA23/MallocFromScratch";
import PCBDesign from "../blogposts/FA23/PCBDesign";
import RepresentingNumbersInHardware from "../blogposts/FA23/RepresentingNumbersInHardware";
import TestAndValOfPCBs from "../blogposts/FA23/TestAndValOfPCBs";
import TheAnalogSubteamProcessFlow from "../blogposts/FA23/TheAnalogSubteamProcessFlow";
import UnravelingBirdSoundsWithSpectrograms from "../blogposts/FA23/UnravelingBirdSoundsWithSpectrograms";

// FA24
import AnikaAnalog from "../blogposts/FA24/AnikaAnalog";
import GroundUp from "../blogposts/FA24/GroundUp";
import TanyaSoftware from "../blogposts/FA24/TanyaSoftware";
import Unboxing from "../blogposts/FA24/Unboxing";
import VayunDigital from "../blogposts/FA24/VayunDigital";
// SP23

// SP24

// This component will render a single blog post
function BlogPost() {
  // const location = useLocation();
  // const [blog, setBlog] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Extract URL details whenever the location changes
  //   const pathId = location.pathname.split("/").pop();

  //   // Get chip data from imported JSON
  //   const selectedBlog = blogData.find((item) => item.id === pathId);
  //   setBlog(selectedBlog);
  //   setLoading(false);
  // }, [location]);

  return <ABlinkIntoSiliconsPotential />;
}

export default BlogPost;
