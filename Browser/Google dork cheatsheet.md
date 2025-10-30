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
➡️ Heute wird sie meist von Suchmaschinen blockiert.

```ext:(doc | pdf | xls | txt | ps | rtf | odt | sxw | psw | ppt | pps | xml) (intext:confidential salary | intext:"budget approved") inurl:confidential```
<small>ext: → filtert nach bestimmten Dateiendungen.
intext: → sucht nach Textinhalten in diesen Dateien.
inurl:confidential → URL enthält „confidential“.</small>
