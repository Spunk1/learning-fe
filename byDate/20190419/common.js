function $(id){
	return document.getElementById(id);
}

function createXhr(){
	var xhr;
	if (window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Micrsoft.XMLHttp");
	}
	return xhr;
}

function ajax(){

}