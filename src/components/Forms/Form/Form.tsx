import React from 'react'
import styles from './Form.module.css'
import Input from '../Input/Input'
import { categories } from '../../../data/categories'
import { Item } from '../../../types/Item'
import { newDateAjusted } from '../../../helpers/dataFilter'

type Props = {
  onAdd: (item: Item) => void;
}

const Form = ( { onAdd }: Props ) => {
  const [ date, setDate ] = React.useState('')
  const [ category, setCategory ] = React.useState('')
  const [ title, setTitle ] = React.useState('')
  const [ valor, setValor ] = React.useState( 0 )

  let categoryKeys: string[] = Object.keys( categories );

  const handleAddEvent = ( event: any ) => {
    event.preventDefault();
    let errors: string[] = [];

    if( isNaN( new Date( date ).getTime()) ) errors.push('Data Inválida');
    if( !categoryKeys.includes( category ) ) errors.push('Categoria Inválida');
    if( title === '' ) errors.push('Preencha o campo de título');
    if( valor <= 0 ) errors.push('Valor Inválida');

    if( errors.length ) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAjusted( date ),
        category: category,
        title: title,
        value: valor,
      })
      clearFields();
    }
  }

  const clearFields = () => {
    setDate('');
    setCategory('');
    setTitle('');
    setValor(0)
  }

  return (
    <form className={ styles.form }>
      <Input
        id='data'
        type='date'
        label='Data'
        value={ date }
        onChange={({ target }) => setDate( target.value )}
      />

      <div>
        <label htmlFor="categories">Categoria</label>
        <select id='categories' value={ category } onChange={({ target }) => setCategory( target.value )}>
          <>
            <option disabled>Selecione um Categoria</option>
            { categoryKeys.map(( key, idx ) => (
              <option key={ idx } value={ key } >
                { categories[key].title }
              </option>
            ))}
          </>
        </select>
      </div>

      <Input
        id='titulo'
        label='Título'
        value={ title }
        onChange={({ target }) => setTitle( target.value )}
      />

      <Input
        id='valor'
        label='Valor'
        type='number'
        value={ valor }
        onChange={({ target }) => setValor( target.value )}
      />
      <button onClick={ handleAddEvent } className={ styles.button } >Adicionar</button>
    </form>
  )
}

export default Form
