// import cl from "./style.module.css"
// const Login = () => {

//     return (
//         <>
//             <section className={cl.login__container}>
//                 <h1 className={cl.login}>
//                     Вход
//                 </h1>
//                 <form className={cl.login__form} action="">
//                     <div className={cl.form__group}>
//                         <label for="username">
//                             Имя пользователя/Email
//                         </label>
//                         <input type="text" id="username" name="username" required placeholder="Имя/Email" />
//                     </div>
//                     <div className={cl.form__group}>
//                         <label for="password">
//                             Пароль
//                         </label>
//                         <input type="password" id="password" name="password" required minlength="6" />
//                     </div>

//                     <button className={cl.login__btn} type="submit">
//                         Войти
//                     </button>
//                 </form>
//             </section>
//         </>

//     )

// }

// export default Login;


import cl from "./style.module.css"

const Login = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

    }

    return (
        <section className={cl.login__container}>
            <h1 className={cl.login}>
                Вход
            </h1>
            <form className={cl.login__form} onSubmit={handleSubmit}>
                <div className={cl.form__group}>
                    <label htmlFor="username">
                        Имя пользователя/Email
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder="Имя/Email"
                    />
                </div>
                <div className={cl.form__group}>
                    <label htmlFor="password">
                        Пароль
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        minLength={6}
                    />
                </div>

                <button className={cl.login__btn} type="submit">
                    Войти
                </button>
            </form>
        </section>
    )
}

export default Login