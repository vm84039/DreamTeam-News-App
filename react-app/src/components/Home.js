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
          <a style={{position:"absolute", right:"0", paddingRight:"10px"}} href="#">Login</a>
      </nav>

      <main>
          <article>
              <h2>Sample Article 1</h2>
              <p>Content of the article goes here.</p>
              <a href="https://google.com" target="_blank">Read More</a>
          </article>

          <article>
              <h2>Sample Article 2</h2>
              <p>Content of the article goes here.</p>
              <a href="https://baeldung.com" target="_blank">Read More</a>
          </article>

          <article>
              <h2>Sample Article 3</h2>
              <p>Content of the article goes here.</p>
              <a href="https://yahoo.com" target="_blank">Read More</a>
          </article>
      </main>

      <footer>
          <p>&copy; 2023 News Website</p>
      </footer>
    </div>
  )
}

export default Home