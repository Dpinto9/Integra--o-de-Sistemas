<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Template para selecionar apenas as três primeiras notícias destacadas -->
  <xsl:template match="/noticias">
    <!-- Slider para as notícias destacadas -->
    <div class="slider">
      <input type="radio" name="toggle" id="btn-1" checked="checked"/>
      <input type="radio" name="toggle" id="btn-2"/>
      <input type="radio" name="toggle" id="btn-3"/>
    
      <div class="slider-controls">
        <label for="btn-1"></label>
        <label for="btn-2"></label>
        <label for="btn-3"></label>
      </div>
    
      <ul class="slides">
        <!-- Aplicar template para as notícias destacadas -->
        <xsl:apply-templates select="noticia[@destaque='sim']"/>
      </ul>
    </div>
    <!-- Seção principal para todas as notícias -->
    <main>
      <!-- Aplicar template para todas as notícias -->
      <xsl:apply-templates select="noticia"/>
    </main>
  </xsl:template>

  <!-- Template para as notícias destacadas -->
  <xsl:template match="noticia[@destaque='sim']">
    <li class="slide">
      <div class="slide-content">
        <h2 class="slide-title">
          <xsl:value-of select="cabecalho/titulo"/>
        </h2>
        <p class="slide-text">
          <xsl:value-of select="cabecalho/subtitulo"/>
        </p>
        <a href="#" class="slide-link">Read more</a>
      </div>
      <p class="slide-image">
        <img src="{cabecalho/imagem}" alt="stuff" width="320" height="240"/>
      </p>
    </li>
  </xsl:template>

  <!-- Template para todas as notícias -->
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
    </div>
  </xsl:template>

  <!-- Template para os parágrafos -->
  <xsl:template match="paragrafo">
    <xsl:value-of select="."/>
    <xsl:if test="position() != last()">
      <xsl:text> </xsl:text>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
