//Profile.js
import React, { useState } from 'react';

function Profile() {
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        phoneNumber: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic khi người dùng gửi thông tin
        console.log(userInfo);
        // Có thể gửi thông tin lên server ở đây
    };

    return (
        <div className="profile">
            <h2>Thông tin người dùng</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Họ và tên:</label>
                    <input type="text" name="fullName" value={userInfo.fullName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Số điện thoại:</label>
                    <input type="text" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Địa chỉ:</label>
                    <input type="text" name="address" value={userInfo.address} onChange={handleChange} />
                </div>
                <button type="submit">Lưu thông tin</button>
            </form>
        </div>
    );
}

export default Profile;
