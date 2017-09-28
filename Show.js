function move()
{
	var elem = document.getElementById("myBar");
	var width = 1;
	var id = setInterval(frame, 10);
	function frame()
	{
		if (width >= 100)
		{
			clearInterval(id);
		}
		else
		{
			width++;
			elem.style.width = width + '%';
			elem.innerHTML = width * 1 + '%';
		}
	}
}

function go()
{
	var elem = document.getElementById("myBar");
	//document.write("click");
	elem.style.width = 50 + '%';
	elem.innerHTML = 50 + '%';
}