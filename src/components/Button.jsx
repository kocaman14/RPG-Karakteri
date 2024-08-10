import attackOptionsList from '../data/attackOptionsList'
import namesList from '../data/namesList'

export default function Button({ setCharacterData }) {
  function toggle() {
    setCharacterData((prevData) => {
      function genRanNum(max) {
        return Math.floor(Math.random() * max)
      }

      function flipCoin() {
        return genRanNum(100) < 50 ? true : false
      }

      function getRandomAttackOption(optionsList) {
        const randomIndex = Math.floor(Math.random() * optionsList.length)
        const selectedOption = optionsList[randomIndex]
        const remainingOptions = optionsList.filter(
          (_, index) => index !== randomIndex
        )
        return { selectedOption, remainingOptions }
      }

      function getAttackOptions() {
        let optionsListCopy = [...attackOptionsList]

        const newOptionsArray = Array.from({ length: 6 }).map(() => {
          const { selectedOption, remainingOptions } =
            getRandomAttackOption(optionsListCopy)
          optionsListCopy = remainingOptions
          return selectedOption
        })

        return newOptionsArray
      }

      return {
        hat: flipCoin(),
        shield: flipCoin(),
        weapon: flipCoin() ? 'sword' : 'staff',
        stats: {
          hp: genRanNum(100),
          mp: genRanNum(100),
          strength: genRanNum(100),
        },
        attackOptions: getAttackOptions(),
        name: namesList[genRanNum(namesList.length)],
      }
    })
  }

  return <button onClick={toggle}>Değiştir</button>
}
