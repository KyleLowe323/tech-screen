## Installation/Setup

1. If the user does not have node installed locally I would advise installing [node](https://nodejs.org/en/).
1. Once node is installed, there are multiple options for opening the project.

   1. Clone the repo down locally via the [tech-screen](https://github.com/KyleLowe323/tech-screen) repo link.
   1. Through your IDE of choice _(preferred is [VS Code](https://code.visualstudio.com/download))_ open the directory.
   1. Through the command line you can navigate to the directory without needing to open up the individual files.

1. To ensure all packages that were used in the project are install correctly you can either run `yarn install` or `npm install`.
1. Two terminals are required to run the app. Once the commands below are ran in their respective terminals the application will open a browsing session with the url [localhost:3000](http://localhost:3000)

   1. API Server - `yarn run server`
   1. Client - `yarn start`

## Node API Server

The need for a node server was necessary due to the potential for a CORS error to exist when returning data from the github API when running the application locally.

## Client Web

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This approach was chosen as it's one of the quickest ways to get started building a web application. In these situations it may be helpful to have a foundational project template that includes all necessary frameworks and technologies as well as some boilerplate examples that can assist with adding features as the project kicks progresses through development sprints.

## Goals

- General Tasks

  - Spin up Create React App (CRA)
  - Pseudo code for API fetch of org data
  - Confirm that data is returning
  - Table component to display data
  - Table scrolls and contains click to repo commits

- Stretch Goals

  - Format/style table to be more visually appealing.
  - Allow for the retrieval of more than one org data
  - Allow user to select field to sort

- Gold platting _(if more time were available)_
  - Uplift state management using [Redux](https://redux.js.org/)
  - Additional query params for server request to achieve pagination
  - Move the overall sorting of data to a selector using [Reselect](https://github.com/reduxjs/reselect) or even useMemo to ensure that the data is memoized.
  - Proper loading/fetching indicator when fetching data.
  - Proper tooltips in lieu of `title` attribute for areas where data is too large to fit into predefined cells

## Testing Instructions

1. When the page displays, the default dataset being displayed is fromt the Netflix organization. The data being displayed is returned from the API using the max number of records _(`per_page` query param = 100)_. The data is sorted by `watchers_count`, but there is the potential for this to be really any field displayed.

1. The 4 basic buttons at the top convey some well know companies and the ability to toggle between the same dataset for their respective organizational repos. Had I spent more time, the overall UI for this could be uplifted, but again MVP product and its functionality being conveyed.

1. The list is created using [react-virtualized](https://github.com/bvaughn/react-virtualized), an infinite scrolling UI framework that my team uses frequently to display large amounts of data in list form with the ability to distrubute the only render what is visible to the end user as they scroll. Each row contains an `onClick` method that will navigate you to the current repos list of commits. This satisfies the requirement to view the most recent and additional commits for each repo displayed. Again, had more time been available I would have uplifted this specific navigation feature without impacting the current browsing history using [React Router](https://reactrouter.com/). Because the application is running locally, general navigation back to the application using the back feature once a row is clicked appears to no worked as expected. To navigate back you can type [localhost:3000](http://localhost:3000) in the url window or click the link.
