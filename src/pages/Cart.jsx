import { Helmet } from 'react-helmet'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
// import components
import PageHeader from "../components/PageHeader"

const Cart = () => {
  const {cart, updatedCart, removeFromCart} = useContext(CartContext)

  const handleIncrement = (item) => {
    updatedCart(item.id, item.quantity + 1)
  }

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updatedCart(item.id, item.quantity - 1)
    } else {
      removeFromCart(item.id)
    }
  }

  return (
    <>
      <Helmet>
        {/* primary tags */}
        <title>Cart - Give a Kid a Blanket</title>
        <meta name="title" content="Cart - Give a Kid a Blanket" />
        <meta name="description" content="View your cart items at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />

        {/* open graph/ fb */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href}/>
        <meta property="og:title" content="Cart - Give a Kid a Blanket" />
        <meta property="og:description" content="View your cart items at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1641644785726-26ec66bfce73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="Cart - Give a Kid a Blanket" />
        <meta property="twitter:description" content="View your cart items at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1641644785726-26ec66bfce73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Helmet>

      <div className='section top-section'>
        <PageHeader className='page-header'   title='Cart'
          image_url='https://images.unsplash.com/photo-1641644785726-26ec66bfce73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        </PageHeader>
      </div>

      <div className="cart-section section">
        <h2>Your Cart Items</h2>

        {cart.length === 0 ? (
        <h5 className='cart-empty-message brown-text'>Your Cart Is Empty!</h5>
        ) : (
          <>
            <div className="cart-box">
              {cart.map((item) => (
                <div className='cart-item full-corners' key={item.id}>
                  {/* product image */}
                  {item.images && item.images.length > 0 && (
                    <img 
                      src={item.images[0].src}
                      alt={item.images[0].alt || item.name}
                      className='product-img full-corners'
                    />
                  )}
                  <div className='cart-top-box'>
                    <h4>{item.name}</h4>
                    <h4>${parseFloat(item.prices.price/ 100)}</h4>
                  </div>
                  <p className="brown-text cart-text">{item.description}</p>
                  <h6 className="blue-text">Quantity: {item.quantity}</h6>  
                  <div className="cart-bottom-box">
                    <div className='cart-btn-container'>
                      <button onClick={() => handleIncrement(item)} className='plus cart-btn'></button>
                      <button onClick={() => handleDecrement(item)} className='minus cart-btn'></button>
                    </div>
                    <div onClick={() => removeFromCart(item.id)} className='remove-btn'></div>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className="cart-proceed-box">
              <button className='primary-btn checkout-btn'><h4>Proceed to Checkout</h4></button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
