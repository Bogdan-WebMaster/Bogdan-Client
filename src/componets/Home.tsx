import { Link } from "react-router-dom";
import { articles } from "../pages/data/articleData"
import { galleryData } from "../pages/data/galleryData";
import BeforeAfterDetailsPage from "../pages/before-after/BeforeAfter";
import GalleryCards from "./galleryCards/GalleryCards";
const Home = () => {

    return (
        <>
            <div>
                <h1>Все статьи</h1>
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <Link to={`/article/${article.id}`}>{article.title}</Link>
                        </li>
                    ))}
                </ul>
              
            </div>
          <BeforeAfterDetailsPage />
          <GalleryCards/> 
        </>

    )

}

export default Home;