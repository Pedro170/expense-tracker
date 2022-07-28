import React from 'react'
import styles from './Input.module.css'

type Props = {
  id?: string;
  type?: string;
  label?: string;
  value?: string | number;
  onChange?: (value: any) => void;
}

const Input = ({ id, type='text', label, value, onChange }: Props) => {
  return (
    <label htmlFor={ id } className={ styles.label }>
      <span>{ label }</span>
      <input
        id={ id }
        type={ type }
        value={ value }
        className={ styles.input }
        onChange={ onChange }
      />
    </label>
  )
}

export default Input
