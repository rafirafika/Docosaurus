/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const translate = require('../../server/translate.js').translate;
const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer" 
        style={{
          backgroundColor:'#2C2C2C', 
          backgroundImage:`url(${baseUrl}img/RBoost2.svg)`,
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center',
          height:'450px',
          }}>
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle" 
        style = {{
          color:'#c3c3c3', 
          // width: '500px', 
          // marginLeft: '325px', 
          marginTop: '50px', 
          // textAlign:'left'
        }}
      >
        <span>{props.title}</span>
        <small style={{color:'#fefefe', marginTop:'45px'}}>
        {props.tagline} 
        <br></br>
        <br></br>
        <translate>Rebuilt for React</translate>
        </small>
        <small></small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" style={{borderColor:'#fefefe', color:'#fefefe', width:'190px'}}href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/RBoost2.svg`} /> */}
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('Introduction.html')}><translate>Get Started</translate></Button>
            <Button href={docUrl('Component/Alert.html')}><translate>Component</translate></Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content: <translate>React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.\n\n As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.</translate>,
            title: <translate>Rebuilt with React</translate>,
          },
          {
            content: <translate>Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem\n\nBy relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love.</translate>,
            title: <translate>Bootstrap at its core</translate>,
          },
          {
            content: <translate>The React component model gives us more control over form and function of each component.\n\nEach component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.</translate>,
            title: <translate>Accessible by default</translate>,
          },
        ]}
      </Block>
    );
    
    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />         
        </div>
      </div>
    );
  }
}

module.exports = Index;
