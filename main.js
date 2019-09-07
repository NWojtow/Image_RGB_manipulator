function negative(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i+1] = 255 - imgData.data[i+1];
        imgData.data[i+2] = 255 - imgData.data[i+2];
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}

function colorRed(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i];
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 0;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}
function colorGreen(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 0;
        imgData.data[i+1] = imgData.data[i+1];
        imgData.data[i+2] = 0;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}

function colorBlue(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 0;
        imgData.data[i+1] = 0;
        imgData.data[i+2] = imgData.data[i+2];
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}


function grey(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        var grey = (imgData.data[i]*0.299)+(imgData.data[i+1]*0.587)+(imgData.data[i+2]*0.114);
        imgData.data[i] = grey;
        imgData.data[i+1] = grey;
        imgData.data[i+2] = grey;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}

function brightness(){
    var change = parseFloat(prompt("Podaj stopien zmiany jasnosci"));

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = (imgData.data[i]+change);
        imgData.data[i+1] = (imgData.data[i+1]+change);
        imgData.data[i+2] = (imgData.data[i+2]+change);
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}
function contrast(){
    var contrast = parseFloat(prompt("Podaj kontrast"));

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i]-128;
        imgData.data[i+1] = imgData.data[i+1]-128;
        imgData.data[i+2] = imgData.data[i+2]-128;

        imgData.data[i] = imgData.data[i]*contrast;
        imgData.data[i+1] = imgData.data[i+1]*contrast;
        imgData.data[i+2] = imgData.data[i+2]*contrast;

        imgData.data[i] = imgData.data[i]+128;
        imgData.data[i+1] = imgData.data[i+1]+128;
        imgData.data[i+2] = imgData.data[i+2]+128;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}


function download(){
    var download = document.getElementById("download");
    var image = document.getElementById("myCanvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);

}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#scream')
                .attr('src', e.target.result)
                .width(220)
                .height(277);
        };

        reader.readAsDataURL(input.files[0]);
    }
}