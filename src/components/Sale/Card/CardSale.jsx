import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { separateDate } from "../../../assets/utils/date.utils"
import { getOneUser } from "../../../service/UserService"

const CardSale = ({ allShowData, objectSale }) => {
  const [newDate, setNewDate] = useState([])
  const [nameUser, setNameUser] = useState('')
  const { date, total, } = objectSale

  const getNameUser = async () => {
    const { data } = await getOneUser(objectSale.client_id)
    // console.log(data)
    if (data.allName !== undefined) {
      setNameUser(data?.allName)
    }

    if (data.allName === undefined) {
      console.log('non hay ')
      setNameUser('No identificado')
    }
  }

  useEffect(() => {
    getNameUser()
    setNewDate(separateDate(date))
  }, [])

  return (
    <>
      <Card>
        <Card.Header as="h5">{nameUser}</Card.Header>
        <Card.Body>
          {/* <Card.Title>Caracteristicas</Card.Title>
          <Card.Text>
          </Card.Text> */}
          <div className="mb-2">
            <div>
              Fecha: {newDate[0]} {newDate[1]}
            </div>
            <div>
              Total: S/. {total}
            </div>
          </div>

          <Button variant="primary" onClick={() => allShowData({ ...objectSale, nameUser })}>Mas detalle</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardSale