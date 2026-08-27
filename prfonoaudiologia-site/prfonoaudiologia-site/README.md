# Site — Polyana Rosa Fonoaudiologia

Site institucional em HTML + CSS + JavaScript puro (sem frameworks, sem backend próprio).
Feito para ser leve, gratuito de hospedar e fácil de publicar.

## Estrutura dos arquivos

```
prfonoaudiologia-site/
├── index.html          → todo o conteúdo do site (página única, com seções)
├── css/style.css        → todo o visual (cores, fontes, layout)
├── js/script.js         → menu mobile, FAQ, formulário de contato
└── assets/
    ├── favicon.png       → ícone da aba do navegador (placeholder — trocar pela logo real)
    ├── favicon-64.png     → versão pequena do ícone
    └── og-image.jpg      → imagem que aparece ao compartilhar o link no WhatsApp/Instagram (placeholder)
```

## Por que essa stack (explicação rápida)

Como você não tem experiência técnica e a Polyana não vai precisar editar o site com
frequência, HTML/CSS/JS puro é a opção mais simples: não tem servidor para manter, não tem
custo de hospedagem, e o código é fácil de entender por ser "cru" (sem build, sem
dependências). A troca é que qualquer edição de texto exige mexer no arquivo `index.html`
diretamente (ou me pedir ajuda). Se no futuro a Polyana quiser editar sozinha, sem código, a
alternativa é migrar para um site em WordPress — só que aí entra custo de hospedagem mensal
e mais complexidade de manutenção (atualizações, plugins, segurança). Para o momento atual,
recomendo manter como está.

## Como publicar gratuitamente (passo a passo)

Recomendo a **Vercel** (mais simples). O processo com Netlify é praticamente idêntico.

1. Crie uma conta gratuita em https://vercel.com (dá para entrar direto com GitHub, Google ou e-mail).
2. Se ainda não tiver, crie uma conta gratuita em https://github.com e crie um repositório novo (ex: `prfonoaudiologia-site`).
3. Suba esta pasta inteira para esse repositório (pelo site do GitHub mesmo dá para arrastar os arquivos, em "Add file → Upload files").
4. Na Vercel, clique em "Add New → Project", conecte sua conta do GitHub e selecione o repositório.
5. Como é um site estático (sem build), pode deixar as configurações padrão e clicar em "Deploy".
6. Em poucos segundos a Vercel gera um link tipo `prfonoaudiologia-site.vercel.app` — o site já estará no ar.

### Conectando o domínio www.prfono.com.br

1. Dentro do projeto na Vercel, vá em "Settings → Domains" e adicione `prfono.com.br` (e também `www.prfono.com.br`).
2. A Vercel vai mostrar dois registros DNS para configurar (normalmente um registro `A` e um `CNAME`).
3. Entre no painel do site onde o domínio foi registrado (Registro.br, GoDaddy, Hostinger etc.) e adicione esses registros na área de "DNS" ou "Zona DNS".
4. A propagação pode levar de alguns minutos até 24h. Depois disso, o site já responde pelo domínio próprio.

Se preferir, me diga onde o domínio foi registrado que eu detalho o passo a passo específico
daquele painel.

## Checklist do que falta preencher antes de publicar

- [x] ~~Foto profissional da Polyana~~ — já usada na seção "Início" (`assets/photo-hero.jpg`).
- [x] ~~Foto do consultório/atendimento~~ — já usada na seção "Sobre" (`assets/photo-about.jpg`).
- [x] ~~Logo em alta resolução~~ — logo real aplicada no cabeçalho e no rodapé (recortada em
      fundo transparente a partir dos arquivos que você mandou: `assets/logo-full-wine.png` e
      `assets/logo-full-white.png`).
- [x] ~~Horário de atendimento~~ — "Segunda a sexta, das 9h às 18h".
- [x] ~~Endereço~~ — R. Princesa Isabel, 94 - Cj 84, Pinheiros, São Paulo - SP, 01452-002.
- [x] ~~Formulário de contato~~ — conectado ao Formspree (endpoint da conta da Polyana);
      as mensagens enviadas pelo site chegam direto no e-mail dela.
- [x] ~~Agendamento online (Calendly)~~ — widget incorporado na seção "Contato"
      (`calendly.com/prfonoaudiologia`), junto com um botão de acesso rápido na lista de
      contato. O WhatsApp continua disponível como forma principal/alternativa de agendar.

## Sobre os arquivos de imagem (pasta `assets/`)

- `logo-full-wine.png` / `logo-mark-wine.png` — logo (completa e só o monograma) em vinho,
  fundo transparente, para usar sobre fundos claros.
- `logo-full-white.png` / `logo-mark-white.png` — mesma logo em branco, fundo transparente,
  para usar sobre fundos escuros (ex: o rodapé, em azul-marinho).
- `photo-hero.jpg` / `photo-about.jpg` — recortes da foto profissional que você enviou
  (quadrado para o topo do site, retrato para a seção "Sobre").
- `favicon.png` / `favicon-64.png` — ícone da aba do navegador, gerado a partir do monograma
  real sobre um círculo vinho.
- `og-image.jpg` — imagem que aparece ao compartilhar o link do site (WhatsApp/Instagram/etc.),
  já usando a logo e as cores oficiais da marca.

Se a Polyana tiver os arquivos originais da logo em vetor (SVG/AI/EPS) ou fotos adicionais,
me manda que eu troco esses recortes pelos arquivos originais, com ainda mais qualidade.

## Rodando localmente antes de publicar

Não precisa de nada instalado — é só abrir o arquivo `index.html` direto no navegador
(clique duplo nele). Se quiser testar como ficaria já publicado (recomendado, evita
problemas de caminho de arquivo), com Python instalado rode, dentro da pasta do projeto:

```
python3 -m http.server 8000
```

E acesse `http://localhost:8000` no navegador.
