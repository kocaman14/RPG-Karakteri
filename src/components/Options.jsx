export default function Options({ characterData }) {
  const attackOptions = characterData.attackOptions

  if (attackOptions === undefined) {
    throw Error('Yetenek verisi sağlanmadı.')
  }

  if (!Array.isArray(attackOptions)) {
    throw Error('Seçeneklere sağlanan veri türü geçersiz.')
  }

  if (
    attackOptions.filter(
      (item) => typeof item !== 'string' || item.trim().length === 0
    ).length > 0
  ) {
    throw Error('Seçeneklere sağlanan dizide geçersiz girişler.')
  }

  if (attackOptions.length !== 6) {
    throw Error('Geçersiz sayıda yetenek')
  }

  const options = attackOptions.map((option) => {
    return (
      <li className='option' key={crypto.randomUUID()}>
        {option}
      </li>
    )
  })

  const optionsGroupOne = options.slice(0, 3)
  const optionsGroupTwo = options.slice(3, 6)

  return (
    <div className='options-container'>
      <h3>Saldırı Seçenekleri</h3>
      <div>
        <ul>{optionsGroupOne}</ul>
        <ul>{optionsGroupTwo}</ul>
      </div>
    </div>
  )
}
