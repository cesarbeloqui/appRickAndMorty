import React from 'react';
import Card from '../Card/Card';
import style from "./Cards.module.css";


export default function Cards(props) {
   const characters = props.characters;
   const onClose = props.onClose

   return (
     <div className={style.container}>
       {characters.map(
        (character) => (
         <Card
           id={character.id}
           name={character.name}
           status={character.status}
           species={character.species}
           gender={character.gender}
           origin={character.origin}
           image={character.image}
           onClose={onClose}
         />
       )
       )
       }
     </div>
   );
}
