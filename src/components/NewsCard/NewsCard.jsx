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

    // open link to web article
    const handleCardClick = ( )=> {
        window.open(card.link, '_blank')
    };

    // function to handle clicking bookmark button
    

    return (
        <li className="card">
            <img src={card.image} alt={card.title} className="card__image" onClick={handleCardClick} />
            <div className="card__content">
                <p className="card__date">{card.date}</p>
                <h2 className="card__title">{card.title}</h2>
                <p className="card__paragraph">{card.text}</p>
                <p className="card__source">{card.source}</p>
            </div>
            {/* render bookmark icon here if match, also handle clicking bookmark, adding to profile, etc. */}
        </li>
        // working on rendering card information!!
    )
}

export default NewsCard;