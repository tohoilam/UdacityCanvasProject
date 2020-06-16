const submitButton = document.querySelector('#sizePicker [type="submit"]');
const canvas = document.querySelector('#pixelCanvas');
const colorButton = document.querySelector('#colorPicker');
var firstTable = true;
var height = 0;
var width = 0;
var color = "#000000";

//when submit is clicked
function submit(event) {
    event.preventDefault(); //prevent this function being run without being clicked

    if (firstTable === false){
        removeGrid(width, height);
    }
    
    //input of height and width
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    
    makeGrid(width, height);

    applyColorEventListen(color);

    firstTable = false;
    
};

//function to remove grid
function removeGrid(width, height){
    for (var i = 0; i < height; i++){
        for (var j = 0; j< width; j++){
            canvas.firstElementChild.firstElementChild.remove();
        };
        canvas.firstElementChild.remove();
    };
}

//function to make grid
function makeGrid(width, height){
    for (var i = 0; i < height; i++){
        canvas.appendChild(document.createElement('tr'));
        for (var j = 0; j < width; j++){
            document.querySelector('tr:last-child').appendChild(document.createElement('td'));
        };
    };
};

//function to listen for color input
function colorInput(event){
    color = colorButton.value;
    if (height > 0 && width > 0){
        applyColorEventListen(color);
    }
}

//function to lsiten for clicks to apply color
function applyColorEventListen(color){
    document.querySelectorAll('tr').forEach(function(i){
        i.querySelectorAll('td').forEach(function(j){
            j.addEventListener('mouseover', function(event){
                event.preventDefault;
                j.style.backgroundColor = color;
            });
        });
    });
};

colorButton.addEventListener('input', colorInput);
submitButton.addEventListener('click', submit);