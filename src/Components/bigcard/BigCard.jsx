import React,{useState} from 'react'
import './bcard.css'
import Image1 from '../../assets/calendar.png'
import Image2 from '../../assets/archives.png'
import Image3 from '../../assets/test.png'
import Image4 from '../../assets/book-default.png'
import Image5 from '../../assets/flash.png'
import MenuItem from '../../containers/home/MenuItem'
const BigCard = props => {
  const [show, setShow] = useState(false);
  const Close = () => setShow(false);
  const Show = () => setShow(true);
    return (
        <header id="header">
        <div className="intro">
          <div className="overlay">
          

          <img src={Image5} alt="" id="logo-flash"/>
          
         {show && <div className='circle-menu2'>            
                <MenuItem title="Planification" urlImage={Image3} id="item1"/>
               <a href="/biblio"><MenuItem title="Médiathèque" urlImage={Image4} id="item2"/></a> 
                </div>}       




                <div className="intro-text">
                  <h1>Portail Web <br/>Division Instruction <span></span></h1>
                  <p>Ce portail Web est une porte d'entrée commune à un éventail de services centrés sur le domaine de l'instruction et la formation de l'Arme des Transmissions des Forces Armées Royales</p>
                </div>
                
                <button className="btn-svc"  onClick={
                  !show?
                  Show : Close
                  }>Sevices</button>
                
                {show && <div className='circle-menu'>
                
                <MenuItem title="Agenda" urlImage={Image1} id="item1"/>
                <MenuItem title="Archive" urlImage={Image2} id="item2"/>
                </div>}
              
              
              
              
              </div>
            
        </div>
      </header>
    )
}

export default BigCard
