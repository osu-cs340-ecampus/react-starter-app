# React-Starter-App

## Table of Contents

## Individual Git Work Cycle

#### Remember to code only on your dev-branch

1. Inform your teammate what feature you are going to work on in discord.
2. Pull main and update your dev-branch:&emsp;`git checkout main`&emsp;&emsp;| checkout the main branch

   &emsp;`git pull --all`&emsp;&emsp;| update the main branch code from the most recent github repo main branch code

   &emsp;`git checkout dev-branch`&emsp;&emsp;| Switch the active branch to your dev-branch

   &emsp;`git merge main`&emsp;&emsp;| Merges the main branch into your dev-branch.&emsp;&emsp;| It is important that the active branch is your dev-branch before you merge main into it.

3. Work on your new feature inside the dev-branch.
4. Save all files (CMD+S)**REPEAT STEPS 3 and 4 While you are working**..**READY TO MAKE A COMMIT for dev-branch?**
5. Stage changes&emsp;`git add .`&emsp;&emsp;| If you don't want to add all files with "`.`" other commands include:&emsp;&emsp;&emsp;`git status`&emsp;&emsp;&emsp; or&emsp;&emsp;&emsp;`git add <name of file here>`
6. Commit changes&emsp;`git commit -m "message"`
7. Push changes (git push)
   &emsp;`git push`
   &emsp;&emsp;| Pushes your local branch to the online branch so that it is available to your teammate to view on github.

**- Repeat steps 3 through 7 as needed until your feature is completed.**
**- When both teammates have reviewed your new code, you will follow the "FINISH A FEATURE" section below.**

## Finish a Feature

- We should probably merge features together while on a discord call to avoid any errors
- Once the feature is complete, initiate a merge request.
- Note: The feature branch should be working before it is merged with The source of truth (main).

1. Switch to main&emsp;`git checkout main`&emsp;&emsp;| Switch the active branch to the main branch.&emsp;&emsp;| Note: Before you merge your personal branch into main, the active branch must be "main".
2. Update main to check for most recent changes from repo&emsp;`git pull`&emsp;&emsp;| Downloads the most updated version of the main branch.
3. Merge dev-branch into the main branch&emsp;`git merge dev-branch`&emsp;&emsp;| Merges dev-branch into the main branch in the local repository.
4. Complete any necessary changes if a merge conflict happens!&emsp;&emsp;| I will add more instructions to this later...
5. Push the newly merged main branch to github repo
   &emsp;`git push`
   &emsp;&emsp;| Pushes the updated main branch to the online repository

- Now that the feature is done, go back to the "INDIVIDUAL GIT WORK CYCLE" section to start your new feature on your own dev-branch.
