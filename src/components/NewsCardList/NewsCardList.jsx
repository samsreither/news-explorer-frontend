import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
    keyword, numberOfCards, newsArticles
}) {
    return (
        <ul className="cards__list">
            {newsArticles.slice(0, numberOfCards).map((article) => (
                <NewsCard 
                keyword={keyword}
                key={article._id}
                cardInfo={article}
                numberOfCards={numberOfCards}

                />
            ))}
        </ul>
    );
}

export default NewsCardList;