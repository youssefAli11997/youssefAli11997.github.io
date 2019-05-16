import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

import linkedIn from '../svg/if_linkedin_circle_color_107178.svg';
import facebook from '../svg/if_facebook_circle_color_107175.svg';
import github from '../svg/if_Github_1298743.svg';
import twitter from '../svg/if_twitter_circle_294709.svg';
import a2oj from '../img/a2oj.jpg';
import hackerrank from '../img/hackerrank.jpg';
import codeforces from '../img/codeforces.png';
import codefights from '../img/codefights.png';
import angellist from '../img/angellist.png';
import gmail from '../svg/if_gmail_1220340.svg';

class Links extends Component {
  static defaultProps = {
  };

  render() {
    return (
      <div className="Links">
      	<Grid>
      	  <Row>
      	  	<Col sm={2} className="linksCol">
		      <h6>Social Media</h6>
		      <a href="https://www.facebook.com/yossefalihassan" target="_blank"><img src={facebook} className="profIcon" /></a>
		      <a href="https://twitter.com/youssefali6212" target="_blank"><img src={twitter} className="profIcon" /></a>
	      	</Col>
	      	<Col sm={2} className="linksCol">
		      <h6>Job Profiles</h6>
		      <a href="https://www.linkedin.com/in/youssef-ali97/" target="_blank"><img src={linkedIn} className="profIcon" /></a>
		      <a href="https://angel.co/youssef_ali" target="_blank"><img src={angellist} className="profIcon" /></a>
	      	</Col>
	      </Row>

	      <Row>
	      	<Col sm={4} className="linksCol">
		      <h6>Competitive Programming</h6>
		      <a href="https://a2oj.com/profile?Username=Youssef_Ali" target="_blank"><img src={a2oj} className="profIcon" /></a>
		      <a href="https://www.hackerrank.com/Youssef_Ali" target="_blank"><img src={hackerrank} className="profIcon" /></a>
		      <a href="http://codeforces.com/profile/Youssef_Ali" target="_blank"><img src={codeforces} className="profIcon" /></a>
		      <a href="https://codefights.com/profile/youssef_ali" target="_blank"><img src={codefights} className="profIcon" /></a>
	      	</Col>
	      </Row>

	      <Row>
	      	<Col sm={2} className="linksCol">
		      <h6>Open Source</h6>
		      <a href="https://github.com/youssefAli11997" target="_blank"><img src={github} className="profIcon" /></a>
		    </Col>
		    <Col sm={2} className="linksCol"> 
		      <h6>Email</h6>
		      <a href="mailto:youssefali6212@gmail.com" target="_blank"><img src={gmail} className="profIcon" /></a>
      	  	</Col>
      	  </Row>

      	</Grid>
      </div>
    );
  }
}

export default Links;
