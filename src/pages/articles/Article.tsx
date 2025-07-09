import cl from "./style.module.css"

interface IArticle {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
type TProps = {
  article: IArticle
}
const Article: React.FC<TProps> = ({ article }) => {
  return (
    <main className={cl.article}>
      <img src={article.imageUrl} alt={article.title} className={cl.article__img} />
      <div className={cl.article__content}>
        <h2 className={cl.article__title}>
          {article.title}
        </h2>

        <p className={cl.article__desc}>
          {article.description}
        </p>
      </div>
    </main>

  );
};

export default Article;