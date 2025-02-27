import svgtofont from 'svgtofont';
import path from 'node:path';

svgtofont({
    src: path.resolve(process.cwd(), "src/icons"), // SVG icons directory
    dist: path.resolve(process.cwd(), "src/dist"), // Output directory for the font files
    fontName: "MyIconFont", // Name of your font
    css: true, // Generates a CSS file for easy usage
    website: {
        title: "My Icon Font",
        description: "A custom icon font created from SVGs",
        logo: path.resolve(process.cwd(), "src/logo.svg"), // Optional: add your project logo
        version: "1.0.0"
    }
}).then(() => {
    console.log("Icon font created successfully!");
});
