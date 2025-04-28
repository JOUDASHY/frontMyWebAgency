const nextConfig = {
  output: 'export', // Active l'export statique
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Nécessaire pour l'export statique
  },
  // ⚠️ La section 'experimental' avec optimizeFonts a été supprimée car :
  // 1. optimizeFonts est maintenant activé par défaut
  // 2. L'option n'existe plus dans les versions récentes
  // 3. Le comportement par défaut est déjà optimal
};

export default nextConfig;