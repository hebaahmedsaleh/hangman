import "./index.scss";

import HowToPlayLogo from "@assets/images/How-to-play.svg";
import BackIcon from "@assets/images/icon-back.svg";

import { Link } from "react-router-dom";

function HowToPlay() {
  return (
    <section>
      <div className="header">
        <div className="back__btn__container" role="link">
          <Link to="/">
            <img src={BackIcon} alt="back_btn" />
          </Link>
        </div>
        <div className="logo__container">
          <img src={HowToPlayLogo} alt="How-to-play" />
        </div>
      </div>

      <div className="steps__container">
        <div className="step__card">
          <p className="number">01</p>

          <p className="type">Choose a category</p>

          <p className="description">
            First, like animals or movies. The computer then randomly selects a
            secret word from that topic and shows you blanks for each letter of
            the word.
          </p>
        </div>

        <div className="step__card">
          <p className="number">02</p>

          <p className="type">Guess letters</p>

          <p className="description">
            Take turns guessing letters. The computer fills in the relevant
            blank spaces if your guess is correct. If it's wrong, you lose some
            health, which empties after eight incorrect guesses.
          </p>
        </div>

        <div className="step__card">
          <p className="number">03</p>

          <p className="type">Win or lose</p>

          <p className="description">
            You win by guessing all the letters in the word before your health
            runs out. If the health bar empties before you guess the word, you
            lose.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowToPlay;
