import React from 'react'
import styles from './Input.module.css'

type Props = {
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
}

const Input = ({ id, type='text', label, placeholder }: Props) => {

  return (
    <label htmlFor={ id } className={ styles.label }>
      <span>{ label }</span>
      <input
        id={ id }
        type={ type }
        className={ styles.input }
        placeholder={ placeholder }
      />
    </label>
  )
}

export default Input
