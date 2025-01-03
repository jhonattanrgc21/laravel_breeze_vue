<x-layout meta-title="Blog">

    <h1>Blog</h1>

    <a href="{{ route('posts.create') }}">Crear Post</a>
    @foreach ($posts as $post)
        <div style="display: flex; align-items: baseline">
            <h2>
                <a href="{{ route('posts.show', $post) }}">{{ $post->title }}</a>
            </h2> &nbsp;
            <a href="{{ route('posts.edit', $post) }}">Editar</a>

        </div>
    @endforeach

</x-layout>
