

  export class Serie {
    id: number;
    nombre: string;
    plataforma: string;
    tipo: string;
    link: string;
    imagen: string;

    
    constructor(id: number, nombre: string, plataforma: string, tipo: string, link: string, imagen: string) {
      this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.tipo = tipo;
        this.link = link;
        this.imagen = imagen;
    }
    
    
  }

const coursesTbody: HTMLElement = document.getElementById('series')!; 

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(s => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${s.id}</td>
                         <td>${s.nombre}</td>
                         <td>${s.plataforma}</td>
                         <td>${s.tipo}</td>`;
      coursesTbody.appendChild(trElement);
  });
}