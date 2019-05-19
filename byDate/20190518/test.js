function jiazai() {
    var url = "test.php";
    var data = {};
    ajax("get",url,data,function(res){
                var books = res;
                for (var i=0;i<books.length;i++){
                var line = books[i];
                line1 = {
                    number: line[0],
                    title: line[1],
                    author: line[2],
                };
                var line1_html = document.getElementById("tbody");
                line1_html.innerHTML += `
                    <tr align="center" valign="middle" bgcolor="#ccc">
                     <td width="90">${line1.number}</td>
                    <td width="200">${line1.title}</td>
                    <td width="120">${line1.author}</td>
                    <td width="200">${line1.number}</td>
                </tr>
                `;
        }

    },"json");
    //创建请求对象
    // var xhr = createXhr();
    // //创建亲求
    // xhr.open("get","test.php",true);
    // // 设置请求完成后的执行事件
    // xhr.onreadystatechange = function(){
    //     if (xhr.readyState==4 && xhr.status==200){
    //         var str = xhr.responseText;
    //         var books = JSON.parse(str);
    //         console.log(books);
    //         for (var i=0;i<books.length;i++){
    //             var line = books[i];
    //             line1 = {
    //                 number: line[0],
    //                 title: line[1],
    //                 author: line[2],
    //             };
    //             var line1_html = document.getElementById("tbody");
    //             line1_html.innerHTML += `
    //                 <tr align="center" valign="middle" bgcolor="#ccc">
    //                  <td width="90">${line1.number}</td>
    //                 <td width="200">${line1.title}</td>
    //                 <td width="120">${line1.author}</td>
    //                 <td width="200">${line1.number}</td>
    //             </tr>
    //             `;
    //     }
    //     console.log(line1_html.innerHTML);
    //     }
    // }
    // xhr.send(null);
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


// function zai(){
//     var line1_html = document.getElementById("tbody");
//     line1_html.innerHTML = `
//         <tr align="center" valign="middle" bgcolor="#ccc">
//         <td width="90">${this.number}</td>
//         <td width="200">${this.title}</td>
//         <td width="120">${this.author}</td>
//         <td width="200">${this.number}</td>
//     </tr>
//     `;

// }