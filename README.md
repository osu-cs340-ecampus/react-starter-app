# Overview

This guide is intended for the students in CS 340 who want to take a path through the class using React and Node.

This guide walks through everything from getting the tools setup to work on the app, setting up the infrastructure required to build and run your app, and building and (eventually) deploying the app either to OSU's flip server or Heroku.

There are a few assumptions that are made when this guide is written:

- You have basic familiarity with Javascript and MySQL syntax
- You are capable of opening a terminal and navigating using basic commands like\*\* **`cd`,** \*\*`ls`, etc.
- You have access to OSU's flip servers, and have been issued a MySQL database in class.
  - This guide can be easily adapted for development on your local machine if you are so inclined.

## Contributions

Dr. Curry and Prof. Safonte for allowing me the time to build the guide and project for other students to benefit from.

## TL;DR

--git clone

...

# Table of Contents

- [Overview](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#overview)
  - [Contributions](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#contributions)
  - [Clone and Go](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#clone-and-go)
- [Table of Contents](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#table-of-contents)
- [Setting development environment]()
  - [Text Editior](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#text-editior)
  - [Browser](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#browser)
  - [Terminal Application](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#terminal-application)
  - [Git](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#git)
    - [Create a .gitignore File](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#create-a-.gitignore-file)
  - [More on Git](https://github.com/osu-cs340-ecampus/nodejs-starter-app/blob/main/README.md#more-on-git)

# Get The Tools Downloaded You Will Need

You are going to need a few things get going here.

## Text Editior

Text Editors are like clothes. Everyone has their preferences. I prefer VS Code so this guide will be built using that editor. You can use what you please. Atom, Sublime, Notepad, Vim, eMacs or even Notepad are completely acceptable. We just need to be able to edit our code.

## Browser

Chrome will be used as the browser of choice, but you are free to use what you are most comforatble with. Just be sure you know how to navigate the developer tools.

Mac crowd: Safari** \***usually\* is fine. If you have issues though, I would recommend switching to Firefox or Chrome. Safari has some quirks when it comes to rendering CSS, though admittedly over the past few years it has gotten better.

## Terminal Application

You will need some way to interface with the Flip Server and SSH into it. My preferred method is to use VS Code to directly connect to the Flip. Once connected, I can open a VS Code terminal and enter the native linux commands there. As long as you can SSH into a Flip, enter commands, you are all set.

You may prefer Putty or xterm or iTerm (mac). Those are fine, you should be capable of establishing an SSH session to the flip server using whatever tool you choose. Mac users, can use their built in terminal.

Windows 10 users, I'll take this opportunity to make the suggestion of considering installing the Windows Subsystem for Linux 2. It let's you run a native Linux installation right on top of Windows 10. I learned how to install it and use back when I first started the program in Fall 2019. I'll never go back.

[Learn How To Install WSL2 on Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

## Git

I strongly believe in using Version Control. Why?

- It keeps a record of your work.
- It allows you to go back to an older state of the project if you made a mistake.
- You can push it to a Private or Public GitHub repository (always assume Private unless you check with your instructor first)
- It makes working on the same project on different computers a breeze.
- It can support your case if you are ever scrutinized for academic dishonesty. (Having a paper trail of commits you can show the school)
- If your computer fails, your data is not lost.
- It integrates quite easily with other third party services such as Heroku.
-
