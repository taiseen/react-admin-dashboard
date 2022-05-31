<img src="./src/data/readme.png" style='width:185px' align="right" />

> 26 - May - 2022 

## Admin DashBoard | [Live Link][link]

# TailwindCSS + React + Syncfusion


## Yarn base packages...
|No| Package Installs   | Use for                       |
|--|--------------------|-------------------------------|
| 1| React              | SAP (Single Page Application) |
| 2| React-icon         | icons for UI                  |
| 3| React-Router-Dom   | navigation inside application |
| 4| TailwindCSS        | custom UI design by CSS       |
| 5| Syncfusion         | pre-build component for UI    |

```
yarn --legacy-peer-deps
```

## Project Structure

    
    ├── public                # root div#id for react app
    ├── src
    |   ├── components        # all needful components 
    |   |   └── Charts        # chart components
    |   ├── context           # globally data sharing
    |   ├── data              # static needful data
    |   ├── pages             # needful page's
    |   |   └── Charts        # chart page's
    |   ├── styles            # base styling
    |   ├── App.js            # router for navigate inside app
    |   └── index.js          # client - app running start point
    ├── .gitignore            # git ignore files + folders name
    ├── craco.config.js       # easy way to override react-app config without mastering Webpack
    ├── package.json          # it holds metadata relevant to the project
    ├── README.md             # info about this project 
    ├── tailwind.config.js    # tailwindCss basic styling properties
    └── yarn.lock             # main source of info about the current versions of dependencies
    


## Learning context by developing this application:
|No| Context learn by building this project...          | 
|--|----------------------------------------------------|
| 1| Project Structure                                  | 
| 2| SideBar toggling base on true/false                | 
| 3| Dynamically Tailwind class add base on true/false  | 
| 4| Using of Syncfusion components base on demanded UI |
| 5| Syncfusion SparkLine, Pai, Line, Bar, Charts using |
| 6| Theme Settings by Context API globally data passing|


[link]: https://admin-dashboard-demo.netlify.app