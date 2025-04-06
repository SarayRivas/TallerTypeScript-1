var Serie = /** @class */ (function () {
    function Serie(id, nombre, plataforma, temporadas, sinopsis, link, imagen) {
        this.id = id;
        this.title = nombre;
        this.platform = plataforma;
        this.seasons = temporadas;
        this.description = sinopsis;
        this.link = link;
        this.image = imagen;
    }
    return Serie;
}());
export { Serie };
