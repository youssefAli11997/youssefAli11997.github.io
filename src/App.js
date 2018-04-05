import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Links from './Components/Links';
import JSON_BIO from './Components/JSON_BIO';

import './App.css';
import myimage from './img/myimage.jpg';

class App extends Component {
  static defaultProps = {
    imageUrl: myimage
  };

  render() {
    document.body.style = 'background: #0277BD;';
    return (
      <div className="App">
        <header className="App-header">
          <Grid>
            <Row>
              <Col sm={4} className="My-card">
                <img src={this.props.imageUrl} className="My-img" alt="header" />
                <h1 className="My-name">Youssef Ali</h1>
                <p className="Short-bio">
                  Undergrad Software Engineer
                </p>
                <hr />
                
                <Links />
              </Col>

              <Col sm={8}>
                <div>

                  <JSON_BIO />

                </div>
              </Col>
            </Row>
          </Grid>
        </header>
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
