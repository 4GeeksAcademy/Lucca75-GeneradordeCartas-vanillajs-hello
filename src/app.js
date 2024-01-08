function generateRandomCard() {
  const suits = ["♥", "♦", "♣", "♠"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("card");
  card.className = "card";

  const center = document.createElement("div");
  center.className = "suit center";
  center.innerHTML = `<div class="value">${randomValue}</div>`;
  card.appendChild(center);

  const upperLeft = document.createElement("div");
  upperLeft.className = "suit upper-left";
  upperLeft.innerHTML = randomSuit;
  card.appendChild(upperLeft);

  const lowerRight = document.createElement("div");
  lowerRight.className = "suit lower-right";
  lowerRight.innerHTML = randomSuit;
  card.appendChild(lowerRight);
}
