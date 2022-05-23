const messages = [
  "Oscar",
  "Anna",
  "Yassica",
  "Diego",
  "Laura",
  "carolina",
  "paulina"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }