import React from "react";
import image1 from "./imgs/ChippingAwayAtChallenges/image1.png";
import image2 from "./imgs/ChippingAwayAtChallenges/image2.png";

function ChippingAwayAtChallenges() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Chipping Away at Challenges: Drafting a Roadmap</h1>
            <h2>Abigail Varghese and Adele Thompson</h2>
            <h2 className="underline">November 19th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            As part of C2S2's mission, we aim to design a proof-of-concept chip
            to address a current challenge. Since last spring, C2S2 has been
            partnered with a Ph.D. candidate at the Cornell Lab of Ornithology.
            From meeting with our Campus Partner, we learned more about his main
            challenges while using tags for his research. The primary concern
            has been the battery life of his current tags, as seen below, which
            last roughly twenty-four hours and decays after each deployment. Due
            to short battery life, he frequently has to recapture the Scrub Jays
            to collect data stored on the tag and to retag birds to collect more
            data. This retagging process may introduce biases to data collected
            as the luring process and human interaction may alter Scrub Jaysl
            natural behavior. C2S2 is focused on designing a low-power IoT chip
            that can extend the deployment period of a tag. By extending the
            deployment period of a tag, the team will aid in mitigating human
            interaction with birds during research studies, thus reducing human
            influence on data collected and reducing stress on birds being
            tagged.
          </p>

          <figure>
            <img src={image1} />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              Our Campus Partner's Current Tag
            </figcaption>
          </figure>

          <p>
            To begin the development of a proof-of-concept chip, we've been
            working with other members of Project Management and members of
            System Architecture to draft a roadmap to keep the team informed
            about tasks and address any questions they might have regarding our
            campus partner's main challenges. The primary focus for our subteams
            revolves around two main projects: creating a more battery-efficient
            design and incorporating audio sample collection alongside
            acceleration data. To begin the road mapping process, the Project
            Management subteam first needed to develop a stronger understanding
            of the technical work of subteams. Although intended to inform
            alumni and sponsors of the team's progress, we started to build our
            understanding and documented what we learned of more technical
            aspects of projects for roadmapping by working on the team's
            newsletter.
          </p>

          <p>
            While working on the newsletter, members of Project Management
            frequently sat in work sessions and meetings of other subteams and
            spent more time reaching out to more technical subteams to learn
            more about what they previously were able to accomplish as well as
            their current progress and goals for the semester. In our
            newsletter, we began to gather information from each subteam about
            their projects from last year. Based on our understanding of what
            the subteam had worked on as well as official goals to accomplish
            for the campus partner, we helped create a flow chart, as seen
            below, to determine how each subteam should connect within the
            design of the chip.
          </p>

          <figure>
            <img src={image2} />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              First Draft of a Roadmap Flow Chart
            </figcaption>
          </figure>

          <p>
            To create the flow chart, we started by initially thinking of how to
            address the main challenge and need of our campus partner to collect
            audio recordings and acceleration data. These prompted the first
            inputs to be decided as both a microphone to collect audio samples
            and an inertial measurement unit (IMU) to measure acceleration. The
            data collected from the IMU would be input into the Software
            subteam's position estimator, an algorithm designed during the
            spring semester, to determine the relative position of the tag. This
            relative position data would need to be offloaded so that a
            researcher would be able to relocate the tag, however, the final
            project of what offloading was left open-ended until the Project
            Management subteam could learn more about feasible and low power
            methods that could be used.
          </p>

          <p>
            Following the input of the microphone, we planned for the Analog
            subteam to work on an amplifier to amplify the sound signal as last
            semester they taped out a two-stage operational amplifier with
            Miller compensation. This semester the Analog subteam has been
            working on an Analog-to-Digitial Converter (ADC), which we included
            in our roadmap after the amplifier. As the name suggests, this ADC
            would convert the analog signal to a digital signal, this digital
            signal would then be used in the Digital subteam's Fast Fourier
            Transform (FFT) to convert sound signals from the time domain to the
            frequency domain, thus allowing for spectral analysis of different
            frequency components. From the FFT, we move towards a filter, also
            to be designed by the Digital Subteam, which would be used to
            isolate specific frequency bands or remove unwanted noise. This
            filtered sound data, would then be stored in Flash Memory on the tag
            for a researcher to save and use for additional data processing.
          </p>

          <p>
            To address one of the main challenges of extending the deployment
            period of the tag, we also included CLK, an internal clock signal,
            as an input. This internal clock signal, with software developed by
            the Software subteam, would aid in providing synchronization of
            sound and acceleration data, as it would allow the researcher to
            relate both the sound and acceleration to a certain time. Time
            indication would also be used as an input into software, which would
            be developed by the software subteam, for scheduling when to collect
            samples. This scheduling would aid in extending deployment periods
            of tags, as currently once the tag turns on, it remains on and
            continuously collects data until it runs out of battery. From our
            Campus Partner, we learned that it would be ideal for the tag to be
            scheduled to collect samples approximately four hours after sunrise,
            as this is when Scrub Jays are most active. We're also considering a
            solution by introducing a "sleep mode" for the chip during the
            birds' inactive periods, aiming to extend battery life and prolong
            the time before tag replacement is necessary. Additionally, our
            partner has requested the tag to capture audio samples from Scrub
            Jays, requiring the integration of a microphone and accelerometer to
            record both sound and bird accelerations over time. The time when
            scheduled data was collected would similarly need to be stored in
            flash memory to relate sound and acceleration data collected to time
            and offloaded to assist the research in relocating the tag.
          </p>

          <p>
            After forming this general draft of the roadmap, Abigail was able to
            help present the roadmap with members of System Architecture during
            the Mid-Semester Design Reviews to get feedback from the team.
            Following our recent Mid-Semester Design Reviews, we discovered
            misconceptions about the challenges of our Campus Partner. To
            address these misconceptions and ensure that everyone on the team
            had access to research collected by the Project Management subteam
            from conversations with our Campus Partner, Abigail crafted a
            document to tackle common questions and provide a more comprehensive
            understanding of our campus partner's needs. We're introducing a
            dedicated Slack channel for roadmapping discussions, to not only
            facilitate streamlined communication but also so that other subteams
            and members can have access to information shared by Project
            Management to answer a question that others may also have.
          </p>

          <p>
            Similarly, from feedback from the team and learning more recent
            updates on projects from other subteams, we are currently working on
            updating the roadmap. Some updates we are working on updating our
            roadmap to reflect are alterations in subteam tasks, such as
            including Software's work on spectrography and Digital's work on
            creating a classNameifier, and including a Particle Photon board for
            offloading data. Additionally, we will continue to expand on this
            current draft of the roadmap to account for more complexity of how
            some projects may have the same inputs or rely on a different
            project's output by adding in levels to organize the roadmap into
            phases. Furthermore, we will be creating edits as we continue to
            meet both with subteams to learn more about their progress and our
            Campus Partner to learn more specific details regarding Scrub Jays'
            behavior and their vocal calls. Although our roadmap is still a work
            in progress, our roadmap update plans aim to enhance clarity,
            promote efficient communication, and ensure everyone is aligned as
            we move forward.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ChippingAwayAtChallenges;
