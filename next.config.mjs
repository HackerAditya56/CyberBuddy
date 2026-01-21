/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Required for static export to GitHub Pages
    basePath: "/CyberBuddy", // Required for project repository pages
    images: {
        unoptimized: true, // Required as Next.js Image Optimization doesn't work with static export
    },
};

export default nextConfig;
