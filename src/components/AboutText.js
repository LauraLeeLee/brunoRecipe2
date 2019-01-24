import React from 'react';
import Cacume from '../images/patrica_montecacume.jpg';
import Patrica1 from '../images/patrica1.jpg';
import Patrica2 from '../images/patrica2.jpg';
import Patrica from '../images/patrica.jpg';
import Bruno from '../images/bruno.jpg';

const AboutText = props => {
  return(
  <React.Fragment>
    <main className="about_main">
      <section className="about-me">
        <img className="bruno" src={Bruno} alt="Bruno"/>
        <p>I was born in Patrica (Frosinone) about 1500 feet above the sea level which
         is located just 65 miles south of Rome in Italy. </p>

         <p> We learned from our mother the art of cooking, she was a good cook with
         the skills she learned from her mother. She was in the kitchen all the time
         preparing food, baking bread, cookies and all the goodies. The kitchen is the
         heart of the Italian home, where the members of the family exchange ideas, news
         good or bad.
          <img className="img_right" src={Cacume} alt="Patrica from Monte Cacume"/>
         This is where guests gather and we entertain.
         The kitchen is where the women spent most of their time planning and preparing meals for the family.<br/>
         When we asked our mother to measure the quantity in the preparation of a dish
         she would reply "un pizzico" (pinch)," pieno di mano" (hand full), and "con occhi"
         (with the eyes). She would judge simply by feeling if the mixture was right.</p>

         <p> When a guest came to visit, food was ready in a matter of minutes and my mother always
         said to "mangia mangia" (eat eat).  Food in the Italian family is an expression of love.  She was pushing for more all the time, little more, little more, it is good mangia. </p>

         <img  className="img_left" src={Patrica1} alt="view of Patrica"/>
         <p> Our family makes our own tomato paste, tomato puree, sausages, prociutto, olive oil,
         wine etc. I learned how to cook when I was in my teens. My aunt owned a pizzeria in this
         little town in the Lepini Mountains (Patrica) it was open only in the summer, the tourist
         time. My passion for the restaurant was there all the time. </p>

         <p> I immigrated to the United States- to Michigan when I was 19 years old, with my mother and father.
         We moved in with my uncle, my mother’s brother. He had 3 sons and one was the owner
         of an Italian Restaurant.
                 <img className="img_right" src={Patrica2} alt="view of Patrica"/>
         I went to work with my cousin at his restaurant, Como Pizzeria;
         and learned the business.
         I also worked in the factory (GM), like most of the Italians.
         I worked there for three years.
         During the same time my brother and sister immigrated to the USA.<br/>
         We opened our first restaurant in 1971 and named it the Marina
         Pizzeria Restaurant.</p>

         <p> Now I have my own family, 2 sons, gemelli (twins), a grandson
         and a granddaughter with another on the way! My grandson Caleb tells me he wants
         to be a chef like Emiril. He has books about cooking and his own utensils.<br/>
         For Christmas I built him a stove and refrigerator so he could play chef. </p>

         <img className="img_left" src={Patrica} alt="view of Patrica"/>
         <p> My wife is a good cook but she likes it when I cook all my Italian food.<br/>
         The ingredients are simple, olive oil, garlic, and some are even from
         my own garden, like basil, aromatic herbs vegetable etc. </p>

         <p>Buon Appetito - Bruno </p>
        </section>
      </main>
    </React.Fragment>
  );
}

export default AboutText
