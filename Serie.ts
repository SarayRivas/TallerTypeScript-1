export class Serie {
    id: number;
    title: string;
    platform: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(id: number, nombre: string, plataforma: string, temporadas: number, sinopsis: string, link: string, imagen: string) {
        this.id = id;
        this.title = nombre;
        this.platform = plataforma;
        this.seasons = temporadas;
        this.description = sinopsis;
        this.link = link;
        this.image = imagen;
    }
}