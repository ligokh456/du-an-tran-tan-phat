import React, { useState } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import TrangChu from './TrangChu';
import Upload from './Upload';
import ProductPage from './ProductPage';
import Profile from './Profile';
import UserProfile from './UserProfile'; // Import component UserProfile
import EditProfile from './EditProfile'; // Import component EditProfile
import './Style.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    fullName: '',
    phoneNumber: '',
    address: ''
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <BrowserRouter basename="/">
      <div className="container">
        {isLoggedIn && (
          <nav className="navbar">
            <div className="nav-left">
              <NavLink to='/' exact className="nav-item">Trang chủ</NavLink>
              <NavLink to='/upload' className="nav-item">Tải lên tệp</NavLink>
              <NavLink to='/products' className="nav-item">Sản phẩm</NavLink>
              <NavLink to='/profile' className="nav-item">Thông tin cá nhân</NavLink> {/* Thêm liên kết đến trang thông tin cá nhân */}
            </div>
            <div className="nav-right">
              <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
            </div>
          </nav>
        )}
        <main>
          <Routes>
            <Route path='/' element={isLoggedIn ? <TrangChu /> : <Navigate to="/login" />} />
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/upload" element={isLoggedIn ? <Upload /> : <Navigate to="/login" />} />
            <Route path="/products" element={isLoggedIn ? <ProductPage /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isLoggedIn ? <UserProfile user={user} /> : <Navigate to="/login" />} /> {/* Định tuyến đến component UserProfile và truyền thông tin người dùng */}
            <Route path="/profile/edit" element={isLoggedIn ? <EditProfile user={user} updateUser={updateUser} /> : <Navigate to="/login" />} /> {/* Định tuyến đến component EditProfile và truyền thông tin người dùng cùng hàm cập nhật */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
