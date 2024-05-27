import React from 'react';
import { NavLink } from 'react-router-dom';

function UserProfile({ user }) {
    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <p><strong>Họ và tên:</strong> {user.fullName}</p>
            <p><strong>Số điện thoại:</strong> {user.phoneNumber}</p>
            <p><strong>Địa chỉ nhà:</strong> {user.address}</p>
            <NavLink to="/profile/edit">Sửa thông tin cá nhân</NavLink> {/* Thêm nút để chuyển đến trang chỉnh sửa thông tin cá nhân */}
        </div>
    );
}

export default UserProfile;
