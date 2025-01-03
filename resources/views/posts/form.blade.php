<label for="">
    Titulo <br>
    <input name="title" type="text" value="{{ old('title', $post->title) }}">
</label>
<br>
@error('title')
    <p style="color: red">{{ $message }}</p>
@enderror

<label for="">
    Contenido <br>
    <textarea name="body" id="" cols="30" rows="10">{{ old('body', $post->body) }}</textarea>
</label>
<br>
@error('body')
    <p style="color: red">{{ $message }}</p>
@enderror
