import Product from "./components/Product.jsx";

function App() {
    let product = {
        name: "Classy Modern Smart watch",
        description: "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
        color: "purple",
        image: "./img/purple-device.png",
        type: "Watch",
        model: "Forerunner 290XT",
        qty: 1,
        size: "S",
        price: 69.00,
        rating: 3.5,
        ratingCount: 2,
    };

  return (
      <>
          <Product product={product} />
      </>
  )
}

export default App
