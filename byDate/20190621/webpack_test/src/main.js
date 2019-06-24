/* main.js为项目的入口文件 在main.js中导入配置文件 */

// 1. 导入jquery
// import *** form *** es6中导入模块的方式
import $ from 'jquery'
import './css/index.css'
import './css/index.less'

$(function(){
    $("li:odd").css('backgroundColor','yellow');
    $('li:even').css('backgroundColor',function(){return "#"+"ccc"})
})