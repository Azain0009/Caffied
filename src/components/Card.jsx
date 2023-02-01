import Button from './Button'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
  const {id,image,name,price} = product; 
  return (
    <Link to={`/products/${id}`} >
      <div className='border border-gray rounded text-center'>
        <img src={image} />
        <div className='py-4'>
          <h3 className='text-2xl mb-2'>{name}</h3>
          <p className='mb-2'>$ {price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card