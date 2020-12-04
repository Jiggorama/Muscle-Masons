# Muscle-Masons

-----future link ----

## Project Description

Muscle-Masons is an interactive fitness app built in React with an Airtable database.  The app allows users to view and update a collection of excersizes which can be sorted by the main muscles worked by the excersize. The user also has the ability to create a workout routine.

## Wireframes

The wireframes below depict the homepage Muscle-Masons in web and phone format. The homepage contains a header with a Nav Bar. The Nav Bar contains links to the Home Page, the add a workout page, and the users workout routine page.  RUThe main section has clickable excersize previews that can be added to the users routine or detleted. When Clicked the Excersizes will route the user to a page of more information on that specific excersize. The screens will center as screen size decreases.

![imageAlt](https://i.imgur.com/QOv7fU7.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/eo07ZVV.png)

## API and Data Sample

https://api.airtable.com/v0/appaz3L4HYo4zJ3e3

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recrf2aXw7RHXaRcV",
            "fields": {
                "name": "Push-Up",
                "target": "Chest/Shoulders",
                "directions": "Start in a  plank position with your arms straight. Your shoulders should be over your wrists and your body should form a straight line. Keep your cor...",
                "reps": 20,
                "Equipment": "Bodyweight",
                "intensity": 3
            },
            "createdTime": "2020-12-04T04:28:29.000Z"
        },
        {
            "id": "recTRdwALxYo82BDa",
            "fields": {
                "name": "Sit-Up",
                "target": "Core",
                "intensity": 2,
                "directions": "Lie down on your back, bend your legs and place feet firmly on the ground with your hands to opposite shoulders or behind your head. Curl your upper b...",
                "reps": 25,
                "Equipment": "bodyweight"
            },
            "createdTime": "2020-12-04T04:28:29.000Z"
        },
        {
            "id": "rec23kLz1eE8a0k8Z",
            "fields": {
                "name": "Arnold-Press",
                "target": "Shoulders",
                "directions": "Start seated with a flat back or standing and core engaged. Hold a pair of dumbbells at the shoulders palms facing in elbows tight to body. Press up r...",
                "reps": 8,
                "Equipment": "Dumbbells",
                "intensity": 4
            },
            "createdTime": "2020-12-04T04:28:29.000Z"
        }
    ],
    "offset": "rec23kLz1eE8a0k8Z"
}

```

### MVP/PostMVP

#### MVP

- Home page with clickable links and excersizes.
- Form page to add excersizes to the Airtable data set which show on Home Page.
- Button to Delete Excersizes.
- Button to add excersizes to a page that displays added excersizes as a routine.

#### PostMVP

- Collaborate with a UX student to make the UI more attractive/user-friendly.
- Allow users to filter excersizes through a dropdown menu

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Dec 04 | Proposal Approval / Airtable Setup         | Incomplete |
| Dec 04   | Component Creation                     | Incomplete |
| Oct 13   | Get, Set, Delete Data               | Incomplete |
| Dec 07   | CSS Components                           | Incomplete |
| Dec 10   | MVP                                        | Incomplete |
| Dec 11   | Advanced CSS                               | Incomplete |
| Dec 12   | Presentations                              | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     --    |   --   |
| Airtable setup            |    H     |     1hrs       |     --    |   --   |
| Nav Bar/Header            |    H     |      3hrs      |     --    |   --   |
| Main Page                 |    H     |      3hrs      |     --    |   --   |
| Create Page               |    H     |      3hrs      |     --    |   --   |
| Routine Page              |    H     |      3hrs      |     --    |   --   |
| Form creation             |    H     |      3hrs      |     --    |   --   |
| Link form to Airtable     |    H     |      3hrs      |     --    |   --   |
| Link routine to Airtable  |    H     |      3hrs      |     --    |   --   |
| React mapping and logic   |    H     |      3hrs      |     --    |   --   |
| Linking and Routing       |    H     |      2hrs      |     --    |   --   |
| Data deletion             |    H     |      2hrs      |     --    |   --   |
| CSS Routine               |    H     |      3hrs      |     --    |   --   |
| CSS Homepage              |    H     |      3hrs      |     --    |   --   |
| CSS Showpage              |    H     |      3hrs      |     --    |   --   |
| CSS Form                  |    H     |      3hrs      |     --    |   --   |
| Total                     |    H     |      43hrs     |     --    |   --   |

## SWOT Analysis

### Strengths:

I have a good understanding of what i want my application to look like and what exactly I want it to do. As such, I can better plan for what needs to be done and how long it will take. 

### Weaknesses:

Taking the project and breaking down the task at hand into smaller parts.  I get stressed out thinnking about the whole task instead of trying to tackle it a little bit at a time.

### Opportunities:

To create a portfolio show piece that I am prod to show off. This app could be something useable and useful

### Threats:

Adding functionality to various components that I think is cool or I just learned about while I still don't have my mvp complete. 