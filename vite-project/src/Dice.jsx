import { useState } from 'react';
import './Dice.css';
import img1 from './dice-1-line.png';
import img2 from './dice-2-line.png';
import img3 from './dice-3-line.png';
import img4 from './dice-4-line.png';
import img5 from './dice-5-line.png';
import img6 from './dice-6-line.png';

const Dice = () => {
  const [diceImg1, setDiceImg1] = useState(img1);
  const [diceImg2, setDiceImg2] = useState(img6);

  const changeDice1 = () => {
    const d = [img1, img2, img3, img4, img5, img6];
    setDiceImg1(d[Math.floor(Math.random() * d.length)]);
  };

  const changeDice2 = () => {
    const d = [img1, img2, img3, img4, img5, img6];
    setDiceImg2(d[Math.floor(Math.random() * d.length)]);
  };

  return (
    <div>
      <img src={diceImg1} alt="" onClick={changeDice1} className="img1"/>
      <img src={diceImg2} alt="" onClick={changeDice2} className="img2" />
    </div>
  );
};

export default Dice;