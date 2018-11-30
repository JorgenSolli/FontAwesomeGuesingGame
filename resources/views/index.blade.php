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
        <section :class="isLoading" id="app" class="card">
            <game v-if="isGaming"></game>
            <welcome v-else></welcome>
        </section>
    </div>

    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
