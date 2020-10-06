<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <EditItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
        <Tags @update:value="onUpdateTags"/>
        <Tabs :value.sync="record.type" :data-source="recordTpeList"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import EditItem from '@/components/Money/EditItem.vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
      components: {Tabs, EditItem, Tags,  NumberPad}
  })
  export default class Money extends Vue{
      recordTpeList = recordTypeList;
      get recordList(){
          return this.$store.state.recordList;
      }
      record: RecordItem = {
          tags: [], notes: '', type: '-', amount: 0
      };
      created(){
          this.$store.commit('fetchRecords');
      }
      onUpdateNotes(value: string){
        this.record.notes = value;
      }
      onUpdateTags(value: string[]){
          this.record.tags = value;
      }
      saveRecord(){
        this.$store.commit('createRecord',this.record);
      }
  };
</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
        background: white;
    }
</style>
