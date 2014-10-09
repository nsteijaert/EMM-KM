function set_state(state,text)
{
	document.getElementById("bar_state").innerHTML = state;
	document.getElementById("bar_state").setAttribute("style","width:"+ state + ";");
	document.getElementById("state_info").innerHTML = text;
}