// =============================================================================
// ROTA: /guias/saida-definitiva-do-pais
// ARQUIVO: app/routes/guias.saida-definitiva-do-pais.tsx  (Remix)
//      ou  src/pages/GuiaSaidaDefinitiva.tsx              (React Router v6)
//
// Para Remix: este arquivo em app/routes/ cria a rota automaticamente.
// Para React Router v6/v7: adicionar no router config:
//   { path: "/guias/saida-definitiva-do-pais", element: <GuiaSaidaDefinitiva /> }
//   e importar este componente.
//
// Dependências necessárias (já presentes no projeto):
//   - react-router-dom ou @remix-run/react  →  Link
//   - @/components/ui/accordion             →  Accordion (shadcn/ui)
// =============================================================================

import { Link } from "react-router-dom";
// Se o projeto usa Remix, substituir por:
// import { Link } from "@remix-run/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ---------------------------------------------------------------------------
// SEO — Meta tags
// Para Remix, exportar esta função "meta" faz o framework injetar as tags.
// Para React Router v6 puro (sem SSR), usar react-helmet ou equivalente.
// ---------------------------------------------------------------------------
export const meta = () => [
  {
    title:
      "Comunicação de Saída Definitiva do País | Saída Fiscal para Brasileiros no Exterior",
  },
  {
    name: "description",
    content:
      "Entenda o que é a Comunicação de Saída Definitiva do País, quando fazer, como funciona a DSDP, os riscos de não regularizar e por que saída definitiva é uma saída fiscal.",
  },
];

// ---------------------------------------------------------------------------
// Dados estáticos — para manter o padrão do projeto
// ---------------------------------------------------------------------------
const VANTAGENS = [
  {
    titulo: "Segurança fiscal",
    desc: "Situação regularizada perante a Receita Federal.",
  },
  {
    titulo: "Redução do risco de bitributação",
    desc: "Menor risco de ser tributado no Brasil e no exterior ao mesmo tempo.",
  },
  {
    titulo: "CPF regular",
    desc: "Menor risco de pendência por omissão de declaração.",
  },
  {
    titulo: "Tributação correta",
    desc: "Tratamento adequado como não residente fiscal a partir da saída.",
  },
  {
    titulo: "Organização patrimonial",
    desc: "Mais clareza para aposentadorias, investimentos, aluguéis e rendimentos no Brasil.",
  },
  {
    titulo: "Documentação sólida",
    desc: "Melhor prova documental em eventual fiscalização.",
  },
  {
    titulo: "Planejamento previdenciário",
    desc: "Base segura para quem contribui ao INSS ou ao sistema previdenciário estrangeiro.",
  },
  {
    titulo: "Consistência fiscal",
    desc: "Prevenção de inconsistências entre residência fiscal no Brasil e no exterior.",
  },
];

const RISCOS = [
  "Bitributação.",
  "Multa por atraso.",
  "CPF com pendência por omissão de declaração.",
  "Rendimentos no exterior tratados como omitidos, conforme o caso.",
  "Retenção incorreta sobre rendimentos de fonte brasileira.",
  "Problemas com bancos, corretoras e fontes pagadoras.",
  "Dificuldade de regularização retroativa.",
  "Inconsistência entre situação fiscal, previdenciária e migratória.",
  "Risco de passivo fiscal acumulado.",
  "Dificuldade na comprovação da condição de não residente.",
];

const PARA_QUE_SERVE = [
  "Evitar permanência indevida como residente fiscal no Brasil.",
  "Reduzir risco de bitributação sobre rendimentos recebidos no exterior.",
  "Definir corretamente a tributação de rendimentos de fonte brasileira.",
  "Evitar omissões em declaração de imposto de renda.",
  "Regularizar a situação perante a Receita Federal.",
  "Dar segurança em planejamentos previdenciários, patrimoniais e internacionais.",
  "Evitar inconsistências com bancos, corretoras, fontes pagadoras, imóveis, aluguéis, aposentadorias, pró-labore, dividendos e remessas internacionais.",
  "Organizar a situação de quem saiu há anos e nunca formalizou a saída fiscal.",
];

const COMO_FAZER = [
  "Levantar a data exata da saída do Brasil.",
  "Verificar se a saída foi permanente desde o início ou inicialmente temporária.",
  "Conferir se houve renda no Brasil após a saída.",
  "Identificar fontes pagadoras no Brasil.",
  "Verificar bens, direitos, investimentos, imóveis, empresas e contas bancárias mantidas no Brasil.",
  "Conferir pendências de IRPF de anos anteriores.",
  "Entregar a Comunicação de Saída Definitiva, quando ainda cabível.",
  "Entregar a Declaração de Saída Definitiva no prazo correto.",
  "Informar bancos, corretoras, empregadores, locatários, fontes pagadoras ou administradoras, quando aplicável.",
  "Avaliar separadamente os efeitos previdenciários, especialmente contribuições ao INSS e eventual acordo internacional de previdência.",
];

const QUANDO_ESPECIALISTA = [
  "Mora fora e nunca fez saída fiscal.",
  "Saiu do Brasil há mais de 12 meses.",
  "Tem renda, imóvel, empresa, investimentos ou aposentadoria no Brasil.",
  "Recebe salário, pensão, aluguel, pró-labore ou dividendos de fonte brasileira.",
  "Contribui ao INSS morando no exterior.",
  "Trabalha em país com acordo previdenciário com o Brasil.",
  "Está voltando ao Brasil depois de anos no exterior.",
  "Tem dúvida sobre bitributação.",
  "Sofre retenção de imposto na fonte no Brasil.",
  "Tem CPF pendente ou declarações antigas em aberto.",
  "Não sabe se deve entregar CSDP, DSDP ou declaração normal de IRPF.",
];

const FAQ = [
  {
    q: "Fazer saída definitiva cancela meu CPF?",
    a: "Não. A saída definitiva comunica a condição de não residente fiscal. Ela não cancela automaticamente o CPF.",
  },
  {
    q: "Posso voltar ao Brasil depois de fazer saída definitiva?",
    a: "Sim. A saída definitiva é fiscal. Se a pessoa retornar ao Brasil com ânimo definitivo, a residência fiscal deverá ser reavaliada a partir do retorno.",
  },
  {
    q: "A saída definitiva acaba com meus direitos no INSS?",
    a: "Não automaticamente. A análise previdenciária é separada da análise fiscal e depende da categoria de segurado, das contribuições realizadas, do país de residência e de eventual acordo internacional de previdência.",
  },
  {
    q: "Quem mora fora precisa declarar imposto de renda no Brasil?",
    a: "Depende da condição fiscal, da existência de rendimentos de fonte brasileira, bens, obrigações anteriores e regras aplicáveis ao não residente.",
  },
  {
    q: "Posso fazer saída definitiva atrasada?",
    a: "Pode haver caminhos de regularização, mas o procedimento muda conforme o tempo decorrido, pendências existentes e disponibilidade do sistema. Casos antigos exigem análise individual.",
  },
  {
    q: "Tenho aposentadoria no Brasil e moro fora. Preciso fazer saída definitiva?",
    a: "É necessário avaliar a condição fiscal, a fonte pagadora, a tributação aplicável e eventual discussão jurídica sobre retenção na fonte. Não deve ser tratado como regra automática.",
  },
  {
    q: "Saída definitiva é a mesma coisa que perder residência no Brasil para fins migratórios?",
    a: "Não. A saída definitiva tratada pela Receita Federal é fiscal. Ela não é perda de nacionalidade, não é expulsão, não é impedimento de retorno e não substitui análise migratória.",
  },
  {
    q: "Quem saiu temporariamente também precisa fazer?",
    a: "Depende. Se a pessoa saiu em caráter temporário e permaneceu fora do Brasil por 12 meses consecutivos, pode passar à condição de não residente fiscal a partir do dia seguinte ao 12º mês de ausência. O caso deve ser analisado com base nas datas e nos vínculos mantidos.",
  },
];

const FONTES_OFICIAIS = [
  {
    label: "Comunicação de Saída Definitiva — Receita Federal",
    href: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/declaracoes/comunicacao-de-saida-definitiva-do-pais",
  },
  {
    label: "Declaração de Saída Definitiva (DSDP) — Receita Federal",
    href: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/declaracoes/declaracao-de-saida-definitiva-do-pais-dsdp",
  },
  {
    label: "Residente e Não Residente — Receita Federal",
    href: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/mais-informacoes/residencia-fiscal",
  },
  {
    label: "Tributação do não residente — Receita Federal",
    href: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/mais-informacoes/tributacao-do-nao-residente",
  },
];

const OUTROS_GUIAS = [
  {
    label: "Certificado de Deslocamento Temporário (CDT)",
    href: "/guias/certificado-deslocamento-temporario",
  },
  {
    label: "Totalização de períodos contributivos",
    href: "/guias/totalizacao",
  },
  {
    label: "Aposentadoria do INSS morando no exterior",
    href: "/guias/aposentadoria-morando-fora",
  },
  {
    label: "Prova de vida do INSS no exterior",
    href: "/guias/prova-de-vida-no-exterior",
  },
];

// ---------------------------------------------------------------------------
// Componente principal
// ---------------------------------------------------------------------------
export default function GuiaSaidaDefinitiva() {
  return (
    <article>
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <header className="relative overflow-hidden border-b border-border">
        {/* Gradiente decorativo — mesmo padrão dos outros guias */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,_var(--accent-ink-soft)_0%,_transparent_55%)] opacity-70"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:py-20">
          {/* Breadcrumb */}
          <nav className="text-xs text-muted-foreground">
            <Link to="/" className="hover:underline underline-offset-4">
              Início
            </Link>
            <span aria-hidden="true"> / </span>
            <Link to="/guias" className="hover:underline underline-offset-4">
              Guias
            </Link>
          </nav>

          <p className="eyebrow mt-6">Guia temático</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl">
            Comunicação de Saída Definitiva do País
          </h1>
          <p className="lede mt-6 max-w-2xl">
            A saída definitiva é, antes de tudo, uma regularização fiscal
            perante a Receita Federal. Ela informa que o brasileiro deixou de
            ser residente fiscal no Brasil, sem impedir que ele retorne ao país
            quando quiser.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
            >
              Falar com especialista
            </Link>
            <a
              href="#quando-fazer"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Entender quando devo fazer
            </a>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* BLOCO DE DESTAQUE — "definitiva" ≠ "nunca mais voltar"             */}
      {/* ------------------------------------------------------------------ */}
      <div className="border-b border-border bg-[var(--accent-ink-soft)]/30">
        <div className="mx-auto max-w-4xl px-6 py-8 md:py-10">
          <p className="text-base font-medium leading-relaxed">
            Apesar do nome{" "}
            <em className="not-italic font-semibold">"definitiva"</em>, a saída
            definitiva é uma saída fiscal. Ela não impede que a pessoa volte ao
            Brasil, não cancela a nacionalidade brasileira e não significa que a
            pessoa nunca mais poderá residir no país.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CONTEÚDO PRINCIPAL                                                  */}
      {/* ------------------------------------------------------------------ */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20 space-y-16">

        {/* ---- 01 · O que é ---- */}
        <section>
          <p className="eyebrow">01</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            O que é a Comunicação de Saída Definitiva do País
          </h2>
          <p className="mt-4 text-muted-foreground">
            A Comunicação de Saída Definitiva do País é o procedimento pelo qual
            a pessoa física informa à Receita Federal que saiu do Brasil em
            caráter permanente, ou que passou à condição de não residente fiscal.
            Apesar do nome <em>"definitiva"</em>, ela não significa perda de
            nacionalidade, cancelamento de CPF, impedimento de retorno ao Brasil
            ou rompimento definitivo com o país. Trata-se de uma definição de
            residência fiscal.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "É uma comunicação fiscal à Receita Federal.",
              "Serve para indicar a data a partir da qual a pessoa passa a ser tratada como não residente fiscal.",
              "Não impede retorno ao Brasil.",
              "Não cancela automaticamente direitos previdenciários.",
              "Não substitui análise previdenciária, migratória, patrimonial ou sucessória.",
              "Deve ser analisada em conjunto com rendimentos, bens, investimentos, fontes pagadoras e eventual permanência de vínculos no Brasil.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-ink)]"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ---- 02 · Não é "nunca mais voltar" ---- */}
        <section>
          <p className="eyebrow">02</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Saída definitiva não é "nunca mais voltar"
          </h2>

          <div className="mt-6 rounded-2xl border border-border bg-secondary p-6">
            <p className="text-sm leading-relaxed">
              <span className="font-medium">Definitiva, aqui,</span> não
              significa que a pessoa nunca mais poderá voltar ao Brasil.
              Significa que, para fins fiscais, ela comunica à Receita Federal
              que deixou de ser residente fiscal no país. Se retornar ao Brasil
              com ânimo definitivo, sua condição fiscal deverá ser reavaliada a
              partir do retorno.
            </p>
          </div>

          <ul className="mt-6 space-y-2.5">
            {[
              "A pessoa continua brasileira.",
              "A pessoa pode retornar ao Brasil.",
              "A saída definitiva é fiscal, não migratória.",
              "A saída definitiva não cancela automaticamente o CPF.",
              "O retorno ao Brasil pode gerar nova residência fiscal.",
              "O retorno deve ser analisado sob a ótica tributária, previdenciária e documental.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-ink)]"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ---- 03 · Para que serve ---- */}
        <section>
          <p className="eyebrow">03</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Para que serve a Saída Fiscal
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PARA_QUE_SERVE.map((item, i) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-background p-5"
              >
                <p className="font-display text-2xl text-[var(--accent-ink)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- 04 · CSDP vs DSDP ---- */}
        <section>
          <p className="eyebrow">04</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Comunicação de Saída × Declaração de Saída
          </h2>

          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-5 py-3 text-left font-medium">
                    Comunicação de Saída Definitiva — CSDP
                  </th>
                  <th className="px-5 py-3 text-left font-medium border-l border-border">
                    Declaração de Saída Definitiva — DSDP
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  [
                    "É a comunicação inicial da saída.",
                    "É a declaração de imposto de renda da saída.",
                  ],
                  [
                    "Informa à Receita Federal a data da saída do Brasil.",
                    "Deve ser entregue no ano seguinte ao da saída, no mesmo prazo da Declaração de Ajuste Anual.",
                  ],
                  [
                    "Deve indicar as fontes pagadoras no Brasil, quando houver.",
                    "Informa rendimentos, bens, direitos e dívidas no período em que a pessoa ainda era residente fiscal.",
                  ],
                  [
                    "Ajuda a orientar a tributação posterior como não residente.",
                    "Eventual imposto apurado deve ser pago em quota única.",
                  ],
                  [
                    "Deve ser feita até o último dia de fevereiro do ano-calendário seguinte ao da saída.",
                    "Não elimina a obrigação de regularizar declarações de anos anteriores que estejam pendentes.",
                  ],
                ].map(([csdp, dsdp], i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="px-5 py-3 align-top">{csdp}</td>
                    <td className="px-5 py-3 align-top border-l border-border/50">
                      {dsdp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 rounded-xl bg-secondary px-5 py-4 text-sm text-muted-foreground">
            A Comunicação e a Declaração são procedimentos relacionados, mas não
            são a mesma coisa. A ausência de uma delas pode gerar inconsistências
            fiscais, especialmente quando a pessoa mantém rendimentos, bens ou
            fontes pagadoras no Brasil.
          </p>
        </section>

        {/* ---- 05 · Quando deve ser feita ---- */}
        <section id="quando-fazer">
          <p className="eyebrow">05</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Quando deve ser feita
          </h2>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p>
              Se a saída já nasce permanente, a pessoa deve comunicar a saída a
              partir da data em que deixou o Brasil.
            </p>
            <p>
              Se a saída era temporária, mas a pessoa permanece fora do Brasil
              por 12 meses consecutivos, ela passa à condição de não residente a
              partir do dia seguinte ao 12º mês de ausência.
            </p>
            <p>
              A Comunicação de Saída Definitiva deve ser feita até o último dia
              de fevereiro do ano-calendário seguinte ao da saída.
            </p>
            <p>
              A Declaração de Saída Definitiva deve ser entregue no ano seguinte
              ao da saída, no prazo da declaração anual do imposto de renda.
            </p>
            <p>
              Casos antigos, com saída há vários anos, exigem análise específica
              — pode haver declarações pendentes, CPF com pendência, rendimentos
              omitidos ou necessidade de regularização retroativa.
            </p>
          </div>

          {/* Bloco de atenção */}
          <div className="mt-6 rounded-xl border border-border bg-secondary p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Atenção
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Quem saiu do Brasil há muitos anos e nunca fez a saída fiscal não
              deve simplesmente preencher informações sem análise prévia. É
              necessário verificar datas, vínculos, rendimentos, bens,
              declarações anteriores e eventual risco de passivo fiscal.
            </p>
          </div>
        </section>

        {/* ---- 06 · Como fazer ---- */}
        <section>
          <p className="eyebrow">06</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Como fazer — visão prática
          </h2>
          <ol className="mt-6 space-y-4">
            {COMO_FAZER.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-display text-xl text-[var(--accent-ink)] w-6 flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---- 07 · Vantagens ---- */}
        <section>
          <p className="eyebrow">07</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Vantagens da regularização
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {VANTAGENS.map(({ titulo, desc }) => (
              <div
                key={titulo}
                className="rounded-xl border border-border bg-background p-5"
              >
                <p className="font-medium text-sm">{titulo}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- 08 · Riscos ---- */}
        <section>
          <p className="eyebrow">08</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Riscos de não fazer
          </h2>

          <div className="mt-4 rounded-xl border border-border bg-secondary p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Alerta de Passivo
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Quem sai do Brasil e não regulariza sua residência fiscal pode
              continuar sendo tratado como residente fiscal brasileiro por
              determinado período, com risco de obrigação de declarar renda
              mundial, cobrança de imposto, multa por atraso, pendências
              cadastrais no CPF e inconsistências perante fontes pagadoras.
            </p>
          </div>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {RISCOS.map((risk) => (
              <li
                key={risk}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40"
                />
                {risk}
              </li>
            ))}
          </ul>
        </section>

        {/* ---- 09 · Relação com INSS ---- */}
        <section>
          <p className="eyebrow">09</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Relação com INSS e previdência internacional
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            A saída fiscal não é a mesma coisa que desligamento previdenciário. A
            pessoa pode deixar de ser residente fiscal no Brasil e ainda precisar
            avaliar se deve ou não contribuir ao INSS, em qual categoria, se
            está vinculada ao sistema previdenciário estrangeiro e se há acordo
            internacional aplicável entre o Brasil e o país de residência.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "A análise fiscal é separada da análise previdenciária.",
              "Nem todo brasileiro no exterior deve contribuir ao INSS da mesma forma.",
              "Recolhimento em categoria errada pode gerar contribuição ineficaz ou discussão futura.",
              "É necessário verificar se há acordo previdenciário entre o Brasil e o país de residência.",
              "Acordos previdenciários não resolvem automaticamente a situação fiscal.",
              "A saída definitiva perante a Receita Federal não cancela automaticamente direitos previdenciários.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-ink)]"
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Link contextualizado para guias relacionados */}
          <p className="mt-6 text-sm text-muted-foreground">
            Se você ainda trabalha no exterior ou vai começar, veja também o guia
            sobre o{" "}
            <Link
              to="/guias/certificado-deslocamento-temporario"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Certificado de Deslocamento Temporário
            </Link>
            , que trata da previdência durante o período de trabalho fora do
            Brasil.
          </p>
        </section>

        {/* ---- 10 · Quando falar com especialista ---- */}
        <section>
          <p className="eyebrow">10</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Quando falar com um especialista
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            A análise especializada é especialmente importante quando há
            rendimentos, patrimônio, contribuições previdenciárias ou vínculos
            mantidos no Brasil após a mudança para o exterior.
          </p>
          <ul className="mt-4 space-y-2.5">
            {QUANDO_ESPECIALISTA.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-ink)]"
                />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/contato"
            className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-destructive"
          >
            Falar com especialista →
          </Link>
        </section>

        {/* ---- FAQ ---- */}
        <section>
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
            Dúvidas comuns
          </h2>
          <Accordion type="single" collapsible className="mt-6 w-full">
            {FAQ.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CTA FINAL                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-border bg-[var(--accent-ink-soft)]/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[var(--accent-ink)]"
            />
            <p className="eyebrow">Orientação especializada</p>
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
            Regularize sua saída fiscal com segurança
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            A saída definitiva exige análise de datas, rendimentos, fontes
            pagadoras, bens, CPF, declarações anteriores e reflexos
            previdenciários. Em caso de dúvida, a orientação especializada evita
            erros que podem gerar passivo fiscal ou previdenciário no futuro.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
          >
            Falar com especialista →
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FONTES OFICIAIS                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[var(--accent-ink)]"
            />
            <p className="eyebrow">Fontes oficiais</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {FONTES_OFICIAIS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border p-4 text-sm transition-colors hover:bg-secondary"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* OUTROS GUIAS                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[var(--accent-ink)]"
            />
            <p className="eyebrow">Outros guias</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {OUTROS_GUIAS.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className="group rounded-xl border border-border p-4 text-sm transition-colors hover:bg-[var(--accent-ink-soft)]"
              >
                {label}{" "}
                <span className="group-hover:text-destructive">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* DISCLAIMER                                                          */}
      {/* ------------------------------------------------------------------ */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <p className="text-xs text-muted-foreground">
            Conteúdo informativo. A análise da saída fiscal deve considerar data
            de saída, país de residência, rendimentos no Brasil e no exterior,
            situação do CPF, declarações anteriores, contribuições
            previdenciárias e eventual acordo internacional aplicável.
          </p>
        </div>
      </div>
    </article>
  );
}
