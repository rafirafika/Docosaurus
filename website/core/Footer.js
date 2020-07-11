/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    const {siteConfig, language = ''} = this.props;
    // const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;
    
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap" style={{marginBottom:'0px', maxWidth:'350px', marginLeft:'50px'}}>          
          <div>                
            <a href='https://github.com/react-bootstrap/react-bootstrap' target="_blank">Github</a>            
          </div>
          <div>
              <a
                href="https://discord.gg/0ZcbPKXt5bXLs9XK"
                target="_blank"
                rel="noreferrer noopener">
                Discord
              </a>
          </div>
          <div>
            <a 
              href='https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic' 
              target="_blank">
              Examples
            </a>            
          </div>
          <div>
            <a href={this.pageUrl('about.html',language)}>About</a>            
          </div>
        </section>
        <section className="copyright" style={{maxWidth:'1000px', marginLeft:'50px', textAlign:'left'}}>{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
