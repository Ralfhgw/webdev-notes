https://docs.emmet.io/cheat-sheet/
[Emmet-Cheat Sheet](./public/vscode-cheatsheet-a5.pdf)


```
<!-- emmet: (header>(h1>lorem3))+main>((h2>lorem5)+p*3>lorem100)*10 -->
```

# Emmet Cheatsheet for VS Code (Obsidian Edition)

Emmet speeds up HTML & CSS. In VS Code, type abbreviation & press `Tab` or `Enter`.

##### Emmet Shortcut definiert:
File --> Einstellungen --> Keyboard Shortcuts --> Emmet: Wrap with Abbreviation --> STR+ALT+W 


##### HTML Abbreviations

##### Elements, IDs & Classes

| Syntax             | Example                  | Result                             |
| :----------------- | :----------------------- | :--------------------------------- |
| Element            | `div`                    | `<div></div>`                      |
| ID                 | `div#header`             | `<div id="header"></div>`          |
| Class              | `p.text`                 | `<p class="text"></p>`             |
| Multiple Classes   | `div.c1.c2`              | `<div class="c1 c2"></div>`        |
| Implicit `div`     | `#header` or `.container`| `<div id="header"></div>`          |
| Implicit child     | `ul>.item`               | `<ul><li class="item"></li></ul>`  |

##### Nesting Operators

| Op. | Name       | Example          | Result                                  |
| :-- | :--------- | :--------------- | :-------------------------------------- |
| `>` | Child      | `ul>li`          | `<ul><li></li></ul>`                   |
| `+` | Sibling    | `h1+p`           | `<h1></h1><p></p>`                      |
| `^` | Climb-up   | `div>p>span^a`   | `<div><p><span></span></p><a href=""></a></div>` |
| `*` | Multiply   | `li*3`           | `<li></li><li></li><li></li>`          |
| `()`| Grouping   | `(h1+p)*2`       | `<h1></h1><p></p><h1></h1><p></p>`    |

##### Attributes

| Syntax                | Example                             | Result                                    |
| :-------------------- | :---------------------------------- | :---------------------------------------- |
| `[attr]`              | `a[target=_blank]`                  | `<a href="" target="_blank"></a>`         |
| `[attr="val"]`        | `input[type=text]`                  | `<input type="text">`                     |
| `[a1="v1" a2="v2"]`   | `img[src="i.png" alt="My Img"]`     | `<img src="i.png" alt="My Img">`          |
| **VS Code Note:**     | `input:text` or `input:checkbox`    | `<input type="text">` (VS Code specific shortcut) |

##### Text Content `{}`

| Example               | Result                     |
| :-------------------- | :------------------------- |
| `p{Hello}`            | `<p>Hello</p>`             |
| `a{Click}[href=#]`    | `<a href="#">Click</a>`    |

##### Item Numbering `$`

| Syntax    | Example           | Result (1st item)        | Notes               |
| :-------- | :---------------- | :----------------------- | :------------------ |
| `$`       | `li.item$*3`      | `<li class="item1"></li>`| Single digit        |
| `$$`      | `li.item$$*3`     | `<li class="item01"></li>`| Padded (2 digits) |
| `$@-`     | `li.item$@-*3`    | `<li class="item3"></li>`| Reverse order       |
| `$@N`     | `li.item$@3*3`    | `<li class="item3"></li>`| Start from N        |

##### Lorem Ipsum

| Syntax     | Result (example)                  |
| :--------- | :-------------------------------- |
| `lorem`    | `<p>Lorem ipsum dolor sit...</p>` |
| `loremN`   | `lorem5` -> 5 words               |
| `p*2>lorem3`| 2 paras, each with 3 words     |

##### Document Initializers

| Syntax | Result (abbreviated)  |
| :----- | :-------------------- |
| `!`    | HTML5 boilerplate     |

---

##### CSS Abbreviations

Type parts of property/value. Default unit `px`.

##### Basic Properties & Values

| Abbreviation | Result                      | Notes                          |
| :----------- | :-------------------------- | :----------------------------- |
| `p10`        | `padding: 10px;`            |                                |
| `m0-a`       | `margin: 0 auto;`           |                                |
| `w100p`      | `width: 100%;`              | `p` -> `%`                     |
| `h10e`       | `height: 10em;`             | `e` -> `em`, `r` -> `rem`      |
| `fz16`       | `font-size: 16px;`          |                                |
| `bgc#f00`    | `background-color: #f00;`   |                                |
| `c#3`        | `color: #333;`              | (Shorthand hex)                |
| `posa`       | `position: absolute;`       | `posr` (relative), `posf` (fixed) |
| `fl`         | `float: left;`              | `fr` (right)                   |
| `dib`        | `display: inline-block;`    | `db` (block), `df` (flex), `dg` (grid), `dn` (none) |
| `jc:c`       | `justify-content: center;`  | Flex/Grid: `ai:c` (align-items) |
| `bd1-s-#c`   | `border: 1px solid #ccc;`   | `s`(solid), `d`(dashed)        |

##### Units (Suffixes)

| Suffix    | Example | Result          |
| :-------- | :------ | :-------------- |
| `p`       | `w50p`  | `width: 50%;`   |
| `e` / `em`| `fz1.2e`| `font-size: 1.2em;`|
| `r` / `rem`| `m1r`   | `margin: 1rem;` |
| *None*    | `p10`   | `padding: 10px;`|

##### `!important`

Add `!` at the end: `p10!` -> `padding: 10px !important;`

---

##### VS Code Emmet Actions (Cmd/Ctrl+Shift+P)

*   **Emmet: Wrap with Abbreviation:** Select code, run command, type Emmet (e.g., `div.wrapper`).
*   **Emmet: Remove Tag:** Removes innermost tag pair.
*   **Emmet: Update Tag:** Change current tag (e.g., `div` to `article`).
*   **Emmet: Balance (Outward/Inward):** Select parent/child element.
*   **Emmet: Go to Matching Pair:** Jump to opening/closing tag.

---

**Tip:** `element[attr:value]` (e.g. `input[type:text]`) can also work in VS Code for common attributes as a shortcut, though standard Emmet is `element[attr="value"]`.