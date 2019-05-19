/* 自己封装的ajax函数 ，使用时可直接调用
**@param method(必填) : 请求方式 "get" "post"
**@param url(必填) : 请求地址 ""
**@param data(必填) ：请求携带的数据  以js对象的形式定义  {name:'zhang',age:10,.....}
**@param callback(必填) ：回调函数  可接受一个参数就是请求回来的数据  callback(response);
**@param datetype(选填) ：返回数据的类型 默认为text 可设置为 json 或者 xml
*/


function ajax(method,url,data,callback,datetype){
    /* 创建/获取XHR对象 */
    var xhr ;
    if (window.XMLHttpRequest){
        xhr = new XHLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    /* 设置xhr的 onreadystatechange 事件 */
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(datetype=="json"){
                var res = JSON.parse(xhr.responseText);
            }else if(datetype=="xml"){
                var res = responseXML;
            }else{
                var res = responseText;
            }
            callback(res);
        }
    }

    /* 设置携带的数据 data */
    var param = "";
    if(JSON.stringify(data) != "{}"){           /* 判断请求上报的数据不为空 */
        url += "?";
        for(i in data){
            param += i+"="+data[i]+"&";
        }
        param = param.slice(0,param.length-1);          /* 将拼接的字符串去掉最后的&  */                                        
    }

    /* 判断请求方式是否为get */
    if(method=="get"){
        url += param;
    }

    /* 初始化请求 */
    xhr.open(method,url,true);

    /* 如果为 post */
    if(method=="post"){
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(param);
    }else{
        xhr.send(null);
    }

}

