export default function StatusBars({ characterData }) {
  const stats = characterData.stats;

  if (!characterData.noData) {
    switch (true) {
      case stats === undefined:
        throw Error("stats verisi yok.");
      case typeof stats !== "object" || Array.isArray(stats):
        throw Error("Geçersiz stats verisi.");
      case stats.hp === undefined:
        throw Error("hp değeri yok.");
      case stats.mp === undefined:
        throw Error("mp değeri yok .");
      case stats.strength === undefined:
        throw Error("strength değeri yok.");
      case stats.hp > 100 || stats.hp < 0 || typeof stats.hp != "number":
        throw Error("Geçersiz hp değeri.");
      case stats.mp > 100 || stats.mp < 0 || typeof stats.mp != "number":
        throw Error("Geçersiz mp değeri.");
      case stats.strength > 100 ||
        stats.strength < 0 ||
        typeof stats.strength != "number":
        throw Error("Geçersiz strength değeri.");
    }
  }

  const statBarElements = [];

  for (let stat in stats) {
    statBarElements.push(
      <div className="indiv-stat-bar-wrapper" key={crypto.randomUUID()}>
        <div className="indiv-stat-bar-container">
          <div
            className="stat-bar-fill"
            style={{
              width: `${stats[stat]}%`,
              background: stats[stat] < 50 ? "coral" : "lightgreen"
            }}
          >
            <span>{stats[stat]}</span>
          </div>
        </div>
        <div className="stat-name-container">{stat}</div>
      </div>
    );
  }

  return <div className="overall-status-bars-container">{statBarElements}</div>;
}
