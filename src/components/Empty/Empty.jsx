import { Link } from "react-router-dom"
import '../../css/Empty.css'

const Empty = () => {
  return (
    <>
      <div className="empty">
        <h1 className="empty__title"><i className="bi bi-cart-x-fill"></i> No se a encontrado ningún producto</h1>
        <p className="empty__paragraph">Agrégalo desde la <Link to='/'>página principal</Link></p>
      </div>
    </>
  )
}

export default Empty