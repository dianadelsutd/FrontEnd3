import CardStyles from '../Styles/Card.module.css'

const Card = ( {item, nuevalista, setNuevalista} ) => {
    // console.log(item)
  return (
    <div className={CardStyles.btnGroup}><button onClick={() => 
    setNuevalista([...nuevalista, item])}>{item}
    </button>
    </div>
  )
}

export default Card