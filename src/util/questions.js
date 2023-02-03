
import { withCode } from "./withCode";
import { withoutCode } from "./withoutCode";

export default [
    ...withCode,
    ...withoutCode
]

// const questions = []
// document.querySelectorAll('.ibpage-mcq-problems__item').forEach((item, index) => {
//     const question = item.querySelector('.ibpage-mcq-problems__header > div > p').innerText
//     const code = item.querySelector('.ibpage-mcq-problems__header > div > pre > code')?.innerText || null

//     const options = []
//     item.querySelectorAll('.ibpage-mcq-problems__options').forEach((option, index) => {
//         const isCorrect = option.dataset.correct === 'true'
//         const answer = option.querySelector('.ibpage-mcq-problems__checkbox-content > p').innerText
//         options.push({ isCorrect, answer })
//     })
//     questions.push({ question, code, options })
// })
// console.log(JSON.stringify(questions))