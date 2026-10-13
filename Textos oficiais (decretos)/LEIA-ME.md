# Textos oficiais dos acordos (decretos de promulgação)

Conferência feita em 13/10/2026. Para cada acordo em vigor, o texto foi transcrito do decreto publicado no Planalto (planalto.gov.br). Removi as anotações "(Redação dada…)" e os trechos revogados. Os textos do Planalto têm alguns espaços dentro de palavras (ex.: "n o que"), que existem na própria página oficial.

- `<pais>.txt`: texto do acordo conforme o decreto.
- `cobertura-brasil.json`: benefícios do lado brasileiro, conforme o artigo de âmbito material, com a transcrição literal do trecho.

## Por que esta pasta existe
Os `.docx` de "Acordos e Ajustes Revisados" e o dataset do Atlas tinham erros:

| Acordo | Problema encontrado |
|---|---|
| França | o `.docx` é o texto da Alemanha com "francesa" no lugar de "alemã" |
| Portugal | o `.docx` começa como "Ajuste Administrativo" e traz o âmbito material da Áustria |
| Japão, Itália, Luxemburgo | resumos de 3 a 5 mil caracteres no mesmo molde, que listam benefícios inexistentes (ex.: tempo de contribuição no Japão e em Luxemburgo) e omitem outros |
| Coreia, Espanha, EUA, Índia, Canadá | resumos; a Índia cita o Decreto 10.220/2020 em vez do 11.916/2024 |
| Dataset (`beneficios.brasil`) | tempo de contribuição onde o acordo não prevê (Bélgica, Chile, Coreia, EUA, Índia, Luxemburgo); faltava pensão por morte (Bélgica, Itália, Japão, Luxemburgo, Suíça), invalidez (Bulgária), auxílio-doença (Moçambique), salário-maternidade (França), acidente de trabalho e LOAS (Portugal); Iberoamericana vazia |

**Os `.docx` não foram alterados.** Ficam para revisão do Dr. Marcos. A correção já aplicada no AtlasPrev está em marcosespinola1379/atlasprev#601.

## Não conferidos
Cabo Verde, Israel e CPLP: não há decreto de promulgação vigente na base. Verificar a situação antes de publicar.
