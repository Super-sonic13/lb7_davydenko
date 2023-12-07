import React, { Component } from "react";
import myImage from '../assets/images/sonya.jpg'
class Content extends Component {
   constructor(props) {
     super(props);
     this.state = {
       displayImage: true,
       imageWidth: 500,
       imageHeight: 700,
       isElem1Active: false,
       isElem2Active: false,
     };
   }
 
   addImageDisplay = () => {
      console.log('workingS')
     this.setState((prevState) => ({
       displayImage: prevState.displayImage = true
     }));
   };
   removeImageDisplay = () => {
      console.log('workingS')
     this.setState((prevState) => ({
       displayImage: prevState.displayImage = false
     }));
   };
 
   enlargeImage = () => {
     this.setState((prevState) => ({
       imageWidth: prevState.imageWidth * 1.1,
       imageHeight: prevState.imageHeight * 1.1,
     }));
   };
 
   reduceImage = () => {
     this.setState((prevState) => ({
       imageWidth: prevState.imageWidth * 0.9,
       imageHeight: prevState.imageHeight * 0.9,
     }));
   };
   
   toggleElem1Color = () => {
      this.setState((prevState) => ({
        isElem1Active: !prevState.isElem1Active,
        isElem2Active: false, 
      }));
    };
  
    toggleElem2Color = () => {
      this.setState((prevState) => ({
        isElem1Active: false, 
        isElem2Active: !prevState.isElem2Active,
      }));
    };
   render() {
     const { displayImage, imageWidth, imageHeight } = this.state;
     const { isElem1Active, isElem2Active } = this.state;

     const elem1Class = isElem1Active ? "elem-1-color" : "";
     const elem2Class = isElem2Active ? "elem-2-color" : "";
     return (
       <div>
         <h1>Про мене</h1>
         <h2>Давиденко Софія Олександрівна</h2>
         <p>13.07.2004, Київ</p>
         <p>Спеціалізова школа №307, Київський Політехнічний інститут</p>
 
         <h2 
            className={`clickable-elem1 ${elem1Class}`}
            onClick={this.toggleElem1Color}
         >Мої хобі</h2>
         <ul 
            className={`clickable-elem2 ${elem2Class}`}
            onClick={this.toggleElem2Color}
         >
           <li>Сон</li>
           <li>Малювання</li>
           <li>Драйвінг</li>
         </ul>
 
         <h2>Мої улюблені книги</h2>
         <ol>
           <li>Фінансист</li>
           <li>Американська історія</li>
           <li>Блиск і злидні куртизанок</li>
         </ol>
 
         <h2>Улюблене місто</h2>
         <p>
           Відень - Столиця Австрії, вражає своєю величчю та елегантністю. Вузькі
           вулички, витончені будівлі надають місту неповторний характер. Мистецтво
           та культура пронизують кожен куточок Відня, від величних музеїв до
           виставкових залів. Це місто, де класична архітектура зливається з
           інноваційним поглядом на майбутнє.
         </p>
 
         <h2>Фото міста</h2>
 
         <a href="https://www.wien.info/en" target="_blank" rel="noreferrer">
           <img
             src={myImage}
             alt="Моє улюблене місто"
             className="city-imags"
             style={{
               display: displayImage ? "block" : "none",
               width: `${imageWidth}px`,
               height: `${imageHeight}px`,
             }}
           />
         </a>
         <div className="buttons">
           <button className="add" onClick={this.addImageDisplay}>
             Додати
           </button>
           <button className="enlarge" onClick={this.enlargeImage}>
             Збільшити
           </button>
           <button className="reduce" onClick={this.reduceImage}>
             Зменшити
           </button>
           <button className="remove" onClick={this.removeImageDisplay}>
             Видалити
           </button>
         </div>
       </div>
     );
   }
 }
 
 export default Content;