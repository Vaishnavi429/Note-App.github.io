

let notesObj;
showNotes();

let addbtn= document.getElementById("addbtn");
addbtn.addEventListener("click",function(e)
{
  let addtxt=document.getElementById("addtxt")
  let notes= localStorage.getItem("notes");
  if(notes== null){
      notesObj=[];
  }
  else{
      notesObj=JSON.parse(notes);
  }
  notesObj.push(addtxt.value);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  addtxt= "";
  console.log(notesObj);
  showNotes();

  
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes== null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
      html +=`
      <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    
      <div class="card-body">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text"> ${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div> `;
        
    });
    let notesEle= document.getElementById('notes');
    if(notesObj.length!=0){
        notesEle.innerHTML=html;

    }
    else{
        notesEle.innerHTML=`No Note`;
    }
}

    function deleteNote(index){
        console.log("delete");
        let notes = localStorage.getItem("notes");
        if(notes== null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }
        notesObj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        showNotes();


    }

    let search = document.getElementById('searchtxt');
    search.addEventListener("input",function(){
        
         let inputVal= search.value
         console.log(inputVal);
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            let cardTxt = element.getElementsByTagName("p")[0].innerText;
            if(cardTxt.includes(inputVal)){
                element.style.display = "block";
            }
            
            else{
                element.style.display="none";
            }
            console.log(cardTxt);
        });
    })
    

