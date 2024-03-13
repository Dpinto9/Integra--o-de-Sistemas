function submitForm() {
    // var destaque = document.getElementById('destaque').value;
    var destaque = "nao";
    var titulo = document.getElementById('titulo').value;
    var subtitulo = document.getElementById('subtitulo').value;
    var autor = document.getElementById('autor').value;
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var ano = document.getElementById('ano').value;
    var categoria = document.getElementById('categoria').value;
    var paragrafo = document.getElementById('paragrafo').value;

    // Create XML structure
    var xml = '<noticia destaque="' + destaque + '">' +
        '<cabecalho>' +
        '<titulo>' + titulo + '</titulo>' +
        '<subtitulo>' + subtitulo + '</subtitulo>' +
        '<autor>' + autor + '</autor>' +
        '<data_publicacao>' +
        '<dia>' + dia + '</dia>' +
        '<mes>' + mes + '</mes>' +
        '<ano>' + ano + '</ano>' +
        '</data_publicacao>' +
        '<categoria>' + categoria + '</categoria>' +
        '</cabecalho>' +
        '<corpo>' +
        '<paragrafo>' + paragrafo + '</paragrafo>' +
        '</corpo>' +
        '</noticia>';

    console.log(xml);
}