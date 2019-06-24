import $ from 'jquery';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'

$(function(){
    $('ul>li:odd').css('color','yellow');
    $('ul>li:even').css('color','green');
});

class Person {
    static info = {name: 'zz',age: 20};
};

console.log(Person.info);