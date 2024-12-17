/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Opcional, para añadir una barra final a las rutas
    images: {
      unoptimized: true, // Evita optimización de imágenes no compatible con exportación
    },
    // reactStrictMode: false,
};

export default nextConfig;
