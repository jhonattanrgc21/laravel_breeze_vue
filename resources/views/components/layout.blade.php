<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $metaTitle ?? 'Titulo por defecto' }}</title>
</head>

<body>
    <x-partials.navigation />
    {{ $slot }}

    {{-- si el parametro $content existe, se muestra el aside --}}
    @isset($content)
        <aside>
            <h3>Barra lateral</h3>
            <div>{{ $content }}</div>
        </aside>
    @endisset
</body>

</html>
