Webcam.set({
    width:350,
    height:350, 
    image_format:"png",
    png_quality:90 
});//listas ={panchito, menganito, colifloor, floppy}

camera=document.getElementById("camara");

Webcam.attach("#camara");

function takephoto(){
    Webcam.snap(function(data_uri){
          document.getElementById("resultado").innerHTML='<img id="captured_image" scr="'+data_uri+'" />'
    });
   
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1ItJEl6oH/model.json",modelLoaded);  