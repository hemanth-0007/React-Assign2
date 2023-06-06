import './index.css'
import {deflate} from 'zlib'

const CardItem = props => {
  const {cardItemDetails} = props
  const {title, description, imgUrl, className} = cardItemDetails

  return (
    <div className={`card-container ${className}`}>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <img className="image" src={imgUrl} alt={imgUrl} />
    </div>
  )
}

export default CardItem
