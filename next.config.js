/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mantém o site 100% estático (SSG/Export). Ótimo para Vercel e governança.
  output: "export",
  trailingSlash: true,

  // next/image em export precisa ser "unoptimized" (ou usar um loader externo).
  images: { unoptimized: true }
};

module.exports = nextConfig;
