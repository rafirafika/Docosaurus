/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const translate = require('../../server/translate.js').translate;
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container>
          <div className="showcaseSection" style={{textAlign:'justify'}}>
              <h1><translate>About</translate></h1>
              <p style={{fontSize:'1.25rem'}}>
              <translate>Get to know more about the team maintaining React Bootstrap. 
                Learn a little history of how, why and when the project started and how you can be a part of it.
              </translate>
              </p>
              <h1><translate>Team</translate></h1>
              <p>
                <translate>React Bootstrap is maintained by</translate>
                &nbsp;
                <a href='https://github.com/orgs/react-bootstrap/people' target='_blank' style={{color:'blue'}}>
                <translate> a team of developers </translate>                
                </a>
                &nbsp;
                <translate>
                  on Github. We have a growing team and if you are interested in re-building 
                  the most popular front-end framework with React we would love to hear from you.
                </translate>
              </p>
              <h1><translate>Contributors</translate></h1>
              <p>
                <translate>
                  We welcome community support with both feature and bug reporting. 
                  Please don't hesitate to jump in. Join our growing list of 
                </translate>
                &nbsp;
                <a href='https://github.com/react-bootstrap/react-bootstrap/graphs/contributors'
                  target='_blank' style={{color:'blue'}}
                ><translate>contributors.</translate>
                </a>
              </p>
              <h1><translate>Get Involved</translate></h1>
              <p>
                <translate>Get involved with React Bootstrap by</translate>
                &nbsp;
                <a href='https://github.com/react-bootstrap/react-bootstrap/issues/new'
                  target='_blank' style={{color:'blue'}}> 
                  <translate> opening an issue </translate>
                  </a>
                  &nbsp; 
                  <translate> or submitting a pull request. See our </translate>
                  &nbsp;
                  <a href='https://github.com/react-bootstrap/react-bootstrap/blob/master/CONTRIBUTING.md'
                  target='_blank' style={{color:'blue'}}> <translate> contributing guidelines here. </translate> 
                  &nbsp;
                  </a>
                </p>
              <h1><translate>External Links</translate></h1>
              <p>
                <ul>
                  <li>
                    <a href='https://getbootstrap.com/'
                      target='_blank' style={{color:'blue'}}>Bootstrap</a>
                  </li>
                  <li>
                    <a href='https://reactjs.org/'
                      target='_blank' style={{color:'blue'}}>React</a>
                  </li>
                  <li>
                    <a href='https://github.com/react-bootstrap/react-router-bootstrap'
                      target='_blank' style={{color:'blue'}}>React Router Bootstrap</a>
                  </li>
                  <li>
                    <a href='https://github.com/Hermanya/awesome-react-bootstrap-components'
                      target='_blank' style={{color:'blue'}}>Awesome React Bootstrap Components</a>
                  </li>
                  <li>
                    <a href='https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic'
                      target='_blank' style={{color:'blue'}}>React Bootstrap CodeSandbox examples</a>
                  </li>                 
                </ul>
              </p>
          </div>
          {/* <div className="logos">{showcase}</div>           */}
            
        </Container>
      </div>
    );
  }
}

module.exports = Users;
