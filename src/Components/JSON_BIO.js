import React, { Component } from 'react';
import 'prismjs';
import 'react-prism';
import loadLanguages from 'prismjs/components/index.js';
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

class JSON_BIO extends Component {
  static defaultProps = {
  };

  render() {
  	loadLanguages(['json']);

    return (
      <div className="JSON_BIO">
      	<pre className="line-numbers">
			<code className="language-json">
			{`{
	"name": "youssef ali hassan",
	"birthdate": "14/06/1997",
	"education": {
			"major" : "computer and systems engineering",
			"school": "faculty of engineering, alexandria university",
			"start" : "sept. 2016",
			"end"   : "june 2020"
	},
	"interested in": ["problem solving", "algorithms & data structures",
					  "artificial intelligence", "android development",
					  "web development", "game development"],
	"familiar with": {
		"languages": ["java", "c/c++", "javascript", "python", "php"],
		"frameworks and libraries": ["javafx - java", "swing - java",
									 "bootstrap - css", "jquery - js",
									 "react - js"]
	},
	"my sparetime killers": ["movies", "reading"]
}`}
			</code>
        </pre>
      </div>
    );
  }
}

export default JSON_BIO;
