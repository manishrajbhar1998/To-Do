// adding section
var add_btn = document.getElementById("add-btn");
add_btn.onclick = function (e) {
  e.preventDefault();
  var text = document.getElementById("add-input").value;
  if(text == ""){
    alert("Please enter Question");
  }else{
    var list_item = document.createElement("li");
    list_item.setAttribute("class", "list-item");
    list_item.setAttribute("style","margin - bottom:500px;");
    var para = document.createElement("p");
    para.setAttribute("class", "text");

    var content = document.createTextNode(text);
    para.append(content);

    var p_wrap = document.createElement("p");

    var i_pen = document.createElement("i");
    var i_time = document.createElement("i");
    i_pen.setAttribute("class", "fas fa-pen-square");
    i_time.setAttribute("class", "fas fa-times");

    p_wrap.append(i_pen);
    p_wrap.append(i_time);

    var input = document.createElement("input");
        input.setAttribute("name","");

    list_item.append(para);
    list_item.append(p_wrap);
    list_item.append(input);
    var list = document.getElementById("list").append(list_item);
  }

  // delete
  var del = document.querySelectorAll(".fa-times");
  for (var i = 0; i < del.length; i++) {
    del[i].onclick = function () {
      this.parentElement.parentElement.style.display = "none";
    };
  }

 // edit section
  var edit = document.querySelectorAll(".fa-pen-square");
  for (var i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
      var ref = this.parentElement.previousElementSibling.textContent;
      var input = this.parentElement.nextElementSibling;
      input.style.display = "block";
      input.value = ref;
      document.onkeyup = function (eve) {
        if (eve.keyCode === 13) {
          eve.preventDefault();
          console.log(input.value);
          input.previousElementSibling.previousElementSibling.textContent =
            input.value;
          input.style.display = "none";
        }
      };
    };
  }
};

// hiding section
var hide = document.getElementById("hide-list");
hide.onclick = function () {
  var list = document.getElementById("list");
  var checkbox = document.querySelector("input#hide");
  if (checkbox.checked == true) {
    checkbox.checked = false;
    list.style.display = "none";
  } else {
    checkbox.checked = true;
    list.style.display = "block";
  }
};

// deleting items
var del = document.querySelectorAll(".fa-times");
for (var i = 0; i < del.length; i++) {
  del[i].onclick = function () {
    this.parentElement.parentElement.style.display = "none";
  };
}

// edit section
var edit = document.querySelectorAll(".fa-pen-square");
for (var i = 0; i < edit.length; i++) {
  edit[i].onclick = function () {
    var ref = this.parentElement.previousElementSibling.textContent;
    console.log(edit[i]);
    var input = this.parentElement.nextElementSibling;
    input.style.display = "block";
    input.value = ref;
    document.onkeyup = function (eve) {
      if (eve.keyCode === 13) {
        eve.preventDefault();
        console.log(input.value);
        input.previousElementSibling.previousElementSibling.textContent =
          input.value;
        input.style.display = "none";
      }
    };
  };
}
// search filter
var search = document.querySelector("#search");
search.onkeyup = function () {
  var filter = search.value.toUpperCase();
  var list_item = document.querySelectorAll(".list-item");
  for(var i=0;i<list_item.length;i++){
    var item = list_item[i].getElementsByClassName("text")[0].textContent.toUpperCase();
    if(item.indexOf(filter) > -1){
      list_item[i].style.display = "";
    }else{
      list_item[i].style.display = "none";
    }
  }
};
