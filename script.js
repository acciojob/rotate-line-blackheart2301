//your JS code here. If required.
const container= document.getElementsByClassName("container")[0];

function showElement(){
	const div= document.createElement("div");
	div.id="line";
	container.append(div);
}
showElement();