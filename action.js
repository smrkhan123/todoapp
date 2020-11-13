var tsk = [];
var chk = [];
function addTask() {
    tsk.push(document.getElementById("task").value);
    show();
    
}
function show() {
    var html = "";
        for(var i = 0; i<tsk.length; i++ ){
        html += "<li id='li"+i+"'><input type='checkbox' id='task"+i+"' onclick='check("+i+")'>"+ tsk[i] + "<button type='button' onclick='edit("+i+")'>Edit</button><button type='button' onclick='del("+i+")'>Delete</button></li>";
    }
    document.getElementById("taskstocomplete").innerHTML = html;
}
function edit(id) {
    document.getElementById('form').innerHTML = "Update Task: <input type='text' id='task' value='"+tsk[id]+"'><input type='button' onclick='update("+id+")' id='submit' value='Update'>"
}

function update(id) {
    tsk[id] = document.getElementById("task").value;
    show();
}

function del(id) {
   tsk.splice(id,1);
   show();
}
function check(id){
    chk.push(tsk[id]);
    tsk.splice(id,1);
    show();
    var html = "";
    for(var i = 0; i<chk.length; i++){
        html += "<li><input type='checkbox' id='"+ id +"' onclick='uncheck("+ id +")' checked>"+ chk[id] + "<button type='button' onclick='edit'>Edit</button><button type='button' onclick='delete'>Delete</button></li>";
    }
    document.getElementById("completedTasks").innerHTML = html;
}
function uncheck(value) {
    tsk.push(chk[value]);
    show();
    chk.splice(value,1);
    var html = "";
    for(var i = 0; i<chk.length; i++){
        html += "<li><input type='checkbox' id='"+ id +"' onclick='uncheck("+ id +")' checked>"+ chk[id] + "<button type='button' onclick='edit'>Edit</button><button type='button' onclick='delete'>Delete</button></li>";
    }
    document.getElementById("completedTasks").innerHTML = html;
}