<template>
  <Layout>
    <Tabs :value.sync="type" :data-source="recordTypeList"/>
    <Tabs class-prefix="interval" :value.sync="interval" :data-source="intervalList"/>
    type:{{type}}
    <br/>
    interval:{{interval}}
    <div>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3>{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id">
              {{item.tags}}
              {{item.notes}}
              {{item.amount}}
            </li>
          </ol>
        </li>
      </ol>
    </div>
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
    get recordList(){
      return (this.$store.state as RootState).recordList;
    }
    get result(){
      const {recordList} = this;
      type HashTableValue = {title: string, items: RecordItem[]}
      const hashTable: {[key: string]:HashTableValue} = {};
      for(let i=0; i<recordList.length; i++){
        const [date, time] = recordList[i].createdAt!.split('T');
        hashTable[date] = hashTable[date] || {title: date, items:[]};
        hashTable[date].items.push(recordList[i]);
      }
      return hashTable;
    }
    created(){
      this.$store.commit('fetchRecords');
    }
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