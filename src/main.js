/* eslint-disable no-unused-vars */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Astronaut from './js/astronaut.js';
import $ from 'jquery';

//User Interface Logic:



$(document).ready(function() {


  $('#workerInfoButton').click(function() {
    event.preventDefault();


    let astronaut = new Astronaut();
    let employeeAge = $('#ageField').val();
    astronaut.region = $('input:radio:checked[name=region]').val();
    astronaut.health = $('input:radio:checked[name=health]').val();
    astronaut.happiness = $('input:radio:checked[name=happiness]').val();
    astronaut.earthLifeExpectancy = 72;
    astronaut.lifeExpectancyFactors();
    astronaut.lifeExpectancy();
    astronaut.solarAge(employeeAge);
    astronaut.yearsToDeath(employeeAge);
    let employeeName = $('#nameField').val();

    $('#nameOutput').html(employeeName);
    $('#solarYears').html('<li> Earth: ' + astronaut.earthYears + ' Years Old </li><br>' + '<li> Mercury: ' + astronaut.mercuryYears + ' Years Old </li><br>' + '<li> Venus: ' + astronaut.venusYears + ' Years Old </li><br>' + '<li> Mars: ' + astronaut.marsYears + ' Years Old </li><br>' + '<li> Jupiter: ' + astronaut.jupiterYears + ' Years Old');
    $('#solarExpectancy').html('<li> Earth: ' + astronaut.earthLifeExpectancy + ' Years Old </li><br>' + '<li> Mercury: ' + astronaut.mercuryLifeExpectancy + ' Years Old </li><br>' + '<li> Venus: ' + astronaut.venusLifeExpectancy + ' Years Old </li><br>' + '<li> Mars: ' + astronaut.marsLifeExpectancy + ' Years Old </li><br>' + '<li> Jupiter: ' + astronaut.jupiterLifeExpectancy + ' Years Old');

  });
});