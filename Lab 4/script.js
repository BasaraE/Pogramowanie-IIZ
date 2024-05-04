function toggleColor(button) {
    const buttons = document.querySelectorAll('.fourth_task_btn');
    buttons.forEach(btn => {
        btn.style.backgroundColor = '';
    });
    button.style.backgroundColor = "#dd0000";
}

function task6() {
    let listText = document.getElementById("sixth_task_input").value;
    if (listText) {
        document.getElementById("sixth_task_list").innerHTML += 
            "<li>" +
                listText +
            "</li>"
        document.getElementById("sixth_task_input").value = '';
    }
}