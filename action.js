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
    document.getElementById('form').innerHTML = "Add Task: <input type='text' id='task'><input type='button' onclick='addTask()' id='submit' value='Submit'>"
}

function del(id) {
   tsk.splice(id,1);
   show();
}
function check(id){
    chk.push(tsk[id]);
    console.log(chk);
    tsk.splice(id,1);
    show();
    var html = "";
    for(var i = 0; i<chk.length; i++){
        html += "<li><input type='checkbox' id='"+ id +"' onclick='uncheck("+ i +")' checked>"+ chk[i] + "<button type='button' onclick='edt("+i+")'>Edit</button><button type='button' onclick='dlt("+i+")'>Delete</button></li>";
    }
    document.getElementById("completedTasks").innerHTML = html;
}
function uncheck(value) {
    tsk.push(chk[value]);
    show();
    chk.splice(value,1);
    var html = "";
    for(var i = 0; i<chk.length; i++){
        html += "<li><input type='checkbox' id='"+ i +"' onclick='uncheck("+ i +")' checked>"+ chk[i] + "<button type='button' onclick='edt("+i+")'>Edit</button><button type='button' onclick='dlt("+i+")'>Delete</button></li>";
    }
    document.getElementById("completedTasks").innerHTML = html;
}
function dlt(id) {
    chk.splice(id,1);
    var html = "";
    for(var i = 0; i<chk.length; i++){
        html += "<li><input type='checkbox' id='"+ id +"' onclick='uncheck("+ i +")' checked>"+ chk[i] + "<button type='button' onclick='edt("+i+")'>Edit</button><button type='button' onclick='dlt("+i+")'>Delete</button></li>";
    }
    document.getElementById("completedTasks").innerHTML = html;
}
function edt(id) {
    document.getElementById('form').innerHTML = "Update Task: <input type='text' id='task' value='"+chk[id]+"'><input type='button' onclick='updt("+id+")' id='submit' value='Update'>"
}
function updt(id) {
    chk[id] = document.getElementById("task").value;
    var html = "";
    for(var i = 0; i<chk.length; i++){
        html += "<li><input type='checkbox' id='"+ id +"' onclick='uncheck("+ i +")' checked>"+ chk[i] + "<button type='button' onclick='edt("+i+")'>Edit</button><button type='button' onclick='dlt("+i+")'>Delete</button></li>";
    }
    document.getElementById("completedTasks").innerHTML = html;
    document.getElementById('form').innerHTML = "Add Task: <input type='text' id='task'><input type='button' onclick='addTask()' id='submit' value='Submit'>"
}