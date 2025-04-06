
import { Serie } from './Serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; 
const tableFoot: HTMLElement = document.getElementById('footTable')!;

function renderSeries(Series: Serie[]): void {
  Series.forEach(s => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${s.id}</td>
                         <td><a href="${s.link}" target="_blank">${s.title}</a></td>
                         <td>${s.platform}</td>
                         <td>${s.seasons}</td>`;

      seriesTbody.appendChild(trElement);
  });
}

function getTotalCredits(Series: Serie[]): number {
    let totalSeasons: number = 0;
    Series.forEach((Serie) => totalSeasons = totalSeasons + Serie.seasons);
    let totalSeries = Series.length;
    return totalSeasons/totalSeries;
  }

renderSeries(series);
  let promSeasons = getTotalCredits(series);
  let row = document.createElement("tr");
  row.innerHTML = `
    <td>Seasons Average: ${promSeasons}</td>
  `;
  
  tableFoot.appendChild(row);



