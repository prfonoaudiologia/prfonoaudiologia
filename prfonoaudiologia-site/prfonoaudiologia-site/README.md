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

### Conectando o domínio www.prfonoaudiologia.com.br

1. Dentro do projeto na Vercel, vá em "Settings → Domains" e adicione `prfonoaudiologia.com.br` (e também `www.prfonoaudiologia.com.br`).
2. A Vercel vai mostrar dois registros DNS para configurar (normalmente um registro `A` e um `CNAME`).
3. Entre no painel do site onde o domínio foi registrado (Registro.br, GoDaddy, Hostinger etc.) e adicione esses registros na área de "DNS" ou "Zona DNS".
4. A propagação pode levar de alguns minutos até 24h. Depois disso, o site já responde pelo domínio próprio.

Se preferir, me diga onde o domínio foi registrado que eu detalho o passo a passo específico
daquele painel.

## Checklist do que falta preencher antes de publicar

- [ ] **Foto profissional da Polyana** — substituir o selo/monograma decorativo no topo do
      site (seção "Início") por uma foto de retrato dela.
- [ ] **Foto do consultório/atendimento** — substituir o retângulo com o texto "Foto do
      consultório / atendimento" na seção "Sobre".
- [ ] **Logo em alta resolução** — se ela tiver o arquivo original da logo (o monograma "Pr"),
      me manda que eu troco o monograma feito em CSS pela logo real.
- [ ] **Horário de atendimento** — hoje está como "A confirmar" na seção de Contato.
- [ ] **Formulário de contato** — precisa criar uma conta gratuita em https://formspree.io,
      pegar o endpoint do formulário e colar no lugar de `SEU_ENDPOINT_AQUI` no arquivo
      `index.html` (procure por esse texto — está comentado no código explicando onde mexer).
- [ ] **Depoimentos** — a seção já está estruturada no código (comentada, dentro de
      `index.html`, procure por "DEPOIMENTOS"), é só descomentar e preencher quando tiver
      depoimentos reais de pacientes.
- [ ] **Segundo WhatsApp (Clínica Multi)** — encontramos um número adicional
      (+55 11 92004-2728) usado para agendamento em outro canal dela; hoje o site usa só o
      WhatsApp principal (+55 11 95061-7487). Avise se quiser usar o outro número em algum
      botão específico.
- [ ] **Agendamento online (Calendly)** — hoje o "agendamento" é feito via WhatsApp com
      mensagem pronta. Se quiser um calendário de verdade:
      1. Criar conta gratuita em https://calendly.com
      2. Configurar os horários disponíveis
      3. Copiar o link de agendamento (ex: `calendly.com/prfonoaudiologia`)
      4. Me avisar que eu incorporo o widget do Calendly na seção de Contato.
- [ ] **Favicon e imagem de compartilhamento (og-image)** — hoje são placeholders gerados
      automaticamente com as cores da marca (pasta `assets/`). Posso refinar assim que
      tivermos a logo oficial em alta resolução.

## Rodando localmente antes de publicar

Não precisa de nada instalado — é só abrir o arquivo `index.html` direto no navegador
(clique duplo nele). Se quiser testar como ficaria já publicado (recomendado, evita
problemas de caminho de arquivo), com Python instalado rode, dentro da pasta do projeto:

```
python3 -m http.server 8000
```

E acesse `http://localhost:8000` no navegador.
