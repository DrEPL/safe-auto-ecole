const path = require('path');

module.exports = {
    entry: './node_modules/aos/dist/aos.js',
    output: {
        filename: 'aos.bundle.js',
        path: path.resolve(__dirname, 'static', 'js'), // Répertoire de sortie statique
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',
}

