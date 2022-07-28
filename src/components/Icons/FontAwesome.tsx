import React from 'react'

interface IIconAwesomeProps {
  icon?: string,
  style?: ' solid ' | ' regular ',
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x',
  color?: string,
  fixedWidth?: boolean
}
const FontAwesome: React.FC<IIconAwesomeProps> = ({ style="solid", icon, color }) => {
  return <i style={{ color: `${ color }` }} className={`fa${ style.charAt( 0 ) } fa-${ icon }`}></i>
}

export default React.memo( FontAwesome )
