import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Item } from './types/Item'
import { items } from './data/items'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { getCurrentMonth, filterListByMonth } from './helpers/dataFilter'
import Table from './components/Table/Table'
import Infor from './components/Infor/Infor'
import Form from './components/Forms/Form/Form'

const App = () => {
  const [ list, setList ] = React.useState( items );
  const [ filteredList, setFilteredList ] = React.useState< Item[] >( [] )
  const [ currentMonth, setCurrentMonth ] = React.useState( getCurrentMonth() )
  const [ income, setIncome ] = React.useState( 0 )
  const [ expense, setExpense ] = React.useState( 0 )

  React.useEffect(() => {
    setFilteredList( filterListByMonth( list, currentMonth ) )
  }, [ list, currentMonth ])

  React.useEffect(() => {
    let incomeCount = 0, expenseCount = 0;

    for( let i in filteredList ) {
      if( categories[ filteredList[i].category ].expense ) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }

    setIncome( incomeCount )
    setExpense( expenseCount )
  }, [ filteredList ])

  const handleMonthChange = ( newMonth: string ) => {
    setCurrentMonth( newMonth );
  }

  const handleAddItem = ( item: Item ) => {
    let newList = [ ...list ];
    newList.push( item );
    setList( newList );
  }

  return (
    <div>
      <Header />
      <main className='main'>
        <Infor
          currentMonth={ currentMonth }
          onManthChange={ handleMonthChange }
          income={ income }
          expense={ expense }
        />
        <Form onAdd={ handleAddItem } />
        <Table list={ filteredList } />
      </main>
    </div>
  )
}

export default App
