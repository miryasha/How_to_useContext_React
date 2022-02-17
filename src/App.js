import React from 'react';
import  CurrencyContext  from './currency-context';


const DATA = [
  {
    id: '1',
    title: 'The Road to React',
    price: 19.99,
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
    price: 29.99,
  },
];

//https://www.robinwieruch.de/react-usecontext-hook/#:~:text=React%27s%20useContext%20just%20uses%20the%20Context%20object%20--,component%20--%20the%20Consumer%20component%20--%20in%20between.


// const App = () => {
//   return (
//     <div>
//       <Books list={DATA} />
//     </div>
//   );
// };
//value="1111€"
const App = () => {
  return (
    <CurrencyContext.Provider value={{
      time : "1111€",
    }}>
      <Books list={DATA} />
    </CurrencyContext.Provider>
  );
};




const Books = (props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

// const Book = ({ item }) => {
//   return (
//     <li>
//       {item.title} - {item.price}
//     </li>
//   );
// };


const Book = (props) => {
 // const currency = React.useContext(CurrencyContext);

  return (
    <CurrencyContext.Consumer>
    {(ctx) =>{
      return (
        <li>{ctx.time}</li>
      )
    }}
    {/* <li>
      {props.item.title} - {props.item.price} {currency.time}
    </li> */}
    </CurrencyContext.Consumer>
  );
};

export default App;