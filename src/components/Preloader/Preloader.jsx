import './Preloader.css';
import notFound from '../../assets/not-found.svg';

function Preloader({ isSearching, nothingFound }) {
  return (
    <div className="preloader">
      {isSearching && !nothingFound && (
        <div className="preloader__content preloader__content_type_searching">
          <i className="preloader__circle"></i>
          <p className="preloader__message">Searching for news...</p>
        </div>
      )}
      {nothingFound && (
        <div className="preloader__content preloader__content_type_nothing">
          <img
            className="preloader__image"
            alt="nothing found"
            src={notFound}
          />
          <h2 className="preloader__error-header">Nothing found</h2>
          <p className="preloader__error-message">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      )}
    </div>
  );
}

export default Preloader;