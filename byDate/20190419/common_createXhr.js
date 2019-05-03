function createXhr(){
	var xhr;
	if (window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Micrsoft.XMLHttp");
	}
	return xhr;
}