import Button from "../../ui/button/Button";
import cl from "./style.module.css"
import logo from "./../../../public/img/Logo.png"
const Header = () => {

    return (
        <>
            <header className={cl.header}>
                <div className={cl.header__container}>
                    <img src={logo} alt="" className={cl.header__logo} />
                    <nav className={cl.header__navigation}>
                        <a href="">О нас</a>
                        <a href="">Услуги</a>
                        <a href="">Этапы работы</a>
                        <a href="">Отзывы</a>
                        <a href="">Контакты</a>
                    </nav>

                    <div className="header__buttons">
                      <Button variant="primary" size="medium" onClick={() => alert("Clicked!")}> 
                        Рассчитать стоймость
                      </Button>
                    </div>
                </div>
            </header>
        </>

    )

}

export default Header;