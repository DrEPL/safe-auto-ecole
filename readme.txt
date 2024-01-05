compile css
npx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --watch

compile aos
npx webpack --config webpack.config.js