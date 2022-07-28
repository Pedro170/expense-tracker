import React from 'react'
import { Item } from '../../types/Item'
import TableItem from '../TableItem/TableItem'
import styles from './Table.module.css'

type Props = {
  list: Item[]
}

const Table = ( { list }: Props ) => {
  return (
    <table className={ styles.table }>
      <thead>
        <tr>
          <th>Data</th>
          <th>Categoria</th>
          <th>Título</th>
          <th>Valor</th>
        </tr>
      </thead>

      <tbody>
        {list.map(( item, idx) => (
          <TableItem key={ idx } item={ item } />
        ))}
      </tbody>
    </table>
  )
}

export default Table
