#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

program
  .command('add <component>')
  .description('Add a component to your project')
  .action((component) => {
    const templatesDir = path.resolve(__dirname, '..', 'templates');
    const targetDir = process.cwd(); // Current working directory
    console.log(`Adding component: ${component}`);
    if (component.toLowerCase() === 'button') {
      const srcFile = path.join(templatesDir, 'button.tsx');
      const destFile = path.join(targetDir, 'button.tsx');
      if (!fs.existsSync(destFile)) {
        fs.copyFileSync(srcFile, destFile);
        console.log(`Copied Button.js to your project.`);
      } else {
        console.log(`Button.js already exists in your project.`);
      }
    } else {
      console.log(`Component ${component} is not available.`);
    }
  });

program.parse(process.argv);
