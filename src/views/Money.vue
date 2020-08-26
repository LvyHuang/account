<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @update:value="onUpdateAmount" @submit="saveRecord"/>
        <EditItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <Types :value.sync="record.type"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import EditItem from '@/components/Money/EditItem.vue';
  import recordListModel from '@/models/recordListModel';
  import tagListModel from '@/models/tagListModel';
  import {Component, Watch} from 'vue-property-decorator';
  const recordList = recordListModel.fetch();
  const tagList = tagListModel.fetch();

  @Component({
      components: {EditItem, Types, Tags,  NumberPad}
  })
  export default class Money extends Vue{
      tags = tagList;
      recordList: RecordItem[] = recordList;
      record: RecordItem = {
          tags: [], notes: '', type: '-', amount: 0
      };

      onUpdateTags(value: string[]){
        this.record.tags = value;
      }
      onUpdateNotes(value: string){
        this.record.notes = value;
      }
      onUpdateAmount(value: string){
        this.record.amount = parseFloat(value);
      }
      saveRecord(){
          const record2: RecordItem = JSON.parse(JSON.stringify(this.record));
          record2.createdAt = new Date();
          this.recordList.push(record2);
      }

      @Watch('recordList')
      onRecordListChange(){
          recordListModel.save(this.recordList);
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
