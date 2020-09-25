<template>
  <Layout>
    <Tabs class-prefix="type" :value.sync="x" :data-source="array2"/>
    <Tabs class-prefix="interval" :value.sync="y" :data-source="array"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import {Component} from 'vue-property-decorator';
  import Types from '@/components/Money/Types.vue';

  @Component({
    components: {Types, Tabs}
  })
  export default class Statistics extends Vue {
    x = '-';
    y = 'day';
    array = [
      {text: '按天', value: 'day'},
      {text: '按周', value: 'week'},
      {text: '按月', value: 'month'}
    ];
    array2 = [
      {text: '支出', value: '-'},
      {text: '收入', value: '+'}
    ];
  };
</script>

<style lang="scss" scoped>
  ::v-deep {
    .type-type {
      height: 60px;
      display: flex;
      justify-content: center;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 80px;
        height: 2px;
        background: #333;
      }
      li {
        position: relative;
        padding: 22px 16px 6px 16px;;
      }
    }

    .interval-type {
      height: 45px;
      background: #c4c4c4;
      font-size: 18px;
      &.selected {
        background: white;
      }
      li {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>