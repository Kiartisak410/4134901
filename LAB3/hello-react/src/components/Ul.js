function Name(props) {
  return <li>{props.id},{props.brand}</li>;
}

function Brand() {
  const bn = [
    { id: 1, brand: "Toyota" },
    { id: 2, brand: "Mazda" },
    { id: 3, brand: "Kubota" },
  ];
  return (
    <>
      <ul>
          {bn.map((bn) => <Name id={bn.id} brand={bn.brand}/>)}
      </ul>
    </>
  );
}

export default Brand;