function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    skillsMember.innerHTML = "";
    for (var i = 0; i < skills.value; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "col-md-4");
        div.innerHTML = '<div class="form-group"><label for="skill' + (i + 1) + '">Skill ' + (i + 1) + '</label><input type="text" class="form-control" id="skill' + (i + 1) + '" placeholder="Enter skill ' + (i + 1) + '"></div>';
        skillsMember.appendChild(div);
    }
}   