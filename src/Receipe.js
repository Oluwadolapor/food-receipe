import React from 'react';
import style from './receipe.module.css'

const Recipe = ({title, calories, image,}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p className={style.calories}>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe