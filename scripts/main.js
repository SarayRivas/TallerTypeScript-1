import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var tableFoot = document.getElementById('footTable');
function renderSeries(Series) {
    Series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                         <td><a href=\"").concat(s.link, "\" target=\"_blank\">").concat(s.title, "</a></td>\n                         <td>").concat(s.platform, "</td>\n                         <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getTotalCredits(Series) {
    var totalSeasons = 0;
    Series.forEach(function (Serie) { return totalSeasons = totalSeasons + Serie.seasons; });
    var totalSeries = Series.length;
    return totalSeasons / totalSeries;
}
renderSeries(series);
var promSeasons = getTotalCredits(series);
var row = document.createElement("tr");
row.innerHTML = "\n    <td>Seasons Average: ".concat(promSeasons, "</td>\n  ");
tableFoot.appendChild(row);
