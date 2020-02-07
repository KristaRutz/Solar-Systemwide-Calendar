import $ from 'jquery';
import { SolarSystemCalendar } from "../src/years";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#user-age').submit(function(event) {
    event.preventDefault();

    let earthAge = $("#age").val();
    const cal = new SolarSystemCalendar();
    let mercuryAge = cal.mercuryCal.convertToPlanetYears(earthAge).toFixed(2);
    $("#output").text(mercuryAge);
  });
});

