/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // gera pasta estática "out/"
  eslint: { ignoreDuringBuilds: true },     // não falha por ESLint
  typescript: { ignoreBuildErrors: true }   // não falha por TS
};
export default nextConfig;

