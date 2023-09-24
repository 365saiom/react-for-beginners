// import Button from "./Button";
// import styles from "./App.module.css";

// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!!!!</h1>
//       <Button text={"Continue"} />
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("")
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => {setKeyword(event.target.value)};
//   useEffect(() => {
//     console.log("I run only once.");
//   }, []); // useEffect는 코드가 한번만 실행될 수 있도록 보호해준다.
//   useEffect(() => {
//     console.log("I run when `keyword` changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when `counter` changes.");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when keyword & counter changes.");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type ="text" placeholder="Search here..." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// export default App;

// Cleanup 배우기
// import { useState, useEffect } from "react";

// function Hello(){
//   // function byFn(){
//   //   console.log("bye:(");
//   // }
//   // function hiFn(){
//   //   console.log("created :)");
//   //   return byFn;
//   // }

//   // useEffect(() => {
//   //   console.log("hi :)");
//   //   return () => console.log("bye :(");
//   // }, []);

//   useEffect(function () {
//     console.log("hi :)");
//     return function () {
//       console.log("bye :(");
//     };
//   }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello/> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   )
// }

// export default App;

// import { useState } from "react";

// export default function App() {
//   const [todo, setTodo] = useState("");
//   const onChange = (event) => setTodo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (todo === "") {
//       return;
//     }
//     setTodo("");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           value={todo}
//           onChange={onChange}
//           placeholder="Write your to do..."
//         />
//         <button>Add To Do</button>
//       </form>
//     </div>
//   );
// }

// map을 사용한 To Dos 리스트
// import { useState } from "react";

// function App() {
//     const [toDo, setToDo] = useState("")
//     const [toDos, setToDos] = useState([]);
//     const onChange = (event) => setToDo(event.target.value);
//     const onSubmit = (event) => {
//         event.preventDefault();
//         if (toDo == "") {
//             return;
//         }
//         setToDos(currentArray => [toDo, ...currentArray]);
//         setToDo("");
//     };
//     console.log(toDos);
//     console.log(toDos.map((item, index) => (
//         <li key={index}>{item}</li>
//     )))
//     return <div>
//         <h1>My To Dos ({toDos.length})</h1>
//         <form onSubmit={onSubmit}>
//             <input
//                 onChange={onChange}
//                 value={toDo}
//                 type="text"
//                 placeholder="Write your to do..." />
//             <button>Add To do</button>
//         </form>
//         <hr />
//         <ul>
//             {toDos.map((item, index) => (
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//     </div>
// }

// export default App;

// import { useEffect, useState } from 'react';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [mycoin, setMycoin] = useState('0');
//   const [selcoin, setSelcoin] = useState('0');
//   const [result, setResult] = useState('0');
//   const onChange = event => {
//     setSelcoin(event.target.value);
//     console.log(selcoin);
//   };

//   useEffect(() => {
//     fetch('https://api.coinpaprika.com/v1/tickers')
//       .then(response => response.json())
//       .then(json => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>Change Coin! ({coins.length})</h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <div>
//           <label className="coins">
//             Select coin:{' '}
//             <select onChange={onChange}>
//               {coins.map(coin => (
//                 <option value={coin.quotes.USD.price}>
//                   {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
//                 </option>
//               ))}
//             </select>
//           </label>
//           <br />
//           <br />
//           <form>
//             <label className="mycoin">
//               my coin: <input type="number" />
//               <br />
//               <br />
//               <button>result</button>
//             </label>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [mycoin, setMycoin] = useState("0");
//   const [selcoin, setSelcoin] = useState("0");
//   const [result, setResult] = useState("0");
//   const onChange = (event) => {
//     setSelcoin(event.target.value);
//     console.log(selcoin);
//   };

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>({coins.length})</h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <div>
//           <label className="coins">
//             Select coin:{" "}
//             <select onChange={onChange}>
//               {coins.map((coin) => (
//                 <option value={coin.quotes.USD.price}>
//                   {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
//                 </option>
//               ))}
//             </select>
//           </label>
//           <br />
//           <br />
//           <form>
//             <label className="mycoin">
//               my coin: <input type="number" />
//               <br />
//               <br />
//               <button>result</button>
//             </label>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [HY, setHY] = useState([]);
//   const [GJ, setGJ] = useState([]);
//   const [ST, setST] = useState([]);
//   const [HJ, setHJ] = useState([]);

//   useEffect(() => {
//     axios
//       .all([
//         axios.get(
//           "http://openapi.seoul.go.kr:8088/4e4b427a7673616939337353715967/json/walkDoseongInfo/1/6/"
//         ),
//         axios.get(
//           "http://openapi.seoul.go.kr:8088/4e4b427a7673616939337353715967/json/walkGeungyosanInfo/1/9/"
//         ),
//         axios.get(
//           "http://openapi.seoul.go.kr:8088/4e4b427a7673616939337353715967/json/walkSaengtaeInfo/1/87/"
//         ),
//         axios.get(
//           "http://openapi.seoul.go.kr:8088/4e4b427a7673616939337353715967/json/walkHangangInfo/1/33/"
//         ),
//       ])
//       .then(
//         axios.spread((res1, res2, res3, res4) => {
//           const res1 = res1.arr;
//           const res2 = res2.arr;
//           const res3 = res3.arr;
//           const res4 = res4.arr;
//           const res = [...res1, ...res2, ...res3, ...res4];
//           handler(res);
//         })
//       )
//       .catch((err) => console.log(err));
//   }, []);

// {
//   fetch(
//     "http://openapi.seoul.go.kr:8088/4e4b427a7673616939337353715967/json/walkDoseongInfo/1/6/"
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setHY(json.walkDoseongInfo.row);
//     });
// },
// {
//   fetch(
//     "http://openapi.seoul.go.kr:8088/4e4b427a7673616939337353715967/json/walkGeungyosanInfo/1/9/"
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setGJ(json.walkGeungyosanInfo.row);
//     });
// },
// {
//   fetch(
//     "http://openapi.seoul.go.kr:8088/4e4b427a7673616939337353715967/json/walkSaengtaeInfo/1/87/"
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setST(json.walkSaengtaeInfo.row);
//     });
// },
// {
//   fetch(
//     "http://openapi.seoul.go.kr:8088/4e4b427a7673616939337353715967/json/walkHangangInfo/1/33/"
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setHJ(json.walkHangangInfo.row);
//     });
// }, []);

//   const tracking = [...HY, ...GJ, ...ST, ...HJ];

//   console.log(tracking);

//   return;
// }

// export default App;

// import Modal from "./component/Modal";

// export default function App() {
//   return <Modal />;
// }

// import { useState } from "react";

// export default function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const onChange = (event) => setTodo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (todo === "") {
//       return;
//     }
//     setTodos((currentArray) => [todo, ...currentArray]);
//     setTodo("");
//   };
//   return (
//     <div>
//       <h1>My To Dos({todos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           type="text"
//           value={todo}
//           placeholder="Write your to do..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {todos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// export default function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [selcoin, setSelcoin] = useState("");
//   const [mycoin, setMycoin] = useState("");
//   const onSelect = (event) => setSelcoin(event.target.value);
//   const onChange = (event) => setMycoin(event.target.value);
//   const reset = () => setMycoin("");
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>The coins!</h1>
//       <hr />
//       {loading ? <strong>Loading...</strong> :
//       <div>
//         <form>
//           <label htmlFor="coins">Select coin : </label>
//           <select id="coins" value={selcoin} onChange={onSelect}>
//             {coins.map((coin) => (
//               <option value={coin.quotes.USD.price}>
//                 {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
//               </option>
//             ))}
//           </select>
//           <br />
//           <br />
//           <label htmlFor="mycoin">Write your coin : </label>
//           <input id="mycoin" value={mycoin} type="number" onChange={onChange} />
//           <br />
//         </form>
//         <p>result : {Math.round(mycoin / selcoin)}</p>

//         <button onClick={reset}>reset</button>
//       </div>
//       }
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
