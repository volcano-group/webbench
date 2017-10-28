import commandLineArgs from 'command-line-args'
import commandLineA from 'commander'

const args = process.argv.slice(2)

program
  .version('0.1.0')
  .option('-config, --config', 'import .json file to specify options')
  .parse(process.argv);

if(program.config){
	var fs = require('fs')
	if (fs.existsSync(path.join(__dirname, process.config))) {
		fs.readFile('path.join(__dirname, process.config', 'utf8', function(err, data) { 
		if (err) throw err; 
		obj = JSON.parse(data); })	
		
	}
}

