import "./HowToPlay.scss";

import HowToPlayLogo from "./assets/images/How-to-play.svg";
import BackIcon from "./assets/images/icon-back.svg";

import { Link } from "react-router-dom";

function HowToPlay() {
  return (
    <section>
      <div class="header">
        <div class="back__btn__container" role="link">
          <Link to="/">
            <img src={BackIcon} alt="back_btn" />
          </Link>
        </div>
        <div class="logo__container">
          <img src={HowToPlayLogo} alt="How-to-play" />
        </div>
      </div>

      <div class="steps__container">
        <div class="step__card">
          <p class="number">01</p>

          <p class="type">Choose a category</p>

          <p class="description">
            First, like animals or movies. The computer then randomly selects a
            secret word from that topic and shows you blanks for each letter of
            the word.
          </p>
        </div>

        <div class="step__card">
          <p class="number">02</p>

          <p class="type">Guess letters</p>

          <p class="description">
            Take turns guessing letters. The computer fills in the relevant
            blank spaces if your guess is correct. If it's wrong, you lose some
            health, which empties after eight incorrect guesses.
          </p>
        </div>

        <div class="step__card">
          <p class="number">03</p>

          <p class="type">Win or lose</p>

          <p class="description">
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
