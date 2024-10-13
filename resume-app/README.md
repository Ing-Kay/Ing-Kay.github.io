Résumé
About

It is my simple resume made with HTML, CSS, JS using JSON data.
Initially, the project was written with NodeJS architecture. View Old Project

HTML is used for making the initial block structure of the page with some simple data, CSS is used for giving some style to the page, and JS is used to create small UI components dynamically and fill the data into the page. All the data about details related to the user is stored as a JSON object in a JS file.

View it in action https://imvpn22.github.io/resume/
Getting Started
Using GitHub Pages

( Make sure you have a GitHub account )

    Fork this repo by clicking the Fork button on the top-right corner.
    Go to the forked repo on your profile (It opens by default).
    Edit the data/profile.js file using GitHub online editor and fill in your data.
    Save above by doing commit changes.
    Open the settings of repo and enable github pages choosing a source to master branch.
    Visit https://<your GitHub username>.github.io/resume in your browser.
    Additionally you can print/save the page as a PDF.

Using local development

If you are a web developer like me and want to run this on your local system then follow the instructions mentioned below.
The project needs to be hosted using any Web-Server like apache, tomcat, http-server or SimpleHTTPServer etc. I use http-server as it is very simple to use. Install http-server from here (NodeJS and npm need to installed first to run it).

Additionally, if you are using VSCode, the same can be done with Live Server extention.

    Clone the repo using git or download the zip of the project on your local system. To clone

$ git clone https://github.com/imvpn22/resume.git

    Go into the resume directory and run

$ http-server

which will show something like

Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.21:8080
Hit CTRL-C to stop the server

    Visit http://localhost:8080 in the browser.

    Make changes in the data/profile.js file, and refresh the page in the browser. Additionally, you can make changes in the architecture and design of the page as well.

    Save/Print the PDF page. Your Resume is ready.

Support

If you like the project idea, make sure to give it a star. If you want to contribute, just give me a PR.