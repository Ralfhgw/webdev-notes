#### SVG Vectorbilder sind HTML Code Dateien und sind anfällig für Malicious Code.
```
<svg xmlns="http://www.w3.org/2000/svg" onload="alert('XSS from SVG onload!')"> <circle cx="50" cy="50" r="40" fill="red" /> <script> // This script will execute if allowed by the context alert('XSS from SVG script tag!'); // Malicious code could try to steal cookies, manipulate the DOM, etc. // console.log('Cookies:', document.cookie); </script> </svg>
```