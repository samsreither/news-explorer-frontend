import author from '../../assets/self-pic.png';
import './About.css';

function About() {
    return (
        <section className="about">
            <img src={author} alt="author" className="about__image" />
            <div className="about__description">
                <h2 className="about__heading">About the author</h2>
                <p className="about__paragraph">Hello, I'm Sam. I'm a full stack developer with experience building websites and applications.</p>
                <p className="about__paragraph">I worked as a Math teacher for six years, and now I work as a Software Engineer.</p>
            </div>
        </section>
    )
}

export default About;