const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
    presets: [require('../../tailwind-workspace-preset.js')],
    purge: [
        join(__dirname, '**/*.{js,ts,jsx,tsx}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
};
