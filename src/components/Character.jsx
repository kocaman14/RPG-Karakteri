export default function Character({ characterData }) {
  if (!characterData.noData) {
    switch (true) {
      case characterData.hat === undefined:
        throw Error("hat değeri sağlanmamış.");
      case characterData.shield === undefined:
        throw Error("shield değeri sağlanmamış.");
      case characterData.weapon === undefined:
        throw Error("weapon değeri sağlanmamış.");
      case characterData.name === undefined:
        throw Error("name değeri sağlanmamış.");
      case typeof characterData.name !== "string":
        throw Error("Geçersiz name değeri.");
      case characterData.name.trim().length < 2:
        throw Error("Geçersiz name uzunluğu.");
      case typeof characterData.hat !== "boolean":
        throw Error("Geçersiz hat değeri.");
      case typeof characterData.shield !== "boolean":
        throw Error("Geçersiz shield değeri.");
      case characterData.weapon !== "sword" && characterData.weapon !== "staff":
        throw Error("Geçersiz weapon değeri.");
    }
  }

  const hat = characterData.hat ? "hat" : "noHat";
  const shield = characterData.shield ? "shield" : "noShield";
  const weapon = characterData.weapon;

  const characterImageUrl = characterData.noData
    ? null
    : "./images/" + hat + "-" + shield + "-" + weapon + ".png";

  return (
    <div className="character-container">
      <img src={characterImageUrl} />
      <div className="character-name">{characterData.name}</div>
    </div>
  );
}
