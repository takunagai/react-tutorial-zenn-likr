function App() {
  return (
    <div>
      <header>
        <h1>Cute Dog Images</h1>
      </header>
      <main>
        <section>
          <figure>
            <img
              src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
              alt="cute dog"
            />
          </figure>
        </section>
      </main>
      <footer>
        <p>Dog images are retrieved from Dog API</p>
        <p><a href="https://dog.ceo/dog-api/about">Donate to Dog API</a></p>
      </footer>
    </div>
  );
}

export default App;