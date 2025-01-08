import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews({
  newsArticles,
  isLoggedIn,
  handleSigninClick,
  handleDeleteButtonClick,
}) {
  return (
    <section className="saved-news">
      <SavedNewsHeader newsArticles={newsArticles} />
      <NewsCardList
        handleDeleteButtonClick={handleDeleteButtonClick}
        newsArticles={newsArticles}
        isLoggedIn={isLoggedIn}
        handleSigninClick={handleSigninClick}
      />
    </section>
  );
}

export default SavedNews;
