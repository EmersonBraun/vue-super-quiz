<template>
    <div class="result" :class="{wrong: !result}">
        <span v-if="result">Right answer :)</span>
        <span v-else>Wrong Answer :(</span>
        <hr>
        <button class="next" @click="$emit('confirmed')">Next question</button>
    </div>
</template>

<script>
export default {
    props: {
        result: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
    .result {
        min-height: 400px;
        color: #000;
        background-color: #FFF;
        min-width: 500px;
        border-radius: 20px;
        font-size: 5.5rem;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #89c454;
        color: #30863d;
    }

    .result hr {
        color: #FFF;
    }

    .result.wrong {
        background-color: #f05250;
        color: #bb2814;
    }


    .result button {
        outline: none;
        align-self: center;
        padding: 10px 20px;
        font-size: 1.7rem;
        border-radius: 8px;
        background-color: #FFF;
        color: #30863d;
        font-weight: 600;
    } 

    .result.wrong button {
        color: #bb2814;
    }

    .next {
        cursor: pointer;
    }
</style>
