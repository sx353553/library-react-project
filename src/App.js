import Footer from "./components/Footer";
import Nav from "./components/Nav";
import React, { useState } from "react" 
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [ cart, setCart ] = useState([]);

function addToCart () {
  console.log('add to cart')
}
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
        <Route path="/cart" render={() => <Cart books={books} />} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
