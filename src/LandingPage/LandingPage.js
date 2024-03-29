import React, { Component } from "react";
import {Redirect} from "react-router-dom"; 

import DatGui, { DatNumber, DatSelect, DatButton } from "react-dat-gui";

import FluidAnimation from "react-fluid-animation";
import random from "random";

import Typing from "react-typing-animation"; 

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};

const redirectRoute = "/tapestry"; 
export default class LandingPage extends Component {
  state = {
    config: {
      ...defaultConfig
    },
    redirect: false
  };

  componentDidMount() {
    this._reset();
  }

  redirectOn = () => {
    this.setState({redirect: true});
  }
  
  render() {
    const { config } = this.state;

    if (this.state.redirect) {
      return <Redirect to={redirectRoute} />
    }

    return (
      <div
        style={{
          height: "100vh"
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: "none"
          }}
        >
          <Typing hideCursor={true} onFinishedTyping={this.redirectOn}>
            <div>
              <Typing.Delay ms={2000} />
              <h1
                style={{
                  fontSize: "3em",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
                }}
              >
                Hey Mr Moul....
              </h1>
              
              <Typing.Delay ms={1000} />
              
              <h1 
                style={{
                  fontSize: "3em",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
                }}>
                You might be thinking, what should I do now?
              </h1>

              <Typing.Delay ms={1000} />

              <h1
                style={{
                  fontSize: "3em",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
                }}>
                Enjoy the Experience.....
              </h1>
              
              <Typing.Delay ms={1000} />

            </div> 
          </Typing>

          
          
        </div>

        {/* <DatGui data={config} onUpdate={this._onUpdate}>
          <DatButton label="Reset Config" onClick={this._onReset} />
        </DatGui> */}
      </div>
    );
  }

  _animationRef = ref => {
    this._animation = ref;
    this._reset();
  };

  _onUpdate = config => {
    this.setState({ config });
  };

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
  };

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
  };

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  }
}
