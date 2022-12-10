import { useEffect, useState } from "react"
import { getAllSalesService } from "../../service/SaleService"
import CardSale from "./Card/CardSale"
import '../../css/Sales.css'
import DetailSale from "./Card/DetailSale"
import { Button } from "react-bootstrap"

const SaleComponent = () => {
  const [sales, setSales] = useState([])
  const [modalShow, setModalShow] = useState(false);

  const getAllSales = async () => {
    const { data } = await getAllSalesService()
    setSales([...data])
    console.log(data)
  }

  const allShowData = (objectSale) => {
    setModalShow(true)
    console.log(objectSale)
  }

  useEffect(() => {
    getAllSales()
  }, [])

  return (
    <>
      <div className="container">
        <div className="sales">
          {
            sales.map((sale) => (
              <CardSale
                key={sale._id}
                allShowData={allShowData}
                objectSale={sale}
              />
            ))
          }
        </div>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button> */}
        <DetailSale
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  )
}

export default SaleComponent