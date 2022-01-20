function Header () {
	return (
		<header className="hero is-dark is-bold">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">Cute Dog Images</h1>
				</div>
			</div>
		</header>
	);
}

function Image (props) {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image">
					<img src={props.src} alt="cute dog" />
				</figure>
			</div>
		</div>
	);
}

function Gallery () {
	const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
	return (
		<div className="columns is-vcentered is-multiline">
			<div className="column is-3">
				<Image src={url}/>
			</div>
		</div>
	);
}

function Main () {
	return (
		<main>
			<section className="section">
				<div className="container">
					<Gallery/>
				</div>
			</section>
		</main>
	);
}

function Footer () {
	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<p>Dog images are retrieved from Dog API</p>
				<p>
					<a href="https://dog.ceo/dog-api/about">Donate to Dog
						API</a>
				</p>
			</div>
		</footer>
	);
}

function App () {
	return (
		<div>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	);
}

export default App;