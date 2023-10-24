import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
      <header>
          <h1>News Website</h1>
      </header>

      <nav>
          <a href="#">Home</a>
          <a href="#">World</a>
          <a href="#">Technology</a>
          <a href="#">Sports</a>
          <a href="#">Entertainment</a>
      </nav>

      <main>
          <article>
              <h2>Sample Article 1</h2>
              <p>Content of the article goes here.</p>
          </article>

          <article>
              <h2>Sample Article 2</h2>
              <p>Content of the article goes here.</p>
          </article>

          <article>
              <h2>Sample Article 3</h2>
              <p>Content of the article goes here.</p>
          </article>
      </main>

      <footer>
          <p>&copy; 2023 News Website</p>
      </footer>
    </div>
  )
}

export default Home