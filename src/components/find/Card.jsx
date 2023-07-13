import React from 'react'
import styles from './Find.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
        <img src={props.image} alt='/'/>
        <p>{props.make}</p>
    </div>
  )
}

export default Card