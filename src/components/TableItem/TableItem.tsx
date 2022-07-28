import React from 'react'
import styles from './TableItem.module.css'
import { Item } from '../../types/Item'
import { formtDate } from '../../helpers/dataFilter'
import { categories } from '../../data/categories'


type Props = {
  item: Item
}

const TableItem = ({ item }: Props) => {
  return (
    <tr className={ styles.tr }>
      <td>{ formtDate( item.date ) }</td>
      <td>
        <div
          style={{ background: `${categories[ item.category ].color}`}}
          className={ styles.background }
        >
          { categories[ item.category ].title }
        </div>
      </td>
      <td>{ item.title }</td>
      <td>
        <div style={{ color: `${categories[ item.category ].expense ? '#f00' : '#0f0'}`}}>
          R$ { item.value }
        </div>
      </td>
    </tr>
  )
}

export default TableItem
