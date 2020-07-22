<template>
    <Layout>
        <div>
            <ul class="types">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </div>
        <div class="tags">
            <ul class="current"></ul>
                <span>衣</span>
                <span>食</span>
                <span>住</span>
                <span>行</span>
            <div class="new">
                <button>新增标签</button>
            </div>
        </div>
        <div>
            <label class="notes">
                <span class="name">备注</span>
                <input type="text">
            </label>
        </div>
        <div class="nubmerPad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>完成</button>
                <button>.</button>
                <button>0</button>
                <button>清空</button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
  export default {
    name: 'money',
  };
</script>

<style lang="scss" scoped>
</style>