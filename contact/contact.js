document.write("<script  src='../baidumap/baidumap.js'></script>");

function setMapWidth() {
	let mapwarp = document.getElementById('body-content-contact');
	let baidumap = document.getElementById('dituContent');
	var width = mapwarp.style.width || mapwarp.clientWidth || mapwarp.offsetWidth || mapwarp.scrollWidth;  
	baidumap.style.width=mapwarp.offsetWidth+'px';

	// body...
	console.log(mapwarp.offsetWidth);

    
}

setMapWidth();