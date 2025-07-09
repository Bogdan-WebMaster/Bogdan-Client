import cl from "./gallery.module.css"

const GalleryCards = () => {

    return (

        <>
            {/* <section className={cl.cards}>
                <section className={cl.video}>
                    <div className={cl.card}>

                        <div className={cl.card__container}>
                            <h2 className={cl.card__head}>

                            </h2>


                        </div>

                    </div>
                </section>
                <section className={cl.Photo}>
                    <div className={cl.card}>

                        <div className={cl.card__container}>
                            <h3 className={cl.card__head}>

                            </h3>


                        </div>

                    </div>
                    <div className={cl.card}>

                        <div className={cl.card__container}>
                            <h4 className={cl.card__head}>

                            </h4>


                        </div>
                    </div>
                    <div className={cl.card}>

                        <div className={cl.card__container}>
                            <h5 className={cl.card__head}>

                            </h5>


                        </div>
                    </div>
                </section> */}
            <div className={cl.cards}>
                <div className={cl.cards__video}>
                    <h1>
                        Видео
                    </h1>
                    <p>
                        Описание видео
                    </p>
                    <img src="" alt="" />
                </div>
                <div className={cl.cards__photos}>
                    <div className={cl.cards__photo}>
                        <h2>
                            Заголовок
                        </h2>
                        <p>
                            Описание 1
                        </p>
                        <img src="" alt="" />
                    </div>
                    <div className={cl.cards__photo}>
                        <h2>
                            Заголовок
                        </h2>
                        <p>
                            Описание 2
                        </p>
                        <img src="" alt="" />
                    </div>
                    <div className={cl.cards__photo}  >
                        <h2>
                            Заголовок
                        </h2>
                        <p>
                            Описание 3
                        </p>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            {/* </section> */}
        </>

    )

}

export default GalleryCards;