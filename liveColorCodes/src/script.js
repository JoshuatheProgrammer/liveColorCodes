//  Description:
//              |This is an script that will add an h1, h2, and an input box to an html document. 
//              |The input box will allow you to enter a color in hex or rgb format.
//              |The h1 will display a message to enter a color.
//              |The h2 will display the current color value.
//              |The script will also change the background color of the document to the color you enter.
//              |The script will also change the color of the h1 and h2 to a contrasting color.

var div = document.createElement('div');

div.style.fontFamily = 'Helvetica';

div.innerHTML = '<h1>Please Enter An Color!</h1><input type="text" value="#"><h2></h2>';

document.body.appendChild(div)

/*
Div Styling 
*/

div.style.position = 'absolute';
div.style.top = '50%';
div.style.left = '50%';
div.style.transform = 'translate(-50%, -50%)';

/*
Input Box Styling
*/

div.querySelector("input").style.width = '350px';
div.querySelector("input").style.height = '30px';
div.querySelector("input").style.fontSize = '1em';

/*
H2 Styling
*/

div.querySelector("h2").style.marginTop = '10px';
div.querySelector("h2").style.fontSize = '1.5em';

/*
Main Function
*/

div.querySelector("input").addEventListener("input", function(e) {
  var value= e.target.value

    if (value.match(/^#[0-9A-F]{6}$/i) || value.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i)) {
      document.body.style.backgroundColor = value;
      div.querySelector("h1").style.color = getContrastingColor(value);
      div.querySelector("h2").style.color = getContrastingColor(value);
      div.querySelector("h2").innerText = "Current Value : " + value;
    } else {
      document.body.style.backgroundColor = 'white';
    }
});

/*
Sideline Function[s]
*/

function getContrastingColor(color){
var rgb = hexToRgb(color);

var isLight = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) > 186;

return isLight ? 'black' : 'white';
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}