#!/usr/bin/env node
console.log("File created successfully!");

// Argument Handling
if (process.argv.includes('--version') || process.argv.includes('-v')) { console.log('GoblinWordGenerator v1.0.0'); process.exit(0); }
if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Usage: goblin-gen [options]

Options:
  -h, --help    Show this help message
  -v, --version Show version number

Examples:
  ./app.js      Run the generator
  goblin-gen    Run globally (if linked)
    `);
    process.exit(0);
}
console.log('\x1b[32m%s\x1b[0m', 'Generated: ' + (typeof word !== 'undefined' ? word : 'No word generated'));
