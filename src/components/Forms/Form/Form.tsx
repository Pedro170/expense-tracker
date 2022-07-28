import React from 'react'
import { Item } from '../../../types/Item'
import Input from '../Input/Input'
import styles from './Form.module.css'

type Props = {
  onAdd: (item: Item) => void;
}

const Form = ( { onAdd }: Props ) => {

  const handleAddEvent = ( event: any ) => {
    event.preventDefault();
    let newItem: Item = {
      date: new Date(2022, 9, 18),
      category: 'salary',
      title: 'Freelance',
      value: 2.500
    };

    onAdd( newItem )
  }

  return (
    <form className={ styles.form }>
      <Input label='Data' id='data' type='date' />
      <Input label='Categoria' id='categoria' />
      <Input label='Título' id='titulo' />
      <Input label='Valor' id='titulo' type='number' placeholder='0' />
      <button onClick={ handleAddEvent } className={ styles.button } >Adicionar</button>
    </form>
  )
}

export default Form
