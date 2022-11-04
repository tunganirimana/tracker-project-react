import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title, onAdd,ShowAdd}) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
  return (
    <header className='header'>
      <h1 >{title}</h1>
      <Button color={ShowAdd ? 'red' :'green'} text={ShowAdd ? 'close': 'Add'} onClick = {onAdd} />  
     
       </header>
  )
}
Header.defaultProps = {
    title: 'Hello again',
}
Header.propTypes = {
    title:'PropTypes.string.isRequired',
}
// css in js
// const headingStyle = {
//     color: 'red' , backgroundColor: 'blue'
// }
export default Header

