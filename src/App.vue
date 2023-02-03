<template>
	<div class="full-width">
		<div class="game">
			<h1>JavaScript Quiz</h1>
			<Header :wrong="wrong" :correct="correct" />
			<transition name="flip" mode="out-in">
				<Question v-if="questionMode" :question="questions[currentQuestion]" @answered="showResult" />
				<Result v-else :result="result" @confirmed="nextQuestion" />
			</transition>
		</div>
	</div>
</template>

<script>
import questions from './util/questions'
import Question from './components/Question.vue'
import Result from './components/Result.vue'
import Header from "./components/Header.vue";

export default {
	name: 'app',
	components: { Question, Result, Header },
	data() {
		return {
			result: false,
			questionMode: true,
			questions,
			totalAnswered: 0,
			currentQuestion: 0,
			correct: 0,
			wrong: 0,
		}
	},
	methods: {
		showResult(result) {
			this.result = result
			result ? this.correct++ : this.wrong++
			this.totalAnswered++
			this.questionMode = false
		},
		nextQuestion() {
			let r = Math.random() * this.questions.length
			this.currentQuestion = parseInt(r)
			this.questionMode = true
		},
		updateStatusBar() {
			const totalAnswered = this.correct + this.wrong
			const percentCorrect = this.correct / totalAnswered
			const percentWrong = this.wrong / totalAnswered

			const correctWidth = percentCorrect * 100
			const wrongWidth = percentWrong * 100

			const correctBar = document.querySelector('.stat-good')
			const wrongBar = document.querySelector('.stat-bad')

			correctBar.style.width = `${correctWidth}%`
			wrongBar.style.width = `${wrongWidth}%`
		},
	},
	watch: {
		correct() {
			this.updateStatusBar()
		},
		wrong() {
			this.updateStatusBar()
		}
	}
}
</script>

<style scoped>
.full-width {
	width: 90%;
}

.game {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	margin-bottom: 3rem;
}

@keyframes flip-out {
	from {
		transform: rotateY(0deg);
	}

	to {
		transform: rotateY(90g);
	}
}

@keyframes flip-in {
	from {
		transform: rotateY(90deg);
	}

	to {
		transform: rotateY(0g);
	}
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
