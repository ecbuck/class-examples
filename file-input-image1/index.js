const uploadButtonElement=document.querySelector('#uploadButton');
const fileInputElement= document.querySelector('#button');
const imageElement=document.querySelector('#picture');

uploadButtonElement.addEventListener('click' ,function (e){
    fileInputElement.click();
});

function  fileChanged(e){
    const file=e.files[0];
    const reader= new FileReader();

    reader.onload= function(e){
        const dataUrl= e.currentTarget.result;
        imageElement.src=dataUrl;
    

    };
    
    reader.readAsDataURL(file);
};

