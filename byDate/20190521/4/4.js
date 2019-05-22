/* // 获取样式表　
var sheet = document.styleSheets[1];
// 获取对应的规则
var ruleS = sheet.cssRules[4];
// 获取子规则
var ruleSbeg = ruleS.cssRules[0];
var ruleSend = ruleS.cssRules[1];
// console.log(ruleSbeg);
// 设置样式规则



ruleSbeg.style.transform = "rotate(90deg)";
ruleSend.style.transform = "rotate(450deg)"; */



var sheet = document.styleSheets[1];
var ruleS = sheet.cssRules[4];
var ruleM = sheet.cssRules[5];
var ruleH = sheet.cssRules[6];

var ruleSbeg = ruleS.cssRules[0];
var ruleSend = ruleS.cssRules[1];

var ruleMbeg = ruleM.cssRules[0];
var ruleMend = ruleM.cssRules[1];

var ruleHbeg = ruleH.cssRules[0];
var ruleHend = ruleH.cssRules[1];

var now = new Date();
var hours = now.getHours();
var mins = now.getMinutes();
var secs = now.getSeconds();
// console.log(hours.toString());
// console.log(mins);
// console.log(secs);
var sdeg = (secs/60)*360;
console.log(sdeg);
var mdeg = (mins/60)*360;
console.log(mdeg);
var hdeg = (hours/12)*360;
console.log(hdeg);

ruleSbeg.style.transform = "rotate("+sdeg+"deg)";
ruleSend.style.transform = "rotate("+(sdeg+360)+"deg)";

ruleMbeg.style.transform = "rotate("+mdeg+"deg)";
ruleMend.style.transform = "rotate("+(mdeg+360)+"deg)";

ruleHbeg.style.transform = "rotate("+hdeg+"deg)";
ruleHend.style.transform = "rotate("+(hdeg+360)+"deg)";