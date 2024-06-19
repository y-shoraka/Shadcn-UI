const fs = require('fs');
const path = require('path');
const { program } = require('commander');

program
  .command('add <component>')
  .description('Add a component to your project')
  .action((component) => {
    const templatesDir = path.resolve(__dirname, '..', 'templates'); // Assuming templates one level up
    const targetDir = process.cwd(); // User's current working directory (likely their project root)
console.log(targetDir)
    if (component.toLowerCase() === 'button') {
      const srcFile = path.join(templatesDir, 'button.tsx'); // Path to button.tsx in templates
      const targetFile = path.join(targetDir, 'src', 'button.tsx'); // Target path in user's project (src folder)

      if (!fs.existsSync(targetFile)) {
        fs.copyFileSync(srcFile, targetFile);
        console.log('Copied Button.tsx to your src folder.');
      } else {
        console.log('Button.tsx already exists in your project.');
      }
    } else {
      console.log(`Component ${component} is not available.`);
    }
  });

program.parse(process.argv);