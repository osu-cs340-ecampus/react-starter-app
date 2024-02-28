# TL;DR

1. Clone the starter app repository: `git clone git@github.com:osu-cs340-ecampus/react-starter-app.git`
2. Navigate to the `/App` directory: `cd react-starter-app/App`
3. Set up the frontend:
   1. Change directory to frontend: `cd frontend`
   2. Install necessary packages: `npm install`
   3. Launch the frontend: `npm start`
4. Set up the backend:
   1. Change directory to backend: `cd ../backend` 
   2. Install necessary packages: `npm install`
   3. Launch the backend: `npm start`
5. Begin your development journey: Happy Hacking!

# Overview

This guide is tailored for students enrolled in CS 340 who aim to develop their final project using React.js, Node/Express, and MySQL.

The starter code provided in this guide encompasses essential components such as tool setup, infrastructure for building and running your application, and guidelines for deploying your application to OSU's Flip server.

Key Assumptions:

1. You have read through and understand the [nodejs-starter-app](https://github.com/osu-cs340-ecampus/nodejs-starter-app)
   - That guide uses nodejs, express, and handlebars, but goes deeper into the inner workings of express and nodejs.
2. You have a foundational understanding of JavaScript and MySQL syntax.
3. You are adept at using terminal commands like `cd`, `ls`, `mkdir`, etc.
4. Access to OSU's flip servers and a MySQL database is available to you.
   - Note: Adaptations for local development are possible and outlined in this guide.

## Introduction

The goal of this repo is to provide you with the basic structure of a React/Vite + Express/Node full-stack application, including a few example SQL queries.

## Getting Started

IDE: Visual Studio Code

Browser: Chrome or Firefox are recommended, though other browsers will probably suffice.

VScode SSH extension: [Visual Studio Code SSH Documentation](https://code.visualstudio.com/docs/remote/ssh)

Terminal: The built-in terminal in VSCode works great.

## Backend Setup (Node.js/Express)

1. Create a `.env` file in the root directory (`.env` should have the same indentation as `server.js`, both need to be at the root of the directory).
2. Git cloning does not include the `.env` file for obvious reasons. Here is the naming schema I would suggest (fill in with info from activity 2 - Connecting to 340 DB)):
   ```python
   DB_HOST="classmysql.engr.oregonstate.edu"  # keep this
   DB_USER="cs340_youronid"                   # replace with your onid
   DB_DATABASE="cs340_youronid"               # replace with your onid
   DB_PASSWORD="****"                         # your db password - last 4 digits of osu id number
   PORT=8500                                  # Set a port number between:[1024 < PORT < 65535]
3. `server.js` is the entry point for the backend. No changes are needed here except perhaps updating the `console.log()` statement in the `app.listen()` to reflect the FLIP server you've connected to via SSH.

4. Inside your flip server you will need to set up the `ddl.sql` file located inside `/backend/databases/` using the source command.
   ```sh
   # change directory to where the ddl.sql file is located
   cd react-starter-app/App/backend/databases  # or wherever the ddl.sql is located

   # normal login command (if not using shortcut)
   mysql -u cs340_youronid -h classmysql.engr.oregonstate.edu -p cs340_youronid

   # type in your 4 digit mariadb password and press 'enter' key
   ```

   flip will login to mariadb...
   ```
   Welcome to the MariaDB monitor.  Commands end with ; or \g.
   Your MariaDB connection id is 1359790
   Server version: 10.6.16-MariaDB-log MariaDB Server

   Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
   ```
   Use 'show tables;' command to ensure that your database is empty, backup tables if necessary prior to moving on, drop all of your tables.
   ```sql
   MariaDB [cs340_maesz]> SHOW tables;
   Empty set (0.001 sec)
   ```
   Now you can source the ddl.sql
   ```sql
   MariaDB [cs340_maesz]> source ddl.sql;
   Query OK, 0 rows affected (0.001 sec)

   Query OK, 0 rows affected, 1 warning (0.004 sec)

   Query OK, 0 rows affected (0.007 sec)

   Query OK, 11 rows affected (0.001 sec)
   Records: 11  Duplicates: 0  Warnings: 0

   Query OK, 0 rows affected, 1 warning (0.003 sec)

   Query OK, 0 rows affected (0.005 sec)

   Query OK, 4 rows affected (0.000 sec)
   Records: 4  Duplicates: 0  Warnings: 0

   Query OK, 0 rows affected, 1 warning (0.003 sec)

   Query OK, 0 rows affected (0.006 sec)

   Query OK, 9 rows affected (0.001 sec)
   Records: 9  Duplicates: 0  Warnings: 0

   Query OK, 0 rows affected (0.007 sec)

   Query OK, 8 rows affected (0.001 sec)
   Records: 8  Duplicates: 0  Warnings: 0

   Query OK, 0 rows affected (0.000 sec)
   ```
   Confirm everything sourced with a `show tables;` command
   ```sql
   MariaDB [cs340_maesz]> show tables;
   +-----------------------+
   | Tables_in_cs340_maesz |
   +-----------------------+
   | bsg_cert              |
   | bsg_cert_people       |
   | bsg_people            |
   | bsg_planets           |
   +-----------------------+
   4 rows in set (0.001 sec)
   ```
   Exit mariadb
   ```sh
   MariaDB [cs340_maesz]> exit
   Bye
   flip3 ~/react-starter-app/App/backend/database 1010$  # We are now back in the terminal
   ```

5. Now you must install all the node dependencies outlined in the `package.json` and `package-lock.json`. Run the following commands to do this:
   
   Change directory to `/backend`, wherever that exists in your file structure.
   ```sh
   cd ~/react-starter-app/App/backend
   ```
   Use `npm install` to download everything (Some of you may have to debug this step if anything goes wrong...):
   ```sh
   flip3 ~/react-starter-app/App/backend 1023$ npm install
   npm WARN EBADENGINE Unsupported engine {
   npm WARN EBADENGINE   package: 'lru-cache@8.0.5',
   npm WARN EBADENGINE   required: { node: '>=16.14' },
   npm WARN EBADENGINE   current: { node: 'v16.13.0', npm: '8.1.0' }
   npm WARN EBADENGINE }

   added 122 packages, and audited 123 packages in 28s

   15 packages are looking for funding
   run `npm fund` for details

   found 0 vulnerabilities
   flip3 ~/react-starter-app/App/backend 1024$ 
   ```

6. Now you can start your application with the start script located in the `package.json`
   ```bash
   flip3 ~/react-starter-app/App/backend 1024$ npm start

   > backend@1.0.0 start
   > nodemon server.js

   [nodemon] 3.0.2
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching path(s): *.*
   [nodemon] watching extensions: js,mjs,cjs,json
   [nodemon] starting `node server.js`
   Server running:  http://flip3.engr.oregonstate.edu:8500...
   ▌
   ```

   This repo uses the package `nodemon` to run your program continuously. You may also install the package `forever` to accomplish this, see the [nodejs-starter-app](https://github.com/osu-cs340-ecampus/nodejs-starter-app) for instructions regarding the `forever` package.

## Frontend Setup (Vite)

[Outline the process for setting up the React frontend, including environment configuration and dependency management.]

## Running the Application

[Explain how to run both the backend and frontend together, including any necessary commands.]

## Testing

Please note that testing is outside the scope of this project and course and will not be covered in this guide.

## Git

[Provide guidelines on using Git for version control throughout the project.]

## Deployment

[Discuss the methods for deploying the application, focusing on OSU's flip server and any alternatives.]

## Troubleshooting

[List common issues that may arise and their potential solutions.]

## Additional Resources

[Include links or references to additional reading materials or tutorials.]

## Conclusion

[Summarize the purpose of the guide and what students should have achieved upon completion.]

## Contributions

This guide was developed under the supervision of Dr. Michael Curry and Dr. Danielle Safonte, with contributions from Devin Daniels and Zachary Maes.
