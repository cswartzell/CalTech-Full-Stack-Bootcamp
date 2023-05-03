Feature: Add a meeting to our calendar

  Scenario: User wants to schedule a new meeting into their calendar
    Given the user is logged into the site and on the meeting manager component
    When data is filled in for a new meeting, including <Date> <Time> <Attending> <Meeting Type>
    And ADD MEETING button is clicked
    Then Nothing should happen because we dont know how to do any backend stuff with the data.
    And The form data field should dynamically update showing the form is being filled and reading
