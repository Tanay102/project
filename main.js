Webcam.set(
    {
        height:300,
        width:350,
        image_format:'png',
        png_quality:190
});

Webcam.attach("#camera");

function take_snapshot()
{
Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+ data_url +"'>";
});
}
console.log("ml5.version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json", modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}

function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML= results[0].label;
        document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(2);
    }
}

//https://tanay102.github.io/Image-Identification/index.html//