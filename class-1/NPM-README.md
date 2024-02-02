- npm --version/ node --v
  check npm version installed.

- npm init/ npm init --yes (to skip questions)
  create a package.json file.

- npm install/ npm --i
  create the node_modules folder (if it does not exist yet) and install dependencies that are necessary to work. If a dependency has internal dependencies, npm install command will also install these internal dependencies, because these are necessary.

	"dependencies": { --> necessary dependencies to work.
		"typescript": "5.3.3" --> SEMANTIC VERSIONING X.Y.Z, X (mayor, no compatibility with previous versions), Y (minor new features), Z (bug fixes)
		"picocolors": "^1.0.0" --> dependency version with "carret" symbol, to get the last version from minor (feature) or patch (fix) updates. Preferably delete it to avoid problems.
	}

- npm install yourdependency -D
  install development dependencies.
  Always avoid installing unnecessary dependencies as necessary dependencies those that are not required to function in PRD, install them as development dependencies if you need them for development.

  "devDependencies": {
  	"eslint": "^8.56.0"
  }

- npm uninstall
  uninstall dependencies.
