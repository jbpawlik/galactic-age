/* eslint-disable no-unused-vars */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Astronaut from './js/astronaut.js';
import $ from 'jquery';

//User Interface Logic:




$('#workerInfoButton').click(function() {
  let astronaut = new Astronaut();
  let employeeAge = $('#ageField').val();
  astronaut.solarAge(employeeAge);
  astronaut.lifeExpectancy();
  astronaut.lifeExpectancyFactors();
  astronaut.yearsToDeath(employeeAge);
  let region = $('input:radio:checked[name:region]').val();
  let health = $('input:radio:checked[name:health]').val();
  let happiness = $('input:radio:checked[name=happiness]').val();
  let employeeName = $('#nameField').val();
  
  $("#galacticYears").text('<li> Earth:' + astronaut.earthYears + '</li>')


});