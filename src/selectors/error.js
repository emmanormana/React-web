export const getErrorMessage = (error) => {
  console.log(error.status)
  // Would recommend considering internationalisation even before this point so as to not hard code text into javascript
  switch (error.status) {
    case 500: return 'Error 500'
    case 501: return 'Sorry, this event type does not exist.'
    // Define more errors here
    default: return 'Sorry, an unknown error occcured'
  }
}
