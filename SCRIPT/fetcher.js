// Fetch XML and XSL files and apply transformation
fetch('Xml/news.xml')
.then(response => response.text())
.then(xmlStr => {
  let xml = new DOMParser().parseFromString(xmlStr, "text/xml");
  fetch('Xml/news.xsl')
    .then(response => response.text())
    .then(xslStr => {
      let xsl = new DOMParser().parseFromString(xslStr, "text/xml");
      let processor = new XSLTProcessor();
      processor.importStylesheet(xsl);
      let resultDocument = processor.transformToFragment(xml, document);
      document.querySelector("main").appendChild(resultDocument);
    })
    .catch(error => console.error('Failed to fetch XSL file:', error));
})
.catch(error => console.error('Failed to fetch XML file:', error));