
window.onload = function () {
    //for candidate
    var candidate_json = JSON.parse(data);
    console.log(candidate_json.length);
    fillcandidate(candidate_json);
    //for task
    var task_JSON = JSON.parse(mydata);
    console.log(task_JSON.length);
    filltask(task_JSON);

    // var tasklist_JSON = JSON.parse(tasklist);
    // console.log(tasklist_JSON.length);
   // tasktable(tasklist);

    var ele = document.getElementById('sel');
    for (var i = 0; i < candidate_json.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML +
            '<option value="' + candidate_json[i]['name'] + '">' + candidate_json[i]['name'] + '</option>';
    }



    //show the selected json data in a table



    var ele = document.getElementById('task');
    for (var i = 0; i < task_JSON.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML +
            '<option value="' + task_JSON[i]['task'] + '">' + task_JSON[i]['task'] + '</option>';
    }
}

//populate candidate on load in candidate table
function fillcandidate(candidate_json) {
    var totalstr = "";
    for (i = 0; i < candidate_json.length; i++) {
        let table_str = "<tr><td>" + candidate_json[i].id + "</td><td>" + candidate_json[i].id + "</td></tr>";
        totalstr += table_str;
        var table = document.getElementById("candidate_table");
        var table_len = table.children.length;
        var row = table.insertRow(table_len);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = candidate_json[i].id;
        cell2.innerHTML = candidate_json[i].name;
    }
}
function filltask(task_JSON) {
    var totalstr = "";
    for (i = 0; i < task_JSON.length; i++) {
        let table_str = "<tr><td>" + task_JSON[i].id + "</td><td>" + task_JSON[i].id + "</td></tr>";
        totalstr += table_str;
        var table = document.getElementById("task_table");
        var table_len = table.children.length;
        var row = table.insertRow(table_len);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = task_JSON[i].id;
        cell2.innerHTML = task_JSON[i].task;
    }
}




function submitfunction() {
   
    var candidatename = document.getElementById('sel').value;
    var taskname = document.getElementById('task').value;
    confirm("candidate name is"+candidatename+"And task is"+taskname);
   
    document.getElementById('candi').innerHTML=candidatename;
    
    

}






