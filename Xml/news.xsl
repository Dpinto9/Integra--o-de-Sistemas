<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/noticias">
    <main>
      <xsl:apply-templates select="noticia"/>
    </main>
  </xsl:template>

  <xsl:template match="noticia">
    <div class="card">
      <img>
        <xsl:attribute name="src">
          <xsl:value-of select="cabecalho/imagem"/>
        </xsl:attribute>
      </img>
      <h4>
        <xsl:value-of select="cabecalho/titulo"/>
      </h4>
      <div>
        <xsl:value-of select="cabecalho/subtitulo"/>
      </div>
      <div class="publishbyDate">
        <p>
          <xsl:value-of select="cabecalho/autor"/>
        </p>
        <span>
          <xsl:value-of select="cabecalho/data_publicacao/dia"/>
          <xsl:text>/</xsl:text>
          <xsl:value-of select="cabecalho/data_publicacao/mes"/>
          <xsl:text>/</xsl:text>
          <xsl:value-of select="cabecalho/data_publicacao/ano"/>
        </span>
        <p>
          | 
          <xsl:value-of select="cabecalho/categoria"/>
        </p>
      </div>
      <!-- <p class="desc">
        <xsl:apply-templates select="corpo/paragrafo"/>
      </p> -->
    </div>
  </xsl:template>

  <xsl:template match="paragrafo">
    <xsl:value-of select="."/>
    <xsl:if test="position() != last()">
      <xsl:text> </xsl:text>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
