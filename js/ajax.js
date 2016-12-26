//Ajax封装
	function ajax(url,fnSucc,fnFail){
	var XHR;
	if(window.XMLHttpRequest){
	 XHR = new XMLHttpRequest;}else{
	 	XHR = new ActiveXobject("Microsoft.XMLHttp");
	 }
	XHR.open("GET",url,true)
	XHR.send();
	XHR.onreadystatechange = function(){
		if(XHR.readyState==4){
			if(XHR.status == 200){
				fnSucc(XHR.responseText);
			}
			
		else{
				if(fnFail){
					fnFail(XHR.status);
				}
			}
			
		}
	}
	}