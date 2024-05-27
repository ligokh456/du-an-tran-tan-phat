//ProductPage.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Product from './Product';
import './ProductPage.css'; // Import CSS file
const handleBuyNow = (Product) => {
    return <Navigate to="/profile" />;
};
const ProductPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleRemoveItem = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const handleSearchSubmit = () => {
        console.log('Tìm kiếm cho:', searchTerm);
        const filtered = products.filter(product =>
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const addToCart = (product) => {
        const existingItemIndex = cart.findIndex(item => item.product.description === product.description);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            updatedCart[existingItemIndex].total += product.price;
            setCart(updatedCart);
        } else {
            setCart([...cart, { product: product, quantity: 1, total: product.price }]);
        }
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
        if (isCartOpen) {
            setOrderDetails({
                items: cart,
                totalPrice: calculateTotalPrice(cart),
            });
        } else {
            setOrderDetails(null);
        }
    };

    const calculateTotalPrice = (cart) => {
        return cart.reduce((total, item) => total + item.total, 0);
    };

    const handleCheckout = () => {
        // Handle checkout logic here
        console.log('Thanh toán thành công!');
        setCart([]); // Clear cart after checkout
    };

    const products = [
        { id: 1, image: 'banh1.jpg', description: 'Bánh sản mỳ 1', price: 1000 },
        { id: 2, image: 'banh2.jpg', description: 'Bánh sản phẩm 2', price: 19000 },
        { id: 3, image: 'banh3.jpg', description: 'Bánh sản phẩm 3', price: 95399 },
        { id: 4, image: 'banh4.jpg', description: 'Bánh sản phẩm 4', price: 25799 },
        { id: 5, image: 'banh5.jpg', description: 'Bánh sản phẩm 5', price: 195599 },
        { id: 6, image: 'banh6.jpg', description: 'Bánh sản phẩm 6', price: 18699 },
        { id: 7, image: 'banh7.jpg', description: 'Bánh sản phẩm 7', price: 17599 },
        { id: 8, image: 'banh8.jpg', description: 'Bánh sản phẩm 8', price: 14299 },
        { id: 9, image: 'keo1.jpg', description: 'Bánh kẹo 9', price: 197529 },
        { id: 10, image: 'banh5.jpg', description: 'Bánh sản phẩm 10', price: 12499 },
        { id: 11, image: 'banh1.jpg', description: 'Bánh sản phẩm 11', price: 75699 },
        { id: 12, image: 'banh9.jpg', description: 'Bánh sản phẩm 12', price: 18529 },
    ];

    return (
        <div className="product-page">
            <header className="product-header">
                <input
                    type="text"
                    placeholder="Tìm kiếm"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <button onClick={handleSearchSubmit} className="search-button">Tìm kiếm</button>
                <button onClick={toggleCart} className="cart-button">Giỏ Hàng ({cart.length}) VNĐ</button> {/* Change text to VNĐ */}
            </header>

            {isCartOpen && (
                <div className="cart">
                    <h2>Giỏ Hàng</h2>
                    <ul className="cart-list">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.product.image} alt={item.product.description} />
                                <div className="cart-item-details">
                                    <div>{item.product.description}</div>
                                    <div>Số lượng: {item.quantity}</div>
                                    <div>Số tiền: {item.total.toLocaleString('vi-VN')} VNĐ</div> {/* Change to VNĐ */}
                                    <button onClick={() => handleRemoveItem(index)} className="remove-button">Gỡ</button>
                                    <button onClick={() => handleBuyNow(item.product)} className="buy-now-button">Mua ngay</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {orderDetails && (
                        <div>
                            <h3>Thông tin đơn hàng</h3>
                            <ul>
                                {orderDetails.items.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.product.image} alt={item.product.description} />
                                        <div>{item.product.description}</div>
                                        <div>Số lượng: {item.quantity}</div>
                                        <div>Số tiền: {item.total.toLocaleString('vi-VN')} VNĐ</div> {/* Change to VNĐ */}
                                    </li>
                                ))}
                            </ul>
                            <p>Tổng tiền: {orderDetails.totalPrice.toLocaleString('vi-VN')} VNĐ</p> {/* Change to VNĐ */}
                            <button onClick={handleCheckout} className="checkout-button">Thanh toán</button> {/* Checkout button */}
                        </div>
                    )}
                </div>
            )}

            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="product-item">
                            <Product
                                image={product.image}
                                description={product.description}
                                price={product.price}
                            />
                            <button onClick={() => addToCart(product)} className="add-to-cart-button">Thêm vào giỏ hàng</button>
                            <button onClick={() => console.log('Mua sản phẩm:', product.description)} className="buy-now-button">Mua ngay</button>
                        </div>
                    ))
                ) : (
                    products.map((product, index) => (
                        <div key={index} className="product-item">
                            <Product
                                image={product.image}
                                description={product.description}
                                price={product.price}
                            />
                            <button onClick={() => addToCart(product)} className="add-to-cart-button">Thêm vào giỏ hàng</button>
                            <button onClick={() => console.log('Mua sản phẩm:', product.description)} className="buy-now-button">Mua ngay</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProductPage;
