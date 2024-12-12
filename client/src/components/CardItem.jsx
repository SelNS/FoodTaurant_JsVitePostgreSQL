/* eslint-disable react/prop-types */
import { useState } from "react";

function CardItem({ menu, addToCart }) {
  const [quantity, setQuantity] = useState(1); // Inisialisasi jumlah item menjadi 1

  // Fungsi untuk menambah jumlah item
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Fungsi untuk mengurangi jumlah item
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // Hitung harga total berdasarkan jumlah
  const totalPrice = menu.price * quantity;

  return (
    <>
      <div className="col p-3">
        <div className="card">
          <img
            src={menu.imageUrl}
            className="card-img-top"
            alt="menu-image"
            style={{ height: "300px", objectFit: "cover", padding: "10px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{menu.name}</h5>
            <p className="card-text">
              ${menu.price} -{" "}
              <span className="badge text-bg-warning">{menu.category}</span>
            </p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={decreaseQuantity}>-</button>
              <span className="align-self-center">{quantity}</span>
              <button className="btn btn-secondary" onClick={increaseQuantity}>+</button>
            </div>
            <p className="mt-2">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <a
              href="#"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={"#modal" + menu.id}
            >
              Lihat Detail
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={"modal" + menu.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {menu.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                ${menu.price} -{" "}
                <span className="badge text-bg-success">{menu.category}</span>
              </p>
              <p>{menu.description}</p>
              <img
                src={menu.imageUrl}
                className="card-img-top"
                alt="menu-image"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Menambahkan item dengan jumlah yang dipilih
                  addToCart({ ...menu, quantity });
                }}
                type="button"
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;



// function CardItem({ movie, addToCart }) {
//   return (
//     <>
//       <div className="col p-3">
//         <div className="card">
//           <img
//             src={movie.imageUrl}
//             className="card-img-top"
//             alt="image-poster"
//             style={{ height: "300px", objectFit: "cover", padding: "10px" }}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{movie.title}</h5>
//             <p className="card-text">
//               {movie.releaseYear} -{" "}
//               <span className="badge text-bg-warning">{movie.genre}</span>
//             </p>
//             <a
//               href="#"
//               className="btn btn-primary"
//               data-bs-toggle="modal"
//               data-bs-target={"#modal" + movie.id}
//             >
//               Lihat Detail
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* <!-- Modal --> */}
//       <div
//         className="modal fade"
//         id={"modal" + movie.id}
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="exampleModalLabel">
//                 {movie.title}
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <p>
//                 {movie.releaseYear} -{" "}
//                 <span className="badge text-bg-warning">{movie.genre}</span>
//               </p>
//               <img
//                 src={movie.imageUrl}
//                 className="card-img-top"
//                 alt="image-poster"
//               />
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => {
//                   addToCart(movie);
//                 }}
//                 type="button"
//                 className="btn btn-primary"
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CardItem;
