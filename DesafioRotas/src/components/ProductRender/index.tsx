import './styles.css'

type props = {
    text: string;
}
const ProductRender = ({text}: props) => {
  return (
    <div>{text}</div>
  )
}

export default ProductRender