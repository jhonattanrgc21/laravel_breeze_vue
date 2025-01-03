<x-layout  :meta-title="$post->title">
    <h1>{{ $post->title}}</h1>
    <p>{{$post->body}}</p>
    <a href="{{route('posts.index')}}">Regresar</a>
</x-layout>


