/**
 * 犬種の文字列を受け取り、fetch 関数を使って Dog API からその犬種の画像 URL のリストを取得
 * @param {string} breed - 犬種の文字列
 * @return {Array} - その犬種の画像 URL のリスト
 * `{"message":["https:\/\/images.dog.ceo\/breeds\/shiba\/shiba-1.jpg","https:\/\/images.dog.ceo\/breeds\/shiba\/shiba-10.jpg", ...],"status":"success"}`
 */
export async function fetchImages(breed) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/12`
  );
  const data = await response.json();
  return data.message;
}