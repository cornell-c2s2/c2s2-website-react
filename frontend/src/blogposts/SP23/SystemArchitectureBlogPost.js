import React from "react";
import image1 from "./imgs/SystemArchitectureBlogPost/image1.png";

function SystemArchitectureBlogPost() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>System Architecture Blog Post</h1>
            <h2>Matt Hales and Akshati Vaishnav</h2>
            <h2 className="underline">May 7th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hi! I am Akshati and I am on C2S2's System Architecture sub-team.
            With the introduction of our new campus partner, the Lab of
            Ornithology, the system architecture sub-team has recently been
            involved in determining the system requirements and constraints for
            this project.
          </p>

          <p>
            We are working with Christopher Tarango at the Lab of Ornithology
            who is researching the movement of Scrub Jays and how their movement
            is associated with the bird's vocalization. In his past work,
            Tarango has bought tags and has connected an external Pipistrelle
            (for audio recording) and an external inertial motion recorder to
            the tag, and has soldered batteries onto the tag; this setup costs
            him around $1400. Currently, Tarango's batteries last for ~17 hours
            and the battery's capacity drops drastically over time.
            Additionally, he needs some sort of waterproofing for the tag to
            ensure that they are safe from the rain; we do need to ensure,
            however, that they do not create noise and interfere with the
            microphone on the tag. There is also a weight constraint associated
            with this project since, according to the 5% rule, the birds'
            behavior might be affected if something that is heavier than 5% of
            their weight is added to their body for long periods of time; this
            means that the tag on the Scrub Jays should weigh around five grams.
            We therefore hope to create a bird tag with the goal of improving
            the length of deployment and reducing birds' stress from tagging.
          </p>

          <p>
            In order to design this tagging device, we have been determining the
            system requirements and have been planning/researching potential
            implementations. For weatherproofing, we have been looking at
            thermo-contractile sleeves, specifically the non-metallic ones,
            since we are also looking at wireless communication for easier data
            transfer (discussed later) and having a metallic covering would
            result in a Faraday's cage. Additionally, we will be needing a
            microphone in the tagger to record bird vocalizations. We are
            thinking of implementing one or both of these two ideas for the
            microphone: first, we could have a better quality microphone that
            picks up all noises that the bird makes and encounters; second,
            C2S2's software sub-team could work on a noise-reduction mechanism
            that would allow for Tarango to have the noise-reduced data to
            analyze. We also need an IMU (inertial measurement unit) to get data
            for the movement of the bird. We would need a power delivery port in
            order to charge the tags as well as a data port to transfer data.
            Over the past year, the System Architecture sub-team has also been
            working on a Caravel chip, which we plan to add to the tag as well.
            We would have to add flash memory so that we can store data on the
            tag. We also plan on adding a chip to measure the battery status of
            the device so that it can communicate with the Caravel chip, and a
            clock so that we can control when the device gets data. Lastly,
            there needs to be a mechanical support for the harness so that the
            tag is easily placed onto the bird. Tarango has been using a
            rappole-style harness, which allows for the tag to be attached on
            the back of the bird, similar to a backpack.
          </p>

          <figure>
            <img src={image1} alt="Rappole-Style Harness" />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              Rappole-Style Harness
            </figcaption>
          </figure>

          <p>
            Along with the requirements of the system, we have outlined some
            components that would be nice for Tarango to have. We think that it
            would be helpful to have a cooling system or choose components that
            reduce the system from heating up, since the birds are located in
            Florida and the tags are placed on top of the birds, in direct view
            of sunlight. Additionally, we think that it would be useful to
            implement a method of geolocation so that the researchers can find
            the tags in the case that they are lost. Through talking with
            Tarango, we realized that charging the tags and collecting data from
            the tags takes a lot of time. In order to decrease that time, we are
            thinking of potentially adding solar panels to the tags or
            implementing wireless charging mechanisms such that multiple tags
            can be charged at once. For faster data collection, we are looking
            into potentially installing PIT (passive integrated transponders)
            tags on the bird tags and antenna near bird nests and/or frequently
            visited places so that when the birds pass through the area, some
            data can be transferred to the researchers.
          </p>

          <p>
            We are currently working on the systems diagram for this device and
            are still looking to explore more implementations to our
            requirements. We look forward to working with the Lab of Ornithology
            and to building something that will be useful for ornithology
            researchers.
          </p>

          <p>
            Hi I'm Matt and I'm also a part of C2S2's System Architecture
            sub-team. This year, the System Architecture team has been tasked
            with not only understanding the device specifics requested by
            Christopher Tarango and the Lab of Ornithology, but also developing
            a shield board for testing our project team's chip after
            fabrication. The shield board has two main functions: ensuring
            correct functionality and communication with our chip, as well as
            creating the framework for interfacing with the peripherals needed
            for Tarango's bird tags. At the beginning of this semester, we
            received the fabricated shield board we developed during the fall
            semester and purchased programmable lab equipment including a power
            supply (PSU), digital multimeter (DMM), function generator (FG), and
            oscilloscope. These tools allow us to test for correct input and
            output voltages, depending on the requirements of each peripheral.
            An example of this is the use of the Inertial Measurement Unit (IMU)
            we've chosen. The IMU is important for determining the orientation
            and movement of the bird thanks to the accelerometer and gyroscope
            respectively. However, the input voltage of the shield board is 5
            Volts whereas the IMU uses an input voltage of 1.8 Volts. Since we
            aren't trying to fry our IMU, we included two Linear and Low-dropout
            (LDO) regulators to drop the voltage from the input 5V to 3.3V, and
            then from 3.3V to 1.8V. When developing any form of technology, you
            can never just assume it works without testing, so this is where the
            fun began.
          </p>

          <p>
            To test our shield board, I got the opportunity to help create a
            testing library and framework to test everything we wanted to test.
            The testing library is designed to hold all the necessary functions
            needed to properly run both the PSU and the DMM. Since these devices
            require their own specialized inputs, it was a hassle having to
            consistently perform a 'control + f' to hopefully find the correct
            commands.{" "}
            <span className="code">DMM.write(':FUNCtion:CURRent:DC')</span> and
            <span className="code">DMM.query(':MEASure:VOLTage:DC?')</span> are
            both instances of the types of commands required for setting the
            input function and the measurement we are trying to record with the
            DMM. Instead, I created functions that, depending on the user input
            as a global variable, will instantly affect every instance. As an
            example, most commands when setting the PSU require the current
            channel to be assigned, specifically when turning the PSU on, off,
            or setting the voltage and current:{" "}
            <span className="code">supply.write(':APPL CH1,5,0.2')</span>, where
            5 is the input for 5V and 0.2 is for 0.2 A. However, there are
            multiple instances in the scripts where that would need to be
            changed. Let's be honest, that creates room for user error and
            confusion when trying to debug why the script isn't running
            correctly. By only having to set one variable, this can avoid those
            errors and allow for more rapid testing with different values. I've
            also created a way for users to test Voltage versus Voltage, Voltage
            versus Current, Current versus Voltage, and Current versus Current.
            But why test Voltage versus Voltage or Current versus Current? This
            leads back to the LDOs. If we are providing an input voltage of 5V,
            we need to ensure that the output of the second LDO is actually
            1.8V.
          </p>

          <p>
            There is also one huge benefit with creating the testing library and
            keeping the main script users run separate: the run script is 10
            lines of code, besides comments explaining the inputs whereas the
            library is over 500 lines of code, making editing a nightmare if the
            scripts were combined. As of right now, our testing library only
            contains the functions for the PSU and the DMM, but as our equipment
            becomes more sophisticated and further testing is required, the team
            will need to use both the function generator and the oscilloscope,
            both of which have their own programming requirements and specific
            commands. While I don't know how much code is needed to run either
            of these devices, I can only imagine how complex our testing script
            would become without having the library.
          </p>

          <p>
            As I am graduating this semester from the Masters of Engineering
            Program in Electrical and Computer Engineering, it is crucial to me
            that I do everything I can to ensure that the future of this project
            team can run smoothly, allowing the next generation of students in
            the System Architecture team to easily perform any test they want to
            run, while also allowing students to readily update their testing
            methodologies. My work this year has been extraordinary and I'm so
            excited to see what the future holds for C2S2.
          </p>
        </div>
      </section>
    </main>
  );
}

export default SystemArchitectureBlogPost;
