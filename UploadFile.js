

const imgDiv = document.querySelector('.user-img');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');



// perview the image

file.addEventListener('change',function(){
	const chooseFile = this.files[0];

	if(chooseFile){
		const reader = new FileReader();
		reader.addEventListener('load',function(){
			img.setAttribute('src',reader.result);
		});
		reader.readAsDataURL(chooseFile);

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



