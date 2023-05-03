Feature: Add a meeting to our calendar

  Scenario: User wants to add new clients
    Given the user is logged into the site and on the Clients manager component
    When data is filled in for a new Client, including <Name> <Project> <Phone> <Email>
    And ADD CLIENT button is clicked
    Then Nothing should happen because we dont know how to do any backend stuff with the data.
    And The form data field should dynamically update showing the form is being filled and reading
