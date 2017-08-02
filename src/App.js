import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
            <span className="fa fa-camera-retro"></span>+974  4442 278 1  +974  4441 7599
            P.O Box 92, Doha, Qatar.
        </div>
        <div className="top-bar-right">
          <div className="soc-list">
            <a className="fa fa-facebook" href="">f</a>
            <a className="fa fa-google-plus" href="">g</a>
            <a className="fa fa-linkedin" href="">l</a>
            <a className="fa fa-twitter" href="">t</a>
          </div>
        </div>
      </div>
      <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
        <div className="orbit-wrapper">
          <div className="orbit-controls">
            <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
            <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
          </div>
          <ul className="orbit-container">
            <li className="is-active orbit-slide">
              <figure className="orbit-figure">
                <img className="orbit-image" src="http://placehold.it/1200x600/999?text=Slide-1" alt="Space">
                <figcaption className="orbit-caption">Space, the final frontier.</figcaption>
              </figure>
            </li>
            <li className="orbit-slide">
              <figure className="orbit-figure">
                <img className="orbit-image" src="http://placehold.it/1200x600/888?text=Slide-2" alt="Space">
                <figcaption className="orbit-caption">Lets Rocket!</figcaption>
              </figure>
            </li>
            <li className="orbit-slide">
              <figure className="orbit-figure">
                <img className="orbit-image" src="http://placehold.it/1200x600/777?text=Slide-3" alt="Space">
                <figcaption className="orbit-caption">Encapsulating</figcaption>
              </figure>
            </li>
            <li className="orbit-slide">
              <figure className="orbit-figure">
                <img className="orbit-image" src="http://placehold.it/1200x600/666&text=Slide-4" alt="Space">
                <figcaption className="orbit-caption">Outta This World</figcaption>
              </figure>
            </li>
          </ul>
        </div>
        <nav className="orbit-bullets">
          <button className="is-active" data-slide="0"><span className="show-for-sr">First slide details.</span><span className="show-for-sr">Current Slide</span></button>
          <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
          <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
          <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>
        </nav>
      </div>
    );
  }
}

export default App;
