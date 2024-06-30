import { useState } from "react";
import { Link } from "react-router-dom";

import { data } from "../../../data";

import BackLogo from "@assets/images/icon-back.svg";
import CategoryLogo from "@assets/images/pick_category.svg";

import "./index.scss";

function CategoryGamePage() {
  const catObjects = Object.keys(data.categories).map((name, index) => ({
    name,
    id: index,
  }));

  const [categories] = useState(catObjects);
  console.log(categories);

  const listItems = categories.map((elem) => (
    <Link className="category__card" to={`/game/${elem.id}`} key={elem.id}>
      <p className="description"> {elem.name} </p>
    </Link>
  ));

  return (
    <section className="game_select__container">
      <div className="header">
        <Link className="back__btn__container" to="/">
          <img src={BackLogo} alt="back_btn" />
        </Link>

        <div className="logo__container">
          <img src={CategoryLogo} alt="pick_category" />
        </div>
      </div>

      <div className="category__container">{listItems}</div>
    </section>
  );
}

export default CategoryGamePage;
