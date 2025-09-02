# 📘 Development Notes – Weather Now

These notes document the process, issues, and fixes while building and deploying the **Weather Now** project.

---

## 🔹 Git & GitHub Setup
1. Initialized repository and pushed project to GitHub:
   ```bash
   git init
   git remote add origin https://github.com/PranjaliPatil22/weather-now.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main

2.Cloned repo on local system using:
git clone https://github.com/PranjaliPatil22/weather-now.git

3.Ensured project runs locally with:
npm install
npm start

### .gitignore Setup
Created a .gitignore file in the project root with:
node_modules/
build/
dist/

### CodeSandbox Deployment
 https://codesandbox.io/p/devbox/hungry-wilbur-glwgd7
 Tested the app in preview mode.

 ### Issues & fix
 Project not working after git clone: 
 then Fixed by deleting node_modules and reinstalling:

rm -rf node_modules

npm install





