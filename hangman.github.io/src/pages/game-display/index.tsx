import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import MenuModal from "../menu-modal";
import EndGameModal from "../game-end-modal";

import { data } from "../../../data";

import HeartLogo from "@assets/images/icon-heart.svg";
import MenuLogo from "@assets/images/icon-menu.svg";

import "./index.scss";

function GameDisplay() {
  const catObjects = Object.keys(data.categories).map((name, index) => ({
    name,
    id: index,
  }));

  let [lifes, setLifes] = useState(5);
  let [isOpen, setIsOpen] = useState(false);
  let [isEndOpen, setIsEndOpen] = useState(false);
  let [hasWon, setHasWon] = useState(0);

  const { id } = useParams();

  const category_name = catObjects.find(
    (elem: { name: string; id: number }) => elem.id === Number(id)
  )?.name;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const [selectedAlphabets, setSelectedAlphabets] = useState([]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const options = data.categories[category_name];

  const randomOption =
    options[Math.floor(Math.random() * options.length)]?.name?.split("");

  const wordLength = randomOption.length;

  const randomElement = randomOption.map((char: string) => ({
    char: char.toLowerCase(),
    guessed: false,
  }));

  const [words, setWords] = useState(randomElement);

  useEffect(() => {
    if (lifes === 0) {
      setIsEndOpen(true);
      setHasWon(2);
    }
  }, [lifes]);

  const onClick = (char: string) => {
    // both scenario
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setSelectedAlphabets([...selectedAlphabets, char]);
    // good scenario
    if (
      words?.find(
        (elem: { char: string; guessed: boolean }) =>
          elem.char.toLowerCase() === char.toLowerCase()
      )
    ) {
      const test = words.map((elem: { char: string; guessed: boolean }) => {
        if (elem.char === char) {
          return {
            char,
            guessed: true,
          };
        } else return elem;
      });
      setWords(test);

      if (test.every((t: { guessed: boolean }) => t.guessed)) {
        setHasWon(1);
        setIsEndOpen(true);
      }
    }
    // bad scenario
    else {
      setLifes(lifes - 1);
    }
  };
  const listItems = alphabet.map((char: string) => (
    <button
      onClick={() => onClick(char)}
      className="word__container"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      disabled={!!selectedAlphabets.includes(char)}
      key={char}
    >
      {char}
    </button>
  ));

  const guessedWord = words?.map(
    (item: { guessed: boolean; char: string }, index: number) => {
      if (item.char == " ") {
        return (
          <div
            key={index}
            style={{ visibility: "hidden", height: "109px", width: "109px" }}
          />
        );
      } else {
        return (
          <div className="char__container" key={index}>
            <div> {item.guessed ? item.char : ""} </div>
          </div>
        );
      }
    }
  );

  return (
    <>
      <div className="game__container" id="modal">
        <div className="header">
          <section className="header__container">
            <div className="back__btn__container" role="link">
              <span className="logo__container" onClick={() => setIsOpen(true)}>
                <img src={MenuLogo} alt="menu" />
              </span>
            </div>
            <h1 className="game__title">{category_name}</h1>
          </section>
          <section className="header__container">
            <progress className="lives-progress" value={lifes} max={5} />
            <img src={HeartLogo} alt="heart" />
          </section>
        </div>

        <section
          className="alphabet__container"
          style={{ justifyContent: "center" }}
        >
          {guessedWord}
        </section>
        <section className="alphabet__container"> {listItems}</section>
      </div>
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <EndGameModal
        isEndOpen={isEndOpen}
        setIsEndOpen={setIsEndOpen}
        hasWon={hasWon === 2 ? false : true}
      />
    </>
  );
}

export default GameDisplay;
