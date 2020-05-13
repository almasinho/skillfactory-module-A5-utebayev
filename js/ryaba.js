const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";
const fields = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
]

function getFormValues() {
	let obj = {};

	fields.forEach(function(field) {
		obj[field] = $("input[name=" + field + "]")[0].value
	});
		
	return obj;
}

function handleButton() {
	$.getJSON(dataURL, handleData);
	$("form").hide();
 }

function handleData(data) {
	let finalMessage = "";

	let obj = getFormValues()

	data["text"].forEach(function(line) {
		for (key in obj) {
			line = line.replace("{" + key + "}", obj[key]);
		}
		
		finalMessage = finalMessage + line + "<BR>";
	});

	$("div#result").html(finalMessage);
 }

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
