// perview the image
const imgDiv = document.querySelector('.user-img');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');





file.addEventListener('change',function(){
    const chooseFile = this.files[0];

    if(chooseFile){
        const reader = new FileReader();
        reader.addEventListener('load',function(){
            localStorage.setItem('photo',reader.result);
            img.setAttribute('src',reader.result);
        });
        reader.readAsDataURL(chooseFile);

    }
});
