function show()
  {

   if(submit.value!="submit")
   {
     submit.value = "submit";
   }


     
   var x = document.getElementById("tasks").value;
   var ul = document.getElementById("item_show");
   var li = document.createElement("li");
   var editbtn = document.createElement("button")
   var delbtn = document.createElement("button")
    
   li.className = "style_li";
   editbtn.className = "edit";
   delbtn.className = "del";

   delbtn.addEventListener("click", remove_item);

    document.getElementById("tasks").value = "";
    editbtn.appendChild(document.createTextNode("Edit"));
    delbtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(document.createTextNode(x));
    li.appendChild(editbtn);
    li.appendChild(delbtn);
    ul.appendChild(li);

    delbtn.addEventListener("click",remove_item);
    editbtn.addEventListener("click",edit_item);
}

function remove_item(e)
{
  item_show.removeChild(e.target.parentNode);
}

function edit_item(e)
{
  var content = e.target.parentNode.childNodes[0].data;
  document.getElementById("submit").value = "Edit";
  document.getElementById("tasks").value = content;
  item_show.removeChild(e.target.parentNode);
}






    

 

