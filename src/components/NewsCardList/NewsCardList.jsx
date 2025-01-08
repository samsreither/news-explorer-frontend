import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ keyword, numberOfCards, newsArticles, handleSeeMoreClick, handleDeleteButtonClick }) {
  return (
    <section className="cards">
      <h2 className="cards__title">Search results</h2>
      <ul className="cards__list">
        {newsArticles.slice(0, numberOfCards).map((article) => (
          <NewsCard
            keyword={keyword}
            key={article._id}
            cardInfo={article}
            numberOfCards={numberOfCards}
            handleDeleteButtonClick={handleDeleteButtonClick}
            handleSeeMoreClick={handleSeeMoreClick}
          />
        ))}
      </ul>
      {numberOfCards < newsArticles.length && (
        <button className="cards__button" onClick={handleSeeMoreClick}
        type="button">
          See more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
