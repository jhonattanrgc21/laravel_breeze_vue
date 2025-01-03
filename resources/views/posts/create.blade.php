<x-layout meta-title="Nuevo Post">
    <h1>Crear Post</h1>
    <form action="{{ route('posts.store') }}" method="POST">
        @csrf
        <label for="">
            Titulo <br>
            <input name="title" type="text" value="{{old('title')}}">
        </label>
        <br>
        @error('title')
            <p style="color: red">{{ $message }}</p>
        @enderror

        <label for="">
            Contenido <br>
            <textarea name="body" id="" cols="30" rows="10">{{old('body')}}</textarea>
        </label>
        <br>
        @error('body')
        <p style="color: red">{{ $message }}</p>
    @enderror
        <button type="submit">Guardar</button>
    </form>
    <a href="{{ route('posts.index') }}">Regresar</a>
</x-layout>
