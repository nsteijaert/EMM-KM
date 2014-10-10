//@author NJK
//This script contains custom function used for utility purposes.

//This method is used to increment the progressbar of the intro page
function set_state(state,text)
{
	document.getElementById("bar_state").innerHTML = state;
	document.getElementById("bar_state").setAttribute("style","width:"+ state + ";");
	//document.getElementById("bar_state").setAttribute("aria-valuenow",state);
	document.getElementById("state_info").innerHTML = text;
}