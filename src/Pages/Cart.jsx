import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart({ cartItems, remove, quantity }) {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const qty = parseFloat(item.quantity) || 0;
    return total + price * qty;
  }, 0);

  const deliveryCharges = totalItems > 0 ? 49 : 0;
  const grandTotal = totalPrice + deliveryCharges;

  return (
    <div className="container my-4">
      {totalItems === 0 ? (
        // **Empty Cart Design**
        <div className="text-center p-5 border rounded shadow-sm">
          <CiShoppingCart size={80} className="text-secondary" />
          <h3 className="text-muted mt-3">Your Cart is Empty</h3>
          <p className="text-muted">Looks like you haven’t added anything to your cart yet.</p>
          <button className="btn btn-primary mt-3">Start Shopping</button>
        </div>
      ) : (
        // **Cart Items**
        <div className="row">
          {/* Cart Items Section */}
          <div className="col-md-8">
            <div className="border rounded p-3 shadow-sm bg-white">
              {cartItems.map((item, index) => (
                <div key={item.id} className="d-flex align-items-center gap-3 border-bottom py-3">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="rounded shadow-sm"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="text-muted mb-1">Rs. {item.price.toFixed(2)}</p>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => quantity(index, -1)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="border px-3 py-1 rounded">{item.quantity}</span>
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => quantity(index, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-danger" onClick={() => remove(index)}>
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-md-4">
            <div className="border rounded p-3 shadow-sm bg-white">
              <h5 className="mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Total Items:</span>
                <strong>{totalItems}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <strong>Rs. {totalPrice.toFixed(2)}</strong>
              </div>
              {totalItems > 0 && (
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Charges:</span>
                  <strong>Rs. {deliveryCharges.toFixed(2)}</strong>
                </div>
              )}
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Total:</h5>
                <h5>Rs. {grandTotal.toFixed(2)}</h5>
              </div>
              <button className="btn btn-success w-100 mt-3">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
