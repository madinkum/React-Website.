import React from "react";

const About = () => {
  return (
    <div>
      <div className="about-me">
        <div className="info">
          <h1>About Me</h1>
          <p>
            Madinku Mabala is a beginner Web Developer and a qualified
            Agricultural Economist. She is still in the process of learning some
            major skills in programming that will help her become a good Web
            Developer.
          </p>

          <p>
            If someone told her in the past 6 years that she will be doing what
            she is doing now, She wouldn't have believed them. Her interest in
            programming started in 2023 and so far she can say she loves what
            she is doing.
          </p>

          <p>
            It was a challenging transition yet the best decision she has ever
            made regarding her career. She is glad she made the decision.
          </p>

          <p>
            In her free time she likes to cook, bake and spend time with her
            loved ones.
          </p>
          <p>
            {" "}
            Get in touch with her on{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/madinku-mabala-4337ba203?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUCXWtio%2BQnquG%2Fxyqgr0PQ%3D%3D"
            >
              {" "}
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
