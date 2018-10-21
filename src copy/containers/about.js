import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class About extends Component {
  render() {
    if (this.props.section == 'about') {
      return (
        <section className="portfolio__about">
          <p>I have a bunch of skills.</p>
          <p>I created my first website in 2001 when I was 11 years old. It was a Pokémon RPG. I used the tools available to me (MS Paint and the ability to google "HTML Tables") and the rest was history!</p>
          <p>While I'm comfortable working on my own, I also love teaching and contributing alongside teammates.</p>
          <p>I'm lucky to have worked with some fantastic people. Projects that I've been part of have been featured in Drupal.org case studies.</p>
          <p>I danced ballet growing up and returned to the art as an adult. I enjoy staging, choreographing, and teaching (particularly beginner ballet!)</p>
          <p>Knitting is a new hobby for me! It's basically guaranteed that any moment my hands are idle, they are holding a pair of knitting needles.</p>
          <p>Maurice is five years old. He knows a few tricks (sit and shake!), loves to play fetch, and is a serious cuddle monster.</p>
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  };
}
