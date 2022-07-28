import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${ now.getFullYear()}-${ now.getMonth() + 1 }`
}

export const filterListByMonth = ( list: Item[], date: string ): Item[] => {
  let newList: Item[] = [];
  let [ year, month ] = date.split('-');

  for( let i in list ) {
    if(
      list[i].date.getFullYear() === parseInt( year ) &&
      ( list[i].date.getMonth() + 1 ) === parseInt( month )
    ) {
      newList.push( list[i] );
    }
  }

  return newList;
}

export const formtDate = ( date: Date ): string => {
  let year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDay();

  return `${ addZeroToDate( day ) }/${ addZeroToDate( month ) }/${ year }`;
}

const addZeroToDate = ( n: number ) => ( n < 10 ) ? `0${ n }` : `${ n }`

export const formtCurrentMonth = ( currentMonth: string ): string => {
  let [ year, month ] = currentMonth.split('-');
  const months = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return `${ months[ parseInt( month ) - 1 ] } de ${ year }`
}
