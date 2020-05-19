# filtering-matches-ui

### **Introduction :**
			A stand-alone UI to enable users filter matches based on some pre-configured filters

### **Dependency :**
			A pre-configured Node Server with NPM package and Angular-CLI
			An http-server package if running in PROD mode
			
### **Run Instructions :**
		
		1. DEV Mode
			1. Download the source-code from the master branch
			2. Move the downloaded package to a desired *project* folder
			3. Start your CLI on the desired *project* folder with NodeJS on Path
			4. Test Node, NPM and Angular-CLI installations by running 'npm -v' and 'ng --version' commands respectively.
			5. If new installations are needed follow *References* at the bottom 
			5. Navigate into the *<<filtering-matches-ui>>* folder
			6. Run 'npm install' to install the node dependencies.
			7. Do remember to update the port number of the server in src>>environments>>environment.ts or src>>environments>>environment.prod.ts or both (depending on if you are going to run ng build --prod or not), if the server's port has been updated from the default port.
			8. Run command 'npm start' (this runs on default port  *4200* .To run on a differen port use 'ng serve --port *<<custom port number>>*') 
			9. Open browser and go to 'localhost:4200'  (or localhost:*<<custom port number>>*)
			
		2. PROD Mode
			1. Download the package from the *master-branch >> app-root >> dist folder*
			2. Move the downloaded package to a desired *project* folder
			3. Start your CLI on the desired *project* folder.
			4. Test Node, NPM and Angular-CLI installations by running 'npm -v' and 'ng --version' commands respectively.
			5. Run 'npm install @angular/cli -g' and 'npm install http-server -g' to install angular-cli and http-server package if not already installed.
			5. Run 'http-server dist/filtering-matches-ui'
			6. Navihgate to localhost:8080 (The project runs on default port  *8080*.) 
 
### **Assumptions**
			1. No user login feature required
			2. Assuming any randon users city configuration to make geo-spatial queries
			
### **Known Limitations and Bugs**

### **References**
			1. Node Server : *https://nodejs.org/en/download/*
			2. NPM for Angular : *https://angular.io/guide/setup-local*
			3. PrimeNG Library : *https://www.primefaces.org/primeng/*
			4. Angular Guide : *https://angular.io/start/*
