//put info in  variables
function set(){
var fullname = document.getElementsByName('fullname').value;
var profil = document.getElementsByName('profil').value;
var adresse = document.getElementsByName("adresse").value;
var phone = document.getElementsByName("phone").value;
var email = document.getElementsByName("email").value;
var date = document.getElementsByName("date").value;
var lang1 = document.getElementsByName("select1").value;

    if (document.getElementsByName('level1').disabled=false) {
        var level1 =  document.getElementsByName("level1").value;
    }else if (document.getElementsByName('level1')='') {}

    if (document.getElementsByName('select2').disabled=false) {
        var lang2 = document.getElementsByName("select2").value;

    }

    if (document.getElementsByName('level2').disabled=false) {
        var level2  = document.getElementsByName("level2").value;

    }

    if (document.getElementsByName('select3').disabled=false) {
        var lang3 = document.getElementsByName("select3").value;
    }

    if (document.getElementsByName('level3').disabled=false) {
        var level3  = document.getElementsByName("level3").value;
    }

var experience = document.getElementsByName("experience").value;
var formation = document.getElementsByName("formation").value;
var competence = document.getElementsByName("competence").value;
var qualite = document.getElementsByName("qualite").value;
var etat = document.getElementsByName("etat").value;
localStorage.setItem('fullname',fullname);
localStorage.setItem('profil',profil);
localStorage.setItem('adresse',adresse);
localStorage.setItem('email',email);
localStorage.setItem('date',date);
// localStorage.setItem('fullname',fullname);
// localStorage.setItem('fullname',fullname);
// localStorage.setItem('fullname',fullname);
// localStorage.setItem('fullname',fullname);
// localStorage.setItem('fullname',fullname);
// localStorage.setItem('fullname',fullname);
}


//make the select option disabled for languages

        document.getElementById("select2").disabled=true;
        document.getElementById("select3").disabled=true;
        document.getElementById("level1").disabled=true;
        document.getElementById("level2").disabled=true;
        document.getElementById("level3").disabled=true;


var select1=document.getElementById('select1');
select1.addEventListener("change",function(even){
    if(even.selectedIndex!=-1){
        document.getElementById("level1").disabled=false;
    }
});


var level1=document.getElementById('level1');
level1.addEventListener("change",function(even){
    if(even.selectedIndex!=-1){
        document.getElementById("select2").disabled=false;
    }
});

var select2=document.getElementById('select2');
select2.addEventListener("change",function(even){
    if(even.selectedIndex!=-1){
        document.getElementById("level2").disabled=false;
    }
});

var level2=document.getElementById('level2');
level2.addEventListener("change",function(even){
    if(even.selectedIndex!=-1){
        document.getElementById("select3").disabled=false;
    }
});

var select3=document.getElementById('select3');
select3.addEventListener("change",function(even){
    if(even.selectedIndex!=-1){
        document.getElementById("level3").disabled=false;
    }
});

function getSelectValue(select1){
    
        if(select1!=''){
            $("#select2 option[value='"+select1+"']").hide();
            $("#select3 option[value='"+select1+"']").hide();
        }
        
    
        if(select2!=''){
            $("#select1 option[value='"+select2+"']").hide();
            $("#select3 option[value='"+select2+"']").hide();
        }
    
        if(select3!=''){
            $("#select1 option[value='"+select3+"']").hide();
            $("#select2 option[value='"+select3+"']").hide();
        }

}
