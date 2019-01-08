import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { validateGame } from './sudoku.js';

$(document).ready(function () {
  $('button').click(function (event) {
    const arr = [];
    for (let i = 1; i < 82; i++) {
      arr.push($(`#${i}`).val());
    }

    validateGame();
    event.preventDefault();
  });
});

