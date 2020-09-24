let id:number = parseInt(window.localStorage.getItem('_idMax') || '4') || 4;
function createId(){
  id++;
  window.localStorage.setItem('_idMax',id.toString());
  return id;
}
export default createId;