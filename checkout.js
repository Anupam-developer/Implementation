//var loc=[1,5,7,9,11,13,17,15,3];

//isFound=false;
function search(id){
    var loc=Math.floor(Math.random()*40);
    console.log(loc);
    if(loc==id)
    //isFound=false;
    /*loc.forEach(el=>{
       if (el==id)
       {
          isFound=true;
       }
    });
    //if(isFound)
    //console.log(loc);*/
    
    {
       alert("Bravo you found a spy at: "+id);
    }else{
       alert("Not found any spy at: "+id);
    }
 
       
 }
