/* eslint-disable no-unused-vars */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Astronaut from './js/astronaut.js';
import $ from 'jquery';

//User Interface Logic:

$('#workerInfoButton').attr('disabled', 'disabled');

$('#ageField').keyup(function() {
  $('#workerInfoButton').removeAttr('disabled');
});

$('#workerInfoButton').click(function(event) {
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

  $('#solarYears').html('<li> Earth: ' + astronaut.earthYears + ' Years Old </li>' + '<li> Mercury: ' + astronaut.mercuryYears + ' Years Old </li>' + '<li> Venus: ' + astronaut.venusYears + ' Years Old </li>' + '<li> Mars: ' + astronaut.marsYears + ' Years Old </li>' + '<li> Jupiter: ' + astronaut.jupiterYears + ' Years Old');
  
  $('#solarExpectancy').html('<li> Earth: ' + parseInt(astronaut.earthLifeExpectancy) + ' Years Old </li>' + '<li> Mercury: ' + astronaut.mercuryLifeExpectancy + ' Years Old </li>' + '<li> Venus: ' + astronaut.venusLifeExpectancy + ' Years Old </li>' + '<li> Mars: ' + astronaut.marsLifeExpectancy + ' Years Old </li>' + '<li> Jupiter: ' + astronaut.jupiterLifeExpectancy + ' Years Old');
  
  $('#workLifespan').html('<li>' + parseInt(astronaut.earthYearsLeft) + ' years</li><li>' + astronaut.mercuryYearsLeft + ' years</li><li>' + astronaut.venusYearsLeft + ' years</li><li>' + astronaut.marsYearsLeft + ' years</li><li>' + astronaut.jupiterYearsLeft + ' years</li>');
});
