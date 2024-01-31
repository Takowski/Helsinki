```mermaid
sequenceDiagram
autonumber
    participant browser
    participant server

    Note over browser: User fills the form
    Note over browser: User submits the form

    browser->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note
    Note over server: Server receives request
    activate server
    Note over server: Server processes request
    server-->>browser: HTTP status code 302
    Note over browser: Browser receives redirect response
    deactivate server

    browser->>server: POST https://fullstack-exampleapp.herokuapp.com/notes
    Note over server: Server receives redirect request
    activate server
    Note over server: Server fetches updated notes
    server-->>browser: HTTP status code 200, updated notes
    Note over browser: Browser displays updated notes
    deactivate server