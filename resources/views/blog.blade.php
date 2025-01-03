<x-layout meta-title="Blog">

    <h1>Blog</h1>

    @auth
        <a href="{{ route('posts.create') }}">Crear Post</a>

    @endauth
    @foreach ($posts as $post)
        <div style="display: flex; align-items: baseline">
            <h2>
                <a href="{{ route('posts.show', $post) }}">{{ $post->title }}</a>
            </h2>
            @auth
                &nbsp;
                <a href="{{ route('posts.edit', $post) }}">Editar</a> &nbsp;
                <form action="{{ route('posts.destroy', $post) }}" method="post">
                    @csrf.@method('delete')
                    <button type="submit">Eliminar</button>

                </form>

            @endauth

        </div>
    @endforeach

</x-layout>
