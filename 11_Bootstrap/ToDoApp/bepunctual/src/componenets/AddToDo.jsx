function AddToDo(){
  return <div class="row">
  <div class="col-4"><input type="text" placeholder="Type Your Task Here"/> </div>
  <div class="col-4"><input type="date" name="date" id="taskdate" /></div>
  <div class="col-2"><button type="button" class="btn btn-dark">Add Task</button></div>
</div>
};

export default AddToDo;