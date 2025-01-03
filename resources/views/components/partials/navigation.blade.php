<nav>
    <ul>
        <li><a class="{{ request()->routeIs('home') ? 'text-gray-400' : 'text-gray-600' }}"
                href="{{ route('home') }}">Inicio</a></li>
        <li><a class="{{ request()->routeIs('posts.*') ? 'text-gray-400' : 'text-gray-600' }}"
                href="{{ route('posts.index') }}">Blog</a></li>
        <li><a class="{{ request()->routeIs('about') ? 'text-gray-400' : 'text-gray-600' }}"
                href="{{ route('about') }}">Nosotros</a></li>
        <li><a class="{{ request()->routeIs('contact') ? 'text-gray-400' : 'text-gray-600' }}"
                href="{{ route('contact') }}">Contacto</a></li>
    </ul>
</nav>
