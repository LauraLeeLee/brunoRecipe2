import React from 'react';
import Cacume from '../images/patrica_montecacume.jpg';
import Patrica1 from '../images/patrica1.jpg';
import Patrica2 from '../images/patrica2.jpg';
import Patrica from '../images/patrica.jpg';

const AboutImages = props => {
  return(
    <div>
      <section className="photos_section">
        <div className="photobox1">
          <img className="small" src={Cacume} alt="Patrica from Monte Cacume"/>
          <img  className="small" src={Patrica1} alt="view of Patrica"/>
        </div>
        <div className="photobox2">
          <img className="small" src={Patrica2} alt="view of Patrica"/>
          <img className="small" src={Patrica} alt="view of Patrica"/>
        </div>
      </section>
    </div>
  );
}

export default AboutImages
