// this is a questions today
const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "O que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

