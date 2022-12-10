import { useEffect, useState } from "react"
import { getAllSalesService } from "../../service/SaleService"
import CardSale from "./Card/CardSale"
import '../../css/Sales.css'
import DetailSale from "./Card/DetailSale"
import { Button, Modal } from "react-bootstrap"
import { separateDate } from "../../assets/utils/date.utils"

const SaleComponent = () => {
  const [saleDetail, setSaleDetail] = useState(
    {
      "client_id": "",
      "date": "",
      "detail": [],
      "nameUser": "",
      "state": "",
      "total": 0,
      "_id": ""
    }
  )
  const [sales, setSales] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllSales = async () => {
    const { data } = await getAllSalesService()
    setSales([...data])
    console.log(data)
  }

  const allShowData = (objectSale) => {
    setSaleDetail(objectSale)
    handleShow()
    //  setModalShow(true)
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

        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Detalle de venta</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body> */}
          <div className="mx-3">
            <div>
              Cliente: {saleDetail.nameUser}
            </div>
            <div>
              Fecha: {separateDate(saleDetail?.date)[0]} {separateDate(saleDetail?.date)[1]}
            </div>
            <div>
              Estado: {saleDetail.state}
            </div>
            <div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    saleDetail.detail.map((product) => (
                      <tr key={product._id}>
                        <td>{product.product}</td>
                        <td>{product.amount}</td>
                        <td>S/. {product.price}</td>
                      </tr>
                    ))
                  }
                </tbody>
                <tfoot>
                  <tr className="table-danger">
                    <td colSpan={2}>
                      Total
                    </td>
                    <td>S/. {saleDetail.total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          {/* </Modal.Body> */}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>

        {/* <DetailSale
          sale={saleDetail}
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
      </div>
    </>
  )
}

export default SaleComponent