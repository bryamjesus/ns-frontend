const Card = ({ id, name, description, price }) => {
  return (
    <>
      <div className="">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          <span>Precio: </span>S/. {price}
        </p>
      </div>
    </>
  );
};
export default Card;
