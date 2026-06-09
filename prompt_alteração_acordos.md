# Prompt para o Claude — Correção do campo `instrumento`

---

Preciso que você corrija o campo `instrumento` no arquivo de dados dos acordos internacionais deste projeto.

**Regra do campo:**
- Acordos bilaterais: `Acordo Brasil - [País]` (com espaço antes e depois do hífen)
- Acordos multilaterais: apenas o nome do bloco (`Mercosul`, `CPLP`, `Iberoamericano`)

Encontre o arquivo onde estão definidos os dados de cada país (provavelmente um `.ts`, `.json` ou similar com os campos `slug`, `instrumento`, etc.) e aplique as correções abaixo:

---

## Corrigir valor errado

| slug | valor atual | valor correto |
|------|------------|---------------|
| `portugal` | `Decreto nº 10.881/2021 • Entrada em vigor: 15/07/1992 • Bilateral` | `Acordo Brasil - Portugal` |
| `franca` | `Decreto nº 12.498/2025 • Entrada em vigor: 01/12/2024 • Bilateral` | `Acordo Brasil - França` |
| `cabo-verde` | `Decreto nº 12.498/2025 • Bilateral` | `Acordo Brasil - Cabo Verde` |
| `chile` | `Convênio Brasil-Chile (2007)` | `Acordo Brasil - Chile` |
| `espanha` | `Convênio de Seguridade Social` | `Acordo Brasil - Espanha` |
| `grecia` | `Acordo de Previdência Social` | `Acordo Brasil - Grécia` |
| `india` | `Acordo de Previdência Social` | `Acordo Brasil - Índia` |
| `israel` | `Acordo de Previdência Social` | `Acordo Brasil - Israel` |
| `italia` | `Acordo de Previdência Social` | `Acordo Brasil - Itália` |
| `japao` | `Acordo de Previdência Social` | `Acordo Brasil - Japão` |
| `alemanha` | `Acordo Brasil-Alemanha` | `Acordo Brasil - Alemanha` |
| `austria` | `Acordo Brasil-Áustria` | `Acordo Brasil - Áustria` |
| `belgica` | `Acordo Brasil-Bélgica` | `Acordo Brasil - Bélgica` |
| `bulgaria` | `Acordo Brasil-Bulgária` | `Acordo Brasil - Bulgária` |
| `canada` | `Acordo Brasil-Canadá` | `Acordo Brasil - Canadá` |
| `coreia-do-sul` | `Acordo Brasil-Coreia do Sul` | `Acordo Brasil - Coreia do Sul` |
| `estados-unidos` | `Acordo Brasil-Estados Unidos` | `Acordo Brasil - Estados Unidos` |
| `mercosul` | `Multilateral` | `Mercosul` |
| `cplp` | `Multilateral` | `CPLP` |
| `iberoamericano` | `Acordo Iberoamericano` | `Iberoamericano` |

---

## Adicionar campo ausente

Os países abaixo não têm o campo `instrumento` definido. Adicione com o valor indicado:

| slug | valor a adicionar |
|------|------------------|
| `luxemburgo` | `Acordo Brasil - Luxemburgo` |
| `mocambique` | `Acordo Brasil - Moçambique` |
| `quebec` | `Acordo Brasil - Quebec` |
| `republica-tcheca` | `Acordo Brasil - República Tcheca` |
| `suica` | `Acordo Brasil - Suíça` |

---

Após aplicar todas as correções, confirme quais arquivos foram alterados.

---

## Remover abas do Hub Profissional

No Hub Profissional, dentro da página de cada país, existem as seguintes abas:

> Visão Geral · Documentos · Órgãos · Trecho legal · Acordo (texto integral) · Ajuste administrativo

Remova as abas **Trecho legal** e **Órgãos** de todos os países. As abas que devem permanecer são:

> Visão Geral · Documentos · Acordo (texto integral) · Ajuste administrativo

Encontre o componente ou arquivo onde essas abas são definidas (pode ser um array de tabs, um enum, ou uma lista de rotas) e remova as entradas correspondentes a `Trecho legal` e `Órgãos`. Se houver conteúdo/componente exclusivo dessas abas, remova também. Confirme os arquivos alterados.
