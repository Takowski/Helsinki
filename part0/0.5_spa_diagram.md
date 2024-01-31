```mermaid
sequenceDiagram
autonumber
    participant browser
    participant server

    Note over browser: User opens the home page
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/
    activate server
    server-->>browser: HTML document
    deactivate server

    Note over browser: Browser requests CSS
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS document
    deactivate server

    Note over browser: User navigates to Notes page
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript code
    deactivate server

    Note over browser: Browser executes JavaScript code
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON data (notes)
    deactivate server

    Note over browser: Browser generates HTML for notes using DOM-API