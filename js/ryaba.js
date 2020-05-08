const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(
  	dataURL, 
  	function(data) {
  		handleData(data);
  	}
  );
}

const vars = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
	]

function handleData(data) {
	let message = "";
	let obj = {};

	vars.forEach(function(item,index){
		obj[item] = $("input[name=" + item + "]")[0].value;
	});


	data.text.forEach(function(item,index){
		for (key in obj){
			item = item.replace("{" + key + "}", obj[key]);
		}

		message += item + "<br>"
	});

	$("#result").html(message);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);

