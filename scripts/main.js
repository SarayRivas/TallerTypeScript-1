var Serie = /** @class */ (function () {
    function Serie(id, nombre, plataforma, tipo, link, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.tipo = tipo;
        this.link = link;
        this.imagen = imagen;
    }
    return Serie;
}());
export { Serie };
var coursesTbody = document.getElementById('series');
function renderCoursesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                         <td>").concat(s.nombre, "</td>\n                         <td>").concat(s.plataforma, "</td>\n                         <td>").concat(s.tipo, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
