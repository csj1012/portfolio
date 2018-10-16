import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
      return (
        <section className="portfolio__resume">
          <div className="portfolio__resume__top">
            <h3>Résumé</h3>
          </div>
          <div className="portfolio__resume__column-left">
            <h4>Career Goal</h4>
            <p>To be an integral part of a team that creates elegant,
            captivating, standards-compliant web and mobile
            experiences; to bring life to both web sites and the
            teams that create them through design, development,
            and innovation.</p>

            <h4>History</h4>
            <h5>American Medical Association</h5>
            <p>
                <span>Software Engineer II, 6/2016 - 7/2018</span>
              <ul>
                <li>Design and develop responsive, accessible, and engaging websites for Web Services’ clients</li>
                <li>Help manage, develop, and support the UChicago Sites template site service</li>
                <li>Led the effort to rework Web Services’ web design process, minimizing both time and cost</li>
              </ul>
            </p>

            <h5>Web Services, University of Chicago IT Services</h5>
            <p>
                <span>Front-End Developer, 12/2015 - 6/2016</span>
                <span>Associate Front-End Developer, 5/2013 - 12/2015 — Chicago, IL</span>
              <ul>
                <li>Design and develop responsive, accessible, and engaging websites for Web Services’ clients</li>
                <li>Help manage, develop, and support the UChicago Sites template site service</li>
                <li>Led the effort to rework Web Services’ web design process, minimizing both time and cost</li>
              </ul>
            </p>

              <h5>University of Chicago IT Services, Project Delivery Contractor,</h5>
              <p>
                <span>TEKsystems 9/2012 - 5/2013 — Chicago, IL</span>
              <ul>
                <li>Developed, coordinated, and documented web application releases</li>
                <li>Designed and implemented a new brand for the department’s SharePoint home page</li>
                <li>Supported AURA and PPM end users</li>
              </ul>
            </p>

            <h5>Spurlock Museum, University of Illinois Urbana-Champaign</h5>
              <p>
                <span>IT Assistant, 9/09 - 8/11 — Champaign, IL</span>
              <ul>
                <li>Designed, developed, and maintained web page and exhibit kiosks</li>
                <li>Tested and documented accessibility and compliance to emerging web standards</li>
                <li>Created documentary video projects to showcase the museum’s achievements and exhibits</li>
              </ul>
            </p>


          </div>
          <div className="portfolio__resume__column-right">
            <h4>Proficiency</h4>
            <h5>
              Languages and Libraries
            </h5>
          <ul>
            <li>HTML, CSS, Javascript/jQuery</li>
            <li>PHP (working knowledge)</li>
            <li>SASS/LESS</li>
          </ul>

          <h5>
            Tools and Frameworks
          </h5>
          <ul>
            <li>Acquia Dev Desktop, MAMP</li>
            <li>Bootstrap, Zen Grids</li>
            <li>Git, Subversion</li>
            <li>Adobe Creative Suite</li>
            <li>Codeigniter PHP framework</li>
          </ul>

          Content Management Systems
          <ul>
            <li>Drupal 6, 7 and 8</li>
            <li>ExpressionEngine</li>
            <li>Microsoft SharePoint</li>
          </ul>

          Other
          <ul>
            <li>Responsive & mobile web development</li>
            <li>Mobile-first design/development</li>
            <li>Process innovation</li>
            <li>Copywriting/editing</li>
          </ul>

          <h4>Education</h4>
          Bachelor of Arts, Communication
          University of Illinois Urbana-Champaign
          2012



          </div>

          <div className="portfolio__resume__bottom">
            <h4>Of Note</h4>
            <p>
              <ul>
                <li>Illinois Rip Chords a Cappella — Webmaster, PR Chair, and senior member of an award-winning allfemale collegiate a cappella group</li>
                <li>Horizon/Wolves of Taiyae — Creator and administrator of a creative writing-based RPG forum spanning 12 years</li>
              </ul>
            </p>
          </div>
        </section>
      );
    }
  };
