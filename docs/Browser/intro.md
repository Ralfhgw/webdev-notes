---
id: browser-intro
title: Browser Einführung
slug: /Browser
---

| Filter    | Description                                                     | Example               |
|-----------|-----------------------------------------------------------------|-----------------------|
| allintext | Searches for occurrences of all the keywords given.             | allintext:"keyword"   |
| intext    | Searches for the occurrences of keywords all at once or one at a time. | intext:"keyword"      |
| intext | Searches for the occurrences of keywords all at once or one at a time. | intext:"keyword"|
| inurl | Searches for a URL matching one of the keywords. | inurl:"keyword"|
| allinurl | Searches for a URL matching all the keywords in the query. | allinurl:"keyword"|
| intitle | Searches for occurrences of keywords in title all or one. | intitle:"keyword"|
| allintitle | Searches for occurrences of keywords all at a time | allintitle:"keyword"|
| site | Specifically searches that particular site and lists all the results for that site. | site:"www.google.com"|
| filetype | Searches for a particular filetype mentioned in the query. | filetype:"pdf"|
| link | Searches for external links to pages. | link:"keyword"|
| numrange | Used to locate specific numbers in your searches. | numrange:321-325|
| before/after | Used to search within a particular date range. | filetype:pdf & (before:2000-01-01 after:2001-01-01)|
| allinanchor (and also inanchor) | This shows sites which have the keyterms in links pointing to them, in order of the most links. | inanchor:rat|
| allinpostauthor (and also inpostauthor) | Exclusive to blog search, this one picks out blog posts that are written by specific individuals. |  allinpostauthor:"keyword"|
| related | List web pages that are “similar” to a specified web page. | related:www.google.com|
|cache | Shows the version of the web page that Google has in its cache. | cache:www.google.com|


```intext:"index of /"```
<small>Das sucht nach Webseiten, auf denen der Text „index of /“ vorkommt.
Das ist typisch für offene Verzeichnislisten (Directory Listings), die von Webservern automatisch erzeugt werden.</small>

```Nina Simone intitle:”index.of” “parent directory” “size” “last modified” “description” I Put A Spell On You (mp4|mp3|avi|flac|aac|ape|ogg) -inurl:(jsp|php|html|aspx|htm|cf|shtml|lyrics-realm|mp3-collection) -site:.info```
<small>intitle:"index.of" → sucht Seiten mit dem Titel index.of (typisch für Server-Listen).
"parent directory", "size", "last modified" → weitere typische Begriffe in solchen Verzeichnissen.
I Put A Spell On You (mp4|mp3|avi|flac|aac|ape|ogg) → nach diesen Dateiformaten oder Dateinamen.
-inurl:(jsp|php|...) → schließt Seiten aus, die diese Endungen haben.
-site:.info → schließt Domains mit .info aus.</small>

```Bill Gates intitle:”index.of” “parent directory” “size” “last modified” “description” Microsoft (pdf|txt|epub|doc|docx) -inurl:(jsp|php|html|aspx|htm|cf|shtml|ebooks|ebook) -site:.info```
<small>Ähnlich wie oben, nur auf Microsoft-Dokumente (z. B. pdf|txt|epub|doc|docx) ausgerichtet.
Auch hier: -inurl und -site filtern bestimmte Webseiten heraus.</small>

```parent directory DVDRip -xxx -html -htm -php -shtml -opendivx -md5 -md5sums```
```parent directory MP3 -xxx -html -htm -php -shtml -opendivx -md5 -md5sums```
```parent directory Name of Singer or album -xxx -html -htm -php -shtml -opendivx -md5 -md5sums```
<small>Das sucht ebenfalls nach offenen Verzeichnissen mit dem Begriff DVDRip, aber schließt Wörter wie xxx, html, php usw. aus.</small>

```filetype:config inurl:web.config inurl:ftp```
<small>filetype:config → sucht Dateien mit der Endung .config
inurl:web.config → die Datei heißt web.config
inurl:ftp → die URL enthält „ftp“</small>

```“Windows XP Professional” 94FBR```
<small>Diese Art von Abfrage wurde früher verwendet, um nach Produktkeys oder Software zu suchen.
➡️ Heute wird sie meist von Suchmaschinen blockiert.</small>

```ext:(doc | pdf | xls | txt | ps | rtf | odt | sxw | psw | ppt | pps | xml) (intext:confidential salary | intext:"budget approved") inurl:confidential```
<small>ext: → filtert nach bestimmten Dateiendungen.
intext: → sucht nach Textinhalten in diesen Dateien.
inurl:confidential → URL enthält „confidential“.</small>


## Weblinks
### Design / Colors
[coolors - Color Generator](https://coolors.co)
[coolors - Trending Color Palettes](https://coolors.co/palettes/trending)
[Contrastchecker](https://webaim.org/resources/contrastchecker/)
[mui.com-material-ui](https://mui.com/material-ui/customization/palette/)
[Material Design 3 - Google’s open-source design system](https://m3.material.io/styles/color/system/overview)
[fluent2 - Microsoft Design platform](https://fluent2.microsoft.design/color)
[U.S. Web Design System (USWDS)](https://designsystem.digital.gov/)
[Responsive Web Design - Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

### Barrierefreiheit
[Screen Reader Demo for Digital Accessibility](https://www.youtube.com/watch?v=dEbl5jvLKGQ)
[Gesetzliche Grundlagen](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website/gesetzliche-pflichten)
[WAVE Web Accessibility Evaluation Tools](https://wave.webaim.org/)
[Design System WashingtonPost - Accessibility Checklist](https://build.washingtonpost.com/resources/accessibility/accessibility-checklist)

[Design Mobile Forms](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/)

[Responsive Design - Typographie](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)
[Smashing Magazine - Webentwicklermagazin](https://www.smashingmagazine.com/)

### CSS
[CSS-Tricks - CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
[CSS-Tricks - CSS Grid auto-fill](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
[CSS Grid Generator](https://cssgrid-generator.netlify.app/)
[CSS Grid Generator](https://cssgridgenerator.io/?utm_source=chatgpt.com)
[CSS Grid Garden - Grid Spiel](https://cssgridgarden.com/)
[CSS Grid Codingfanatasy - Grid Spiel](https://codingfantasy.com/games/css-grid-attack/play)

### Pictures
[Picture Collection](www.unsplash.com)
[Platzhalterbilder](https://placekeanu.com/)
[Placeholder.co](https://placehold.co/)
jsonplaceholder.typicode.com


[Erstellen von Platzhalter Text](www.lipsum.com)

[DPR - Understanding the Device Pixel Ratio](https://tomroth.dev/dpr/)
[Wordpress Templates](https://colorlib.com/wp/css3-table-templates/)

Websites mit CSS Animation
http://stripe.com
http://inkwell.tech
http://plasticbionic.com/studio

## FIGMA
[Figma Project - Taxi-App-Ui](https://www.figma.com/community/file/1159763258551332384)
[Figma Login](https://www.figma.com/files/team/1498585358722290792/recents-and-sharing?fuid=1498585356737422084)
[Figma Tool - Farbkreis](https://www.figma.com/color-wheel/)
[Youtube - Figma Einführung](https://www.youtube.com/watch?v=3hzH8z0yw3A)

## react
[Google Plugin React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1)
[React.dev Quick Start](https://react.dev/learn)
[Might not need an useEffect](https://react.dev/learn/you-might-not-need-an-effect)

####  Documentation / Training

#### Learn English with reading News
[engoo.com](https://engoo.com/app/daily-news)

##### Git
[git - Manual](https://git-scm.com/book/de/v2)
[w3schools - Git Excercises](https://www.w3schools.com/git/git_exercises.asp)
[w3schools - Git Tutoial](https://www.w3schools.com/git/)
[Learn Git Branching](https://learngitbranching.js.org)
[Github Education](https://github.com/education/students)
[github copilot](https://github.com/github-copilot/signup/success)

##### HTML
[HTML Kurs](https://web.dev/learn/html/)

##### HTML Spezifikationen
[web.dev - Webentwicklung lernen](https://web.dev/?hl=de)
[MMDN - Resources for Developers](https://developer.mozilla.org/de/) 

##### TypeScript
[Typescript - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
[Typescript - from Scratch](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
[Typescript - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

##### Youtube Channels
[Youtube - Programmierung ist schwer](https://www.youtube.com/watch?v=cvlzjA-6-As)
[Youtube - Kevin Powell](https://www.youtube.com/kevinpowell)

##### Specifications
[HTML Living Standard - whatwg.org](https://html.spec.whatwg.org)
[HTML Living Standard <b>github</b> - whatwg.org](https://github.com/whatwg/html)
[Unicode CLDR-Projekt](https://cldr.unicode.org/)

Online Portal zum Lernen von JavaScript / Web
https://www.freecodecamp.org/
https://www.codewars.com/
https://leetcode.com/
https://icodethis.com/

#### Tools for WebDev
##### Linux
[Linux Distributions online](https://www.onworks.net/)
##### Typing Skills
[Check your typing skills](Typingtest.com)
[TypeRacer Game](https://play.typeracer.com/)
[Type Game Rockets](https://www.typing.com/student/game/ztype)

##### Flexbox
[Flexbox](https://flexbox.tech/)
[CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

##### Browser
[Get supported Features of Browser](https://caniuse.com)

##### VSCode
[How To Create Custom VSCode Snippets](https://www.youtube.com/watch?v=TGh2NpCIDlc)
[Shortcuts zum schnellen Schreiben im VS Code](https://docs.emmet.io/cheat-sheet/)

##### Online Draw Tool
[Online Draw Plaform](https://excalidraw.com/) 

##### HTML Website Developing Tool
[Online HTML-JS-CSS Entwicklungstool](https://html-css-js.com/)
[Online Web-Developing Tool](https://codepen.io)

##### fakerjs
[Faker Modules](https://fakerjs.dev/guide/)
[Faker Modul Lorem](https://fakerjs.dev/api/lorem.html#lines)

##### Statistics
[Browser Statistics](https://gs.statcounter.com)

Coole Seite mit Spiel und Dokumentationen
https://a-way-to-go.com

Spiel zum Üben von css
https://flukeout.github.io

Üben von js
https://silentteacher.toxicode.fr/

Tool zum Schreiben von js
https://runjs.app/play

ScriptTutor
https://pythontutor.com/

https://lambdabricks.github.io/animating-hofs

https://js-dos.com/DOOM/

https://bioub.github.io/dom-visualizer/

[Webprovider](https://manage.wix.com/)



https://ezprompt.net/


Webdevsimplified auf youtube.de (Empfehlung von Micha)

Animationen mit JavaScript
https://threejs.org

https://starship.rs/ - 
eval "$(starship init bash)"


https://johanneskneussel.de/
https://porkbun.com/

https://developer.mozilla.org/en-US/docs/Web/CSS/:root

webfont Bundler
nginx
http://code-collective.dci-web-dev.com/~ralf
scp index.html ralf@code-collective.dci-web-dev.com:/www/ralf/

https://refactoring.guru/design-patterns/catalog
JWT Decoder
jwt.io

Cloud Authentifizierung
firebase.google.com
clerk.com
cloud functions für firebase

callback hell - Details zum callback


mui.com