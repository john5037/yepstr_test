import {API} from './Constant';

export const drawCard = (deckID: string) =>
  fetch(`${API}/${deckID}/draw/?count=1`).then((res) => res.json());

export const arrangeCards = () => {
  return fetch(`${API}/new/shuffle/`).then((response)=>response.json());
}