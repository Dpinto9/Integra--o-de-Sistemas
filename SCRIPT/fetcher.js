// Fetch XML and XSL files and apply transformation
// fetch('Xml/news.xml')
// .then(response => response.text())
// .then(xmlStr => {
//   let xml = new DOMParser().parseFromString(xmlStr, "text/xml");
//   fetch('Xml/news.xsl')
//     .then(response => response.text())
//     .then(xslStr => {
//       let xsl = new DOMParser().parseFromString(xslStr, "text/xml");
//       let processor = new XSLTProcessor();
//       processor.importStylesheet(xsl);
//       let resultDocument = processor.transformToFragment(xml, document);
//       document.querySelector("main").appendChild(resultDocument);
//     })
//     .catch(error => console.error('Failed to fetch XSL file:', error));
// })
// .catch(error => console.error('Failed to fetch XML file:', error));

// JSON Fetcher
fetch('Xml/news.json')
  .then(response => response.json())
  .then(jsonData => {
    let xmlStr = '<?xml version="1.0" encoding="UTF-8"?><noticias>';
    
    // Convertendo os dados do JSON para XML
    jsonData.noticias.forEach(noticia => {
      xmlStr += `<noticia id="${noticia.id}" destaque="${noticia.destaque}">
          <cabecalho>
              <titulo>${noticia.cabecalho.titulo}</titulo>
              <subtitulo>${noticia.cabecalho.subtitulo}</subtitulo>
              <autor>${noticia.cabecalho.autor}</autor>
              <data_publicacao>
                  <dia>${noticia.cabecalho.data_publicacao.dia}</dia>
                  <mes>${noticia.cabecalho.data_publicacao.mes}</mes>
                  <ano>${noticia.cabecalho.data_publicacao.ano}</ano>
              </data_publicacao>
              <categoria tipo="${noticia.cabecalho.categoria.tipo}">${noticia.cabecalho.categoria.tipo}</categoria>
              <imagem>${noticia.cabecalho.imagem}</imagem>
          </cabecalho>
          <corpo>`;
      noticia.corpo.paragrafos.forEach(paragrafo => {
        xmlStr += `<paragrafo>${paragrafo}</paragrafo>`;
      });
      xmlStr += `</corpo>
      </noticia>`;
    });
    
    xmlStr += '</noticias>';

    // Transformando o XML usando XSL
    let xml = new DOMParser().parseFromString(xmlStr, "text/xml");
    fetch('Xml/news.xsl')
      .then(response => response.text())
      .then(xslStr => {
        // Criando um novo processador XSLT
        let xsl = new window.XSLTProcessor();
        let parser = new DOMParser();
        let xslDoc = parser.parseFromString(xslStr, "text/xml");
        xsl.importStylesheet(xslDoc);

        // Transformando o XML usando o XSLTProcessor
        let resultDocument = xsl.transformToFragment(xml, document);
        document.querySelector("main").appendChild(resultDocument);
      })
      .catch(error => console.error('Failed to fetch XSL file:', error));
  })
  .catch(error => console.error('Failed to fetch JSON file:', error));

