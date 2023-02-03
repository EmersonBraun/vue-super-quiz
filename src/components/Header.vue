<template>
    <div class="stats-bar">
        <span class="stat-bad">Wrong: {{ wrong }}</span>
        <span class="stat-good">Correct: {{ correct }}</span>
    </div>
</template>

<script>
export default {
    props: {
        correct: {
            type: Number,
            required: true
        },
        wrong: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.stats-bar {
    width: 100%;
    height: 50px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

.stat-bad {
    background-color: #f00;
    color: #FFF;
    padding: 5px 10px;
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 8px 0 0 8px;
}

.stat-good {
    background-color: #0f0;
    color: #FFF;
    padding: 5px 10px;
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 0 8px 8px 0;
}
</style>
