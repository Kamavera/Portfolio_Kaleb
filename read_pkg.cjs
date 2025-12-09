const fs = require('fs');
const path = require('path');

try {
    const packageJsonPath = path.join('node_modules', 'pdf-parse', 'dist', 'pdf-parse', 'cjs', 'index.cjs');
    const content = fs.readFileSync(packageJsonPath, 'utf8');
    console.log(content.substring(0, 2000));
} catch (err) {
    console.error('Error reading package.json:', err);
}
