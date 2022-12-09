import { Button, Card } from "react-bootstrap"

const CardSale = (props) => {
  const { allShowData } = props
  return (
    <>
      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary" onClick={() => allShowData(props)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardSale