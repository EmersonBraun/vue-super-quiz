<template>
    <div class="question">
        <span>{{ question.question }}</span>
        <pre class="code" v-if="question.code">
            {{ question.code }}
        </pre>
        <ul class="answers">
            <li v-for="(answer, i) in question.options" :key="answer.answer"
                @click="$emit('answered', answer.isCorrect)">
                <span class="number">{{ i + 1 }}</span>
                <span class="text">{{ answer.answer }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        question: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.question {
    color: #000;
    background-color: #FFF;
    min-width: 500px;
    min-height: 500px;
    border-radius: 20px;
    font-size: 2.5rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.code {
    background-color: #f5f8ff;
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1.4rem;
    text-align: left;
    margin: 1rem;
    color: #444;
}

ul.answers {
    font-size: 2rem;
    padding: 0;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    flex-wrap: wrap;
}

.answers li {
    margin: 20px;
    background-color: #89c454;
    border-radius: 8px;
    width: 40%;

    display: flex;
}

.answers .number {
    padding: 10px;
    background-color: #1e9c31;
    color: #FFF;
    flex-basis: 30px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.answers .text {
    flex: 1;
    align-self: center;
}
</style>
