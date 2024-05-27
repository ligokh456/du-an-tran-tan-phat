
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import file CSS
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [showResetPasswordOnce, setShowResetPasswordOnce] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State để theo dõi trạng thái hiển thị mật khẩu

    const handleLogin = (e) => {
        e.preventDefault();
        // Thực hiện xác thực tại đây, ví dụ: gửi yêu cầu đăng nhập đến máy chủ

        // Kiểm tra username và password, đây là một ví dụ đơn giản
        if (username === 'admin' && password === 'admin') {
            // Nếu đăng nhập thành công, cập nhật trạng thái đăng nhập và chuyển hướng đến trang chủ
            setIsLoggedIn(true);
            navigate('/');
        } else {
            // Nếu đăng nhập không thành công, hiển thị thông báo lỗi
            alert('Đăng nhập không thành công. Vui lòng thử lại.');
        }
    };

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    const handleResetPassword = () => {
        if (showResetPasswordOnce) {
            setShowResetPassword(false);
            setShowResetPasswordOnce(false);
        } else {
            setShowResetPassword(true);
            setShowResetPasswordOnce(true);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="logo-wrapper">
                <img src="https://tint.creativemarket.com/QNpDBB-WOoAcRqlF-qHwzst2_QmNFaZrE987h2aTk3M/width:1820/height:1214/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUwMS81MDEyLzUwMTIzNTAvb25saW5lLXNob3AtMS0wMS1vLmpwZw" alt="Logo" className="logo" width="200" height="150" />
            </div>
            <h2 className="login-title">Xin Chào Quý Khách</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Tên đăng nhập:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <div className="password-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                        />
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={toggleShowPassword} className="eye-icon" />
                    </div>
                </div>
                <div className="btn-login-wrapper">
                    <button type="submit" className="btn-login">Đăng nhập</button>
                </div>
            </form>
            <div className="additional-links">
                <div onClick={handleForgotPassword} className="forgot-password-link">Quên mật khẩu?</div>
                <div onClick={handleResetPassword} className="reset-password-link">Cấp lại mật khẩu</div>
            </div>
            {showForgotPassword && <ForgotPassword />}
            {showResetPassword && <ResetPassword />}
        </div>
    );
};

export default Login;
