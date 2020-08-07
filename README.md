# Boredom Breakers

Boredom Breakers is an EventBrite clone that allows users to create events of all sizes and types.  Users can browse events and register for the ones that interest them.  The site was built with Ruby on Rails backend, PostgreSQL Database, and React/Redux front end.

<img src="https://boredom-breakers-seed.s3.amazonaws.com/home-page-shot.png">

## Technologies Used
- Front End
    - React
    - Redux
- Backend
    - Ruby on Rails
    - PostgreSQL
- Cloud
    - AWS S3
    - Heroku

## Features
- Secure User Authentication
- Create Read Update and Destroy Events
- Upload images via Amazon S3
- [In Progress] Register for events
- [In Progress] Manage Tickets
- [In Progress] Manage list of attending users

## Brief site walkthrough

<img src="https://boredom-breakers-seed.s3.amazonaws.com/home-page-animated.gif">

## Custom Simple Scripts

- Email Validation
```javascript
export const validateEmail = (email) => {
    const atCheck = email.split("@");
    if (atCheck.length !== 2) {
        return false;
    } else {
        const periodCheck = atCheck[1].split(".");
        if (periodCheck.length !== 2) {
            return false;
        }
    }
    return true;
};
```

- Time Conversion

```javascript
  toSTime(time) {
    const timeArray = time.split(":");
    const hour = timeArray[0];
    const min = timeArray[1];
    let standardHour = null;
    let meridian = null;
    if (parseInt(hour) > 12) {
      standardHour = parseInt(hour) - 12;
      meridian = "PM";
    } else {
      standardHour = parseInt(hour);
      meridian = "AM";
    }
    return `${standardHour}:${min} ${meridian} EDT`;
  }
```

## Simple Event Creation / AWS Image Upload

<img src="https://boredom-breakers-seed.s3.amazonaws.com/form-gif.gif">

## Future Features

- Google Maps API 
- Event Ticket Barcode Generation
- Manage Events Hosted in Profile
- Manage Tickets Purchased in Profile
