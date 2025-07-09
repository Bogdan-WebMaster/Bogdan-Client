import { useParams } from "react-router-dom";
import { articles } from "../data/articleData";
import Article from "./Article";

const ArticlePage = () => {
    const { id } = useParams();
    const article = articles.find((item) => item.id === Number(id));
  
    if (!article) return <div>Статья не найдена!</div>;
  
    return <Article article={article} />;
  };

  export default ArticlePage