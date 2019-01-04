import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class About extends Component {
  render() {
      return (
        <section className="portfolio__about">
          <div className="portfolio__about__images">
            <div className="portfolio__about__image__image-wrapper">
              <img src="/portfolio/knitting.jpg" />
              <span>A mini holiday stocking I knitted over the holidays</span>
            </div>
            <div className="portfolio__about__image__image-wrapper">
              <img src="/portfolio/ballet.jpg" />
              <span>Performing <em>Six Princesses (Pas de Six)</em> in Swan Lake, University Ballet of Chicago</span>
            </div>
            <div className="portfolio__about__image__image-wrapper">
              <img src="/portfolio/maurice.jpg" />
              <span>Maurice, who took this photo himself</span>
            </div>
          </div>
          <div class="portfolio__about__text">
            <h3>Background</h3>
            <p>I created my first website in 2001 when I was 11 years old. It was a Pokémon RPG. I used the tools available to me (MS Paint and the ability to google "HTML Tables") and the rest was history!</p>
            <p>I started my professional career in web and Drupal development in 2012, and I'm lucky to have worked with some fantastic people. Projects that I've been part of have been featured in Drupal.org case studies and Midcamp talks.</p>
            <h3>Hobbies and interests</h3>
            <p>I danced ballet growing up and returned to the art as an adult. I enjoy staging, choreographing, and teaching (particularly beginner ballet!)</p>
            <p>I'm also:
            <ul>
              <li>A gamer (talk to me about Zelda. Or Skyrim. Or Minecraft, or Subnautica. Or The Sims for that matter.)</li>
              <li>A creative writer (NaNoWriMo fails: 17)</li>
              <li>A singer (I love singing in a cappella groups especially)</li>
            </ul>
            </p>
            <p>Knitting is a new hobby for me! It's basically guaranteed that any moment my hands are idle, they are holding a pair of knitting needles.</p>
            <h3>Meow.</h3>
            <p>I have a pet cat, Maurice. Maurice is five years old. He knows a few tricks (sit and shake!), loves to play fetch, and is a serious cuddle monster.</p>
          </div>
        </section>
      );
    }
  };
