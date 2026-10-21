
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:3000/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                return;
            }

            localStorage.setItem("adminToken", data.token);
            navigate("/admin/dashboard");
        } catch (error) {
            setError("Backend connection failed");
        }
    }

    return (
        <div className="container py-5" style={{ maxWidth: "450px" }}>
            <div className="card shadow p-4">
                <h2 className="text-center text-success mb-4">
                    Admin Login
                </h2>

                <form onSubmit={handleLogin}>
                    <label className="form-label">Username</label>
                    <input
                        className="form-control mb-3"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="text-danger">{error}</p>
                    )}

                    <button className="btn btn-success w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
