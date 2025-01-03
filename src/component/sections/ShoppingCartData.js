import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../sliceComponent/CartSlice';
import { deleteFromCart, deleteAllCart } from '../sliceComponent/CartSlice';
function ShoppingCartData() {
    const cartData = useSelector((state) => state.cart.orders);
    console.log("cart data " + JSON.stringify(cartData));
    const dispatch = useDispatch();
    return (
        <div>
             <section class="page-title">
                {/* <!-- Container Start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>Shopping Cart</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>
            {
                (cartData.length > 0) ?
                    (<div class="pt-4 pb-4 container" >                      
                    <h1 className='text-center'>Cart Items</h1>
                        <div class="mt-5 gap-3 gap-md-0 gap-lg-0 row">                                                
                            <div class="col-lg-8 col-md-7" >  
                                <div class="card">                                   
                                    {
                                        cartData.map((product) => {
                                            return (
                                                <div class="mt-2 store-item bottom-line pb-3" >
                                                    <div class="row">
                                                        <div class="col-lg-3">
                                                            <img class="image-store" src={product.image} />
                                                        </div>
                                                        <div class="col-lg-9">
                                                            <div class="mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
                                                                <h5>{product.title}</h5>
                                                                <div>
                                                                    <div class="btn-quantity-container d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                                                        <button class="btn-quantity btn btn-default">−</button>
                                                                        <span class="p-quantiry">1</span>
                                                                        <button class="btn-quantity btn btn-default" onClick={() => { dispatch(addToCart(product)) }}>+</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="list-store d-flex align-items-center justify-content-between" >
                                                                <h6> Original Price : ${product.price} </h6>
                                                            </div>
                                                            <div class="list-store d-flex align-items-center justify-content-between" >
                                                                <h6> Discount : {product.discount}% </h6>
                                                            </div>
                                                            <div class="list-store d-flex align-items-center justify-content-between mb-3" >
                                                                <h6>Discount Price : ${Math.trunc(product.price - ((product.price * product.discount) / 100))}</h6>
                                                            </div>
                                                            <div class="list-store d-flex align-items-center justify-content-between">
                                                                <div class="d-flex gap-2">
                                                                    <button class="btn-list btn btn-xs btn-default" onClick={() => { dispatch(deleteFromCart(product.id)) }} >
                                                                        <i class="bi bi-trash" ></i>
                                                                        Remove Item
                                                                    </button>
                                                                </div>
                                                                <div class="d-flex">
                                                                    <h5>${Math.trunc(product.price - ((product.price * product.discount) / 100))}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-5">
                                <div class="gap-3 row">
                                    <div>
                                        <div class="card">
                                            <h4>The total amount of</h4>
                                            <div class="store-item mt-2">
                                                <div class="row">
                                                    <div>
                                                        <div class="list-store d-flex align-items-center justify-content-between">
                                                            <p>Temporary amount</p>
                                                            <p>$0.00</p>
                                                        </div>
                                                        <div class="bottom-line" ></div>
                                                    </div>
                                                </div>
                                                <div class="mt-2 row">
                                                    <div class="col-6">
                                                        <p class="p-total-label" >The total amount of (Including VAT)</p>
                                                    </div>
                                                    <div class="col-6" data-reactid=".0.1.1.0.0.0.1.1.1">
                                                        <p class="p-total">$0.00</p>
                                                    </div>
                                                </div>
                                                <div class="mt-1 row">
                                                    <div>
                                                        <button type="button" class="w-100 btn btn-md btn-primary btn-block">Go To Checkout</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    ) : (
                        <h1 class="text-center mt-5" >oops!!   Your Cart is Empty</h1>
                    )
            }
        </div>
    )
}
export default ShoppingCartData