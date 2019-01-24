import React from 'react';
// import Stemma from '../images/stemma-patrica.gif';
// import Bruno from '../images/bruno.jpg';

// class AboutHeader extends Component {
//   render(){
//     return(
//       <div>
//       <header className="about-header">
//         <img className="bruno" src={Bruno} alt="Bruno"/>
//         <h1 className="about_title">About Bruno</h1>
//         <img className="stemma" src={Stemma} alt="stemma for Patrica" width="100px"/>
//       </header>
//      </div>
//     );
//   }
// }

const AboutHeader = props => {
  return(
    <React.Fragment>
      <header className="about-header">
        <h1 className="about_title">About Bruno</h1>
      </header>
    </React.Fragment>
  );
}

export default AboutHeader;
