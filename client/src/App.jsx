import { useState, useEffect } from "react";
import "./App.css";
import CartItem from "./components/CartItem";
import CardItem from "./components/CardItem";

function App() {
  // Mengambil data menu
  const [dataMenu, setDataMenu] = useState([]);

  async function getData() {
    const url = "http://localhost:3000/menu"; // Ganti URL dengan endpoint menu yang sesuai
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setDataMenu(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // State untuk keranjang
  const [cart, setCart] = useState([]);

  function addToCart(menu) {
    // Mengecek apakah item sudah ada di keranjang
    const existingItem = cart.find(item => item.id === menu.id);
    if (existingItem) {
      // Jika item sudah ada, perbarui jumlahnya
      setCart(cart.map(item =>
        item.id === menu.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Jika item belum ada, tambahkan item baru ke keranjang
      setCart([...cart, { ...menu, quantity: 1 }]);
    }
  }

  // Menghitung total item dalam keranjang
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  // Menghitung harga total dalam keranjang
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-primary">
        <div className="container d-flex">
          <div>
            <img
              src="/kingsIcon.png"
              alt=""
              style={{ height: "45px", width: "45px", objectFit: "cover" }}
            />
            <a className="navbar-brand text-warning" href="#">
              Restaurant Menu
            </a>
          </div>

          <button
            className="btn btn-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Cart - {totalItemsInCart} {/* Menampilkan jumlah total item */}
          </button>
        </div>
      </nav>

      <div className="container py-5">
        <div className="d-flex justify-content-center">
          <img
            src="/kingsIcon.jpeg"
            alt=""
            style={{ height: "300px", width: "768px", objectFit: "contain" }}
          />
        </div>
        <br />
        <div className="bg-primary text-center text-warning fs-4">
          Menu
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {dataMenu.map((menu, index) => {
            return <CardItem menu={menu} key={index} addToCart={addToCart} />;
          })}
        </div>
      </div>

      {/* Drawer */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          {cart.map((el, i) => {
            return <CartItem cart={el} key={i} />;
          })}
        </div>
        <div className="offcanvas-footer d-flex justify-content-between p-3">
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
}

export default App;


// import { useState, useEffect } from "react";
// import "./App.css";
// import CartItem from "./components/CartItem";
// import CardItem from "./components/CardItem";

// function App() {
//   //? ngambil data
//   const [dataMovies, setDataMovies] = useState([]);

//   async function getData() {
//     const url = "http://localhost:3000/movies";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }

//       const json = await response.json();
//       console.log(json);

//       setDataMovies(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   useEffect(() => {
//     // isinya
//     getData();
//   }, []);

//   //? handle cart
//   const [cart, setCart] = useState([]);

//   function addToCart(movie) {
//     setCart([...cart, movie]);
//   }

//   return (
//     <>
//       {/* navbar */}
//       <nav className="navbar bg-warning">
//         <div className="container d-flex">
//           <a className="navbar-brand" href="#">
//             Navbar
//           </a>

//           <button
//             className="btn btn-primary"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasExample"
//             aria-controls="offcanvasExample"
//           >
//             Cart - {cart.length}
//           </button>
//         </div>
//       </nav>

//       <div className="container py-5">
//         <div className="d-flex justify-content-center">
//           <img
//             src="/winter.jpg"
//             alt=""
//             style={{ height: "300px", width: "768px", objectFit: "cover" }}
//           />
//         </div>
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
//           {dataMovies.map((movie, index) => {
//             return <CardItem movie={movie} key={index} addToCart={addToCart} />;
//           })}
//         </div>
//       </div>

//       {/* drawer */}
//       <div
//         className="offcanvas offcanvas-end"
//         tabIndex="-1"
//         id="offcanvasExample"
//         aria-labelledby="offcanvasExampleLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasExampleLabel">
//             Cart
//           </h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body d-flex flex-column gap-2">
//           {cart.map((el, i) => {
//             return <CartItem cart={el} key={i} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
