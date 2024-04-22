

// function get(){
//     var xhttp= new XMLHttpRequest;
//     xhttp.onreadystatechange=function(){
//         if(xhttp.readyState==4 && xhttp.status==200)
//         document.querySelector("#demo").innerHTML=xhttp.responseText;

//     }
//     xhttp.open("Get","https://jsonplaceholder.typicode.com/photos",true);
//     xhttp.send();
// }

// ========================================================================\
fetch('https://jsonplaceholder.typicode.com/photos')
.then((ahmed)=>{
    return ahmed.json();
})
.then((mohamed)=>{
  document.querySelector(".test img").src =mohamed[0].url;
  document.querySelector(".test h2").innerHTML=mohamed[0].title;
  document.querySelector(".test h5").innerHTML=mohamed[0].id;  
})
// ==============================================================================
async function getCar(){
    var ahmed= await fetch("https://jsonplaceholder.typicode.com/photos");
    var mohamed = await ahmed.json();
    var text="";
    for(var i=0 ; i<mohamed.length; i++)                                                        {
        var cartoona=`
                        <div class="col-md-4  text-center my-4">
                        <img class="img-fluid"  src="${mohamed[i].url}" >
                        <h2>${mohamed[i].title}</h2>
                        <h5>${mohamed[i].id}</h5>
                         </div>    
                     `;
           text=text+cartoona          
    }
    document.querySelector(".car").innerHTML=text;
}

getCar()











