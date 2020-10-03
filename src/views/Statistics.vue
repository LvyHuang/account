<template>
  <Layout>
    <Tabs :value.sync="type" :data-source="recordTypeList"/>
    <Tabs class-prefix="interval" :value.sync="interval" :data-source="intervalList"/>
    type:{{type}}
    <br/>
    interval:{{interval}}
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constants/recordTypeList';
  import intervalList from '@/constants/intervalList';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    intervalList = intervalList;
    recordTypeList = recordTypeList;
  };
</script>

<style lang="scss" scoped>
  ::v-deep {
    .interval-type {
      height: 45px;
      background: #c4c4c4;
      font-size: 17px;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        flex: 1;
        padding: 0;

        &.selected {
          border-bottom: 2px solid transparent;
          background: white;
        }
      }
    }
  }
</style>