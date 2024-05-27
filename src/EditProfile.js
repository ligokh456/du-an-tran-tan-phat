import React, { useState } from 'react';

function EditProfile({ user, updateUser }) {
    const [fullName, setFullName] = useState(user.fullName);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [address, setAddress] = useState(user.address);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update user information
        updateUser({ fullName, phoneNumber, address });
    };

    return (
        <div>
            <h2>Chỉnh sửa thông tin</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ và tên:</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <label>Số điện thoại:</label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div>
                    <label>Địa chỉ nhà:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button type="submit">Lưu thay đổi</button>
            </form>
        </div>
    );
}

export default EditProfile;
