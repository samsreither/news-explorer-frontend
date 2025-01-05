import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search-form">
            <input type="text" className="search-form__input" placeholder="Enter topic" />
            <button className="search-form__button" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;