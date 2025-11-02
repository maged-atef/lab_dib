<!-- mapping the code -->
# Create dashboard 
1. create vite project
```
    npm create vite@latest
```
2. install tailwindcss
```
    npm i tailwindcss @tailwindcss/vite
```
3. add to vite.config.js file
```
    import tailwindcss from '@tailwindcss/vite'
    tailwindcss() 
```
4. import in main css 
```
    @import "tailwindcss"
```
5. install chart library 
```
    npm i lucide-react
```
6. install react-cli
```
    npm i generate-react-cli
```
7. create template for component
```
     "default": {
        "customTemplates": {
        "component": "src/Template/TemplateName.jsx",
        "style": "src/Template/TemplateName.Module.css"
      },
```
8. adding component Sidebar, Header 