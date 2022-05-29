import React, { Component } from 'react';

import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <img src='https://cdn-icons-png.flaticon.com/512/1596/1596810.png' className="App-logo" alt="logo" />
        <h2><b>Welcome to the Animal Hangman Game</b></h2>
        <h3><b>TikTok Youth Camp 2022</b></h3>
        <h4><b>By Skyler, Wan Ying, Christina, Brandon and Biao</b></h4>
        <h4>Instructions: Click on the alphabets to guess the correct word! Find the correct word within 10 tries to win the game.</h4>
        <div data-video="https://youtu.be/sGH1VffDGEk" data-autoplay="1" data-loop="1" id="youtube-audio"></div>
<script src="https://www.youtube.com/iframe_api"></script>
<script src="https://cdn.rawgit.com/labnol/files/master/yt.js"></script>
      </div>
    );
  }
}

export default AppHeader;
