<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <EditItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
        <Tags />
        <Types :value.sync="record.type"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import EditItem from '@/components/Money/EditItem.vue';
  import {Component} from 'vue-property-decorator';

  @Component({
      components: {EditItem, Types, Tags,  NumberPad}
  })
  export default class Money extends Vue{
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
