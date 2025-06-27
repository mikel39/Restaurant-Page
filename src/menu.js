import ceviche from "./images/pexels-nano-erdozain-120534369-31495673.png";
import lomo from "./images/pexels-nano-erdozain-120534369-28503590.png";
import aji from "./images/AdobeStock_370666751.png";
import huancaina from "./images/AdobeStock_356985455.png";

const menu = () => {
  const div = document.createElement("div");
  div.id = "menu-container";

  div.innerHTML = ` <h1>Main Dishes</h1>
      <div>
        <h2>Ceviche</h2>
        <p>
          Ceviche is a seafood dish where diced cubes of raw fish, marinated in
          a lemon or lime juice mixture, react with the citrus juices to cure
          the fish protein and causes it to become firm while
          absorbing flavor.
        </p>
        <img
          src="${ceviche}"
          alt="Ceviche"
        />
      </div>
      <div>
        <h2>Lomo Saltado</h2>
        <p>
          Lomo Saltado is essentially a stir-fry of marinated beef tenderloin
          (lomo) with onions, tomatoes, and often French fries, all cooked in a
          flavorful sauce
        </p>
        <img
          src="${lomo}"
          alt="lomo saltado"
        />
      </div>
      <div>
        <h2>Ají de Gallina</h2>
        <p>
          Aji de gallina is a creamy chicken stew featuring shredded chicken in
          a mildly spicy, yellow sauce made with aji amarillo peppers, bread,
          milk, and cheese.
        </p>
        <img src="${aji}" alt="aji de gallina" />
      </div>
      <div>
        <h2>Papa a la Huancaina</h2>
        <p>
          Papa a la Huancaína is a dish consisting of boiled potatoes covered in
          a creamy, spicy cheese sauce, typically served with lettuce, olives,
          and boiled eggs.
        </p>
        <img
          src="${huancaina}"
          alt="papa a la Huancaina"
        />
      </div>`;

  return div;
};

export { menu };
