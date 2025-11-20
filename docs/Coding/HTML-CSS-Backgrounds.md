### Beispiel für unterschiedliche Hintergrundeffekte
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
        .box {
            width: 200px;
            height: 200px;
            margin-bottom: 2rem;
        }

        .test01 {
            background: linear-gradient(90deg, #f6f6f7d3, #23722377);
        }

        .test02 {
            background: linear-gradient(45deg, #f6f6f7d3, #01130177), url(swirl.png) center;
        }

        .test03 {
            background: radial-gradient(circle, red, yellow, green);
        }

        .test04 {
            background: radial-gradient(ellipse farthest-corner at 20% 40%, red, yellow, green);
        }

        .test05 {
            background: conic-gradient(
                red 0deg 120deg,
                yellow 120deg 180deg,
                lime 180deg 270deg,
                cyan 270deg 360deg
            );
        }

        .test06 {
            background: repeating-linear-gradient(
                45deg,
                red,
                red 10px,
                yellow 10px,
                yellow 20px
            );
        }

        .test07 {
            height: 20rem;
            border-radius: 50%;
            background: repeating-conic-gradient(
                #00ff00 0deg 15deg,
                #0000ff 15deg 30deg
            );
            mask-image: radial-gradient(circle, black 30%, transparent 100%);
            animation: spin 5s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg) scale(0.1); }
            to   { transform: rotate(360deg) scale(1); }
        }

        .test08 {
            height: 20rem;
            background: url("swirl.png") center/cover no-repeat;
            animation: swirl-spin 10s linear infinite;
            border-radius: 50%;
        }

        @keyframes swirl-spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
        }
    </style>
</head>
<body>

    <div class="box test01"></div>
    <div class="box test02"></div>
    <div class="box test03"></div>
    <div class="box test04"></div>
    <div class="box test05"></div>
    <div class="box test06"></div>
    <div class="box test07"></div>
    <div class="box test08"></div>

</body>
</html>
```
