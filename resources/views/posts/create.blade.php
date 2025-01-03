<x-layout meta-title="Nuevo Post">
    <h1>Crear Post</h1>
    <form action="{{ route('posts.store') }}" method="POST">
        @csrf
        @include('posts/form')
        <button type="submit">Guardar</button>
    </form>
    <a href="{{ route('posts.index') }}">Regresar</a>
</x-layout>
