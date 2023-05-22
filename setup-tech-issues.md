# **SSH**

Bills SSH walkthrough:
https://hackmd.io/@AgDXdHgSSPKsJIhCxlaTuA/BJtNu88fF

# **NPM Issues**


npm install not working
```
nvm install 14
nvm use 14
```
M2 npm install not working
```
type pwd in directory and make sure no spaces or forward slashes are present in the file path. Fix dir names with spaces
and try npm install again. If that doesn't work use the m1 solution now.
```
npm install still doesn't work!
```
run pwd on directory doing installs and make sure directory does not have any forward slashes or special characters outside of '-'
```

Mx chip macs showing error: CPU: bad allocation ..
```
softwareupdate --install-rosetta
```

If any issues occur with install close and open terminal

# **CYPRESS**

Problem: Your system is missing the dependency: Xvfb
Solution 1: Have them run:
```
sudo apt update
sudo apt upgrade
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```
Solution 2: Have them run:
```
sudo apt-get update
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Problem: Cypress verification timed out after 30000 milliseconds
Solution:
increase the default timeout.
Open node_modules\cypress\lib\tasks\verify.js, search for VERIFY_TEST_RUNNER_TIMEOUT_MS and change it from 30000 (default) to 100000.
Save the file, then try to open the runner.

timeout issue still happening? Make sure the code is absolutely correct

Problem: Cypress not found (on Mac)
Solution: download Cypress directly from our CDN

Problem: Cypress cannot run because this binary file does not have executable permissions here: (on Mac)

```
/Users/${username}/Library/Caches/Cypress/${version-number$}/Cypress.app/Contents/MacOS/Cypress
```
Solution:
```
chmod 755 /Users/${username}/Library/Caches/Cypress/${version-number$}/Cypress.app/Contents/MacOS/Cypress
```
(Replace ${} with actual username and version numbers!)

Problem: Cypress failed to start (on Mac)
Solution: Delete cache folder from:
```
/Users/${username}/Library/Caches/Cypress/
```
Reinstall Cypress using
```
npm install
https://github.com/cypress-io/cypress/issues/4089
```
Problem: cypress: command not found (on mac) after running npm run test
Solution: change path in package.json to ./node_modules/.bin/cypress

Problem:

Cypress failed to start.

This is usually caused by a missing library or dependency.

```
npm install cypress@9.2.0
```
or
```
npm cache clear --force
npm install cypress
```

Problem:

```
sh: cypress: command not found
```

Solution:
Install cypress globally using
```
npm install -g cypress@9.2.0
```


# FORGOT UBUNTU PASSWORD

Open powershell:
```
ubuntu config --default-user root
```
Open Ubuntu:
```
passwd STUDENTSUSERNAME
```
change their password

Go back to Powershell:
```
ubuntu config --default-user STUDENTSUSERNAME
```
