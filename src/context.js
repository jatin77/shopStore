import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    subTotal: 0,
    tax: 0,
    total: 0,
    displayModal: false
  };

  componentDidMount = () => {
    this.setProducts();
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      let singleItem = { ...product };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState({
      products: tempProducts
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  addToCart = id => {
    this.addToDetail(id);
    let tempProducts = [...this.state.products];

    let product = this.getItem(id);
    product.inCart = true;
    product.count = 1;

    product.total = product.price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
          displayModal:true
        };
      },
      () =>this.addTotals()
    );
  };
  addToDetail = id => {
    let product = this.getItem(id);
    this.setState(() => {
      return {
        detailProduct: product
      };
    });
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        subTotal: subTotal,
        tax: tax,
        total: total
      };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    let product = tempCart.find(item => item.id === id);
    product.count += 1;
    product.total = product.price * product.count;
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    let product = tempCart.find(item => item.id === id);
    product.count -= 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);

    let tempProducts = [...this.state.products];
    let product = this.getItem(id);
    product.count = 0;
    product.total = 0;
    product.inCart = false;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  showModal = () => {
    this.setState(() => {
      return { displayModal: true };
    });
  };

  hideModal = () => {
    this.setState(() => {
      return { displayModal: false };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          addToDetail: this.addToDetail,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          showModal: this.showModal,
          hideModal: this.hideModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
