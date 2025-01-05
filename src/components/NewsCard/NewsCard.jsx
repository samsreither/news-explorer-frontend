import React from "react";
import './NewsCard.css';

function NewsCard({
    cardInfo,
    keyword
}) {
    const card = 'publishedAt' in cardInfo ? {
        keyword,
        title: cardInfo.title,
        text: cardInfo.description,
        date: cardInfo.publishedAt,
        source: cardInfo.source.name,
        link: cardInfo.url,
        image: cardInfo.urlToImage,
    } : cardInfo;

    return (
        <li className="card">
            <img src={card.image} alt={card.title} className="card__image" />
            <div className="card__content">
                <p className="card__date">{card.date}</p>
                <h2 className="card__title">{card.title}</h2>
                <p className="card__paragraph">{card.text}</p>
                <p className="card__source">{card.source}</p>
            </div>
        </li>
        // working on rendering card information!!
    )
}

export default NewsCard;