import React from 'react';
import { useNavigate } from 'react-router-dom'; // Thay vì useHistory, sử dụng useNavigate

function TrangChu(props) {
    const navigate = useNavigate(); // Thay vì useHistory, sử dụng useNavigate

    const handleGoToProfile = () => {
        navigate('/profile'); // Thay vì sử dụng history.push, sử dụng navigate
    };

    return (
        <div>
            <h1>Đây là thông tin ở trang chủ</h1>
            <img src="logo192.png" alt="Mô tả hình ảnh" />
            <p>React là một thư viện JavaScript phổ biến được sử dụng để xây dựng giao diện người dùng.</p>
            <p>Nó cung cấp một cách linh hoạt và hiệu quả để phát triển các ứng dụng web tương tác.</p>

            <p>
                Để tìm hiểu thêm về React, bạn có thể truy cập trang web chính thức của ReactJS:
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">reactjs.org</a>
            </p>
            <p>
                Hoặc đọc các tài liệu và hướng dẫn trên trang GitHub của React:
                <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">github.com/facebook/react</a>
            </p>

            {/* Sử dụng nút và hook useNavigate để chuyển hướng đến trang Profile */}
            <button onClick={handleGoToProfile}>Chuyển đến trang Profile</button>
        </div>
    );
}

export default TrangChu;
