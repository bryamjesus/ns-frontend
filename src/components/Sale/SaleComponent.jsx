import { useEffect, useState } from "react"
import { getAllSalesService } from "../../service/SaleService"
import CardSale from "./Card/CardSale"
import '../../css/Sales.css'
import DetailSale from "./Card/DetailSale"
import { Button, Modal } from "react-bootstrap"
import { separateDate } from "../../assets/utils/date.utils"
import ReactExport from "@ibrahimrahmani/react-export-excel";
import { getOneUser } from "../../service/UserService"

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

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
  const [salesExport, setSalesExport] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllSales = async () => {
    const { data } = await getAllSalesService()
    const a = await getAllSalesExport(data)
    setSales([...data])
    setSalesExport(a)
  }

  const getAllSalesExport = async (sales) => {
    const newSalesWithNameUser = []
    sales.forEach(async (sale) => {
      const { data } = await getOneUser(sale.client_id)
      const newSales = { ...sale, allName: data.allName, email: data.email }
      // console.log(newSales)
      newSalesWithNameUser.push({ ...newSales })
    })

    return newSalesWithNameUser
  }

  const allShowData = (objectSale) => {
    setSaleDetail(objectSale)
    handleShow()
    //  setModalShow(true)
    console.log(objectSale)
  }

  useEffect(() => {
    getAllSales()
    // getAllSalesExport()
  }, [])

  return (
    <>
      <div className="container">
        <div className="pb-3">
          <ExcelFile element={<button className="btn btn-success">Exportar Ventas <i className="bi bi-arrow-down-circle-fill"></i></button>}>
            <ExcelSheet data={salesExport} name="Compras">
              <ExcelColumn label="Cliente" value="allName" />
              <ExcelColumn label="Correo" value="email" />
              <ExcelColumn label="Fecha" value="date" />
              {/* <ExcelColumn
              label="Estado"
              value={(col) => col.estado === 'P' ? "Pendiente" : (col.estado === 'E' ? 'Entregado' : 'Anulado')}
            /> */}
              <ExcelColumn label="Total" value="total" />
            </ExcelSheet>
          </ExcelFile>
        </div>

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