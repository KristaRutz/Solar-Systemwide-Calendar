import $ from 'jquery';
import { SolarSystemCalendar } from "../src/years";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import '../src/img/milkyway.jpg'

$(document).ready(function() {
  const cal = new SolarSystemCalendar();

  $('#user-age').click(function() {
    let earthAge = $("#age").val();
    $("#age-output").text(cal.getAgeList(earthAge));
  });

  $('#user-life-expectancy').click(function() {
    let earthAge = $("#age2").val();
    $("#life-expectancy-output").text(cal.getLifeExpectancyList(earthAge));
  });
});

