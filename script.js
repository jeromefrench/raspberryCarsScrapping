

console.log('le script externe');

var element = document.querySelector('#mySub');

element.addEventListener('click',
			function()
			{
				console.log("ET d'un");
				
				var link = document.querySelector('#myId');
				var newPara = document.createElement('p');
				link.replaceChild(newPara, link.firstChild);

				var newLabel = document.createTextNode('Veuillez patienter');
				newPara.appendChild(newLabel);
	
			});


