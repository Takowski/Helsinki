```mermaid
sequenceDiagram
autonumber
    participant browser
    participant server

    Note over browser: User fills the form and submits
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note over server: Server processes request
    server-->>browser: HTTP status code 201, JSON data (new note)
    deactivate server

    Note over browser: Browser receives new note data
    Note over browser: Browser generates HTML for new note using DOM-API