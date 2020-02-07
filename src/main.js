import $ from 'jquery';
import { years } from './ping-pong';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#user-age').submit(function(event) {
    event.preventDefault();

  });
});