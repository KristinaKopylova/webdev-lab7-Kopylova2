import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/input"
import { api } from "../api/api"

const SignUp = () => {
    const [error, setError] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")
        if (e.target.password.value !== e.target.password2.value) {
            setError("Пороли не совпадают")
            return
        }
        const user = {
            username: e.target.username,
            email: e.target.email,
            password: e.target.password
        }
        try {
            const data = await api.registerUser(user)
            console.log(data);
        } catch (error) {
            setError(error.message)
            console.error(error)
        }
        console.log(user)
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        label="Имя пользователя"
                        required
                        placeholder="Введите имя"
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Почта"
                        required
                        placeholder="Введите почту"
                    />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        label="Пороль"
                        required
                        placeholder="Введите пороль"
                    />
                    <Input
                        id="password2"
                        name="password2"
                        type="password"
                        label="Подтверждение пороля"
                        required
                        placeholder="Подтверждение пороля"
                    />
                    <Button>Зарегистрироваться</Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp