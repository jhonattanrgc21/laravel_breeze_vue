<x-layout meta-title="Editar Post">
    <h1>Editar Post</h1>
    <form action="{{ route('posts.update', $post) }}" method="POST">
        @csrf.@method('PATCH')
        @include('posts/form')
        <button type="submit">Guardar</button>
    </form>
    <a href="{{ route('posts.index') }}">Regresar</a>
</x-layout>
