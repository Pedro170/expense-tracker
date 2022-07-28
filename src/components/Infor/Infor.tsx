import React from 'react'
import styles from './Infor.module.css'
import IconAwesome from '../Icons/FontAwesome'
import { formtCurrentMonth } from '../../helpers/dataFilter'

type Props = {
  currentMonth: string;
  income: number;
  expense: number;
  onManthChange: ( newMonth: string  ) => void;
}

const Infor = ({ currentMonth, income, expense, onManthChange }: Props) => {

  const handlePrevMonth = () => {
    let [ year, month ] = currentMonth.split( '-' )
    let currentDate = new Date(parseInt( year ), parseInt( month) - 1, 1)
    currentDate.setMonth( currentDate.getMonth() - 1)
    onManthChange(`${ currentDate.getFullYear() }-${ currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [ year, month ] = currentMonth.split( '-' )
    let currentDate = new Date(parseInt( year ), parseInt( month) - 1, 1)
    currentDate.setMonth( currentDate.getMonth() + 1)
    onManthChange(`${ currentDate.getFullYear() }-${ currentDate.getMonth() + 1}`)
  }

  return (
    <section className={ styles.infor }>
      <div className={ styles.month }>
        <button onClick={ handlePrevMonth }>
          <IconAwesome icon='arrow-alt-circle-left' />
        </button>

        { formtCurrentMonth( currentMonth ) }

        <button onClick={ handleNextMonth }>
          <IconAwesome icon='arrow-alt-circle-right' />
        </button>
      </div>

      <div className={ styles.resume }>
        <div className={ styles.rdb }>
          <p>Receita</p>
          <span>R$ { income }</span>
        </div>

        <div className={ styles.rdb }>
          <p>Despesa</p>
          <span>R$ { expense }</span>
        </div>

        <div className={ styles.rdb }>
          <p>Balanço</p>
          <span style={{color: `${(income - expense < 0) ? '#f00' : '#0f0'}`}}>
            R$ { (income - expense) }
          </span>
        </div>
      </div>
    </section>
  )
}

export default Infor
