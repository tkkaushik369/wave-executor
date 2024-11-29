/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require('node:child_process');

// Specify the folder or configuration for tsc
const command = 'tsc -p "./src/ForgeConfig/tsconfig.json"';

exec(command, (error, stdout, stderr) => {
	if (error) {
		console.error(`Error: ${error.message}`);
		console.error(error);
		return;
	}
	if (stderr) {
		console.error(`Stderr: ${stderr}`);
		return;
	}
	console.log(`Stdout: ${stdout} Completed.`);
});

