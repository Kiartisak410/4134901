const number =[5, 2, 3, 6]
const text = (
  <>
    {number.length > 0 &&
      <h1 className="red">Hello World !!! <br></br> {number[0] + number[1]}</h1>
      
    }
  </>
);

function missValue(params) {
  return "Misss !!!!"
}

function List() {
  return number.length > 3 ? text : missValue;
}

export default List;