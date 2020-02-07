import $ from 'jquery';
import { SolarSystemCalendar } from "../src/years";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const cal = new SolarSystemCalendar();

  $('#user-age').click(function() {
    let earthAge = $("#age").val();
    $("#age-output").text(cal.getAgeList(earthAge));
    cal.venusCal.getLifeExpectancyLeft(25);
  });

  $('#user-life-expectancy').click(function() {
    let earthAge = $("#age2").val();
    $("#age-output").text(cal.getAgeList(earthAge));
    cal.venusCal.getLifeExpectancyLeft(25);
  });
});

