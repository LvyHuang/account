type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: Date   //类 / 构造函数
}
type Tag = {
  id: string,
  name: string
}