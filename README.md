# github_repository_search
This is a Single Page Application project build with Javascript, React and Vite. The business logic (services) is built only with Javascript. The purpose of this application is to retrieve details of a GitHub repository based on the provided repository name. It utilizes GitHub's API to search for repositories and returns information such as the repository's name, author, number of stars, number of forks, author's profile image, and whether the repository is considered popular. By entering the name of a repository, the application fetches the corresponding details from GitHub and presents them to the user.
# Steps to start the application 
1- Generate a Github fine-grained token (Settings -> Developer settings -> Fine-grained-token -> Generate new token)<br/>
2- Copy the generated token and create .env file then add REACT_APP_ACCESS_TOKEN='the generated token' into the file<br/>
3- Install all the dependency by running npm install<br/>
4- Start the application by running npm run dev <br/>
# Scripts
## npm run dev
Starts the application<br/>
## npm run build
Builds the application for production in the dist directory.<br/>
## npm run preview
Serves the production build locally for preview.<br/>
## npm test
Runs the test suites using Jest.<br/>
