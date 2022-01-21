import { useEffect, useState } from "react";
import { fetchImages } from "./api";

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
					<img src={props.src} alt="cute dog"/>
				</figure>
			</div>
		</div>
	);
}

function Loading () {
	return <p>Loading...</p>
}

function Gallery (props) {
	const urls = props.urls;

	if (urls === null) {
		return <Loading />;
	}

	return (
		<div className="columns is-vcentered is-multiline">
			{urls.map((url) => {
				return (
					<div key={url} className="column is-3">
						<Image src={url}/>
					</div>
				);
			})}
		</div>
	);
}

function Main () {

	// useState の引数は状態の初期値
	// 戻り値：現在の状態の値, 状態を更新する関数
	// setUrls()　で状態を更新するたびにこのコンポーネントの関数が実行、
	//   現在の状態を反映した JSX 式が返される
	const [urls, setUrls] = useState(null);

	// Dog API から柴犬の画像を取得 (コンソールで確認。ログを表示にすること)
	// 第1引数: 副作用を起こす関数
	// 第2引数: その副作用が依存する値のリストの配列(値が変わると再度副作用を起こす)
  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      // console.log(urls);
			setUrls(urls);
    });
  }, []);

	return (
		<main>
			<section className="section">
				<div className="container">
					<Gallery urls={urls}/>
				</div>
			</section>
		</main>
	);
}

function Footer () {
	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<p>Dog images are retrieved from <a href="https://dog.ceo/dog-api/about">Dog API</a></p>
			</div>
		</footer>
	);
}

function App () {
	return (
		<>
			<Header/>
			<Main/>
			<Footer/>
		</>
	);
}

export default App;