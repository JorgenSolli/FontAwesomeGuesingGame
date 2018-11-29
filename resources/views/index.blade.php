<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Font Awesome Guessing Game</title>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400" rel="stylesheet">
    <link href="{{ mix('/css/semantic.css') }}" rel="stylesheet">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div class="container">
        <section id="app">
            <div id="header">
                <h1>The <strong>Font Awesome</strong> Icon Game</h1>
            </div>

            <div id="score">

            </div>

            <div id="icon-container">
                <i :class="currentIcon" id="current-icon"></i>
            </div>

            <div id="controllers">
                <div class="ui huge input">
                    <input v-on:keyup="checkGuess" v-model="iconGuess" id="icon-guess" type="text" placeholder="Go ahead...">
                </div>
            </div>
        </section>
    </div>

    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
