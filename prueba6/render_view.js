function replace_view(req) {
    var html_string = html.toString();
    // Expresion regular que busca en index.html los simbolos { } y devuelve un array con los valores que contienen
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    for (var i = 0; i < variables.length; i++) {
        var value = eval(variables[i]);
        html_string = html_string.replace("{" + variables[i] + "}", parametros[variables[i]]);
    }

    return html_string;

}

module.exports.replace_view=replace_view;