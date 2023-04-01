imgtobase64('./InterviewMe.png')
  .then(base64Image => {
    data[0].coverImage = base64Image;
    console.log(data[0].coverImage);
  })
  .catch(error => {
    console.error(error);
  });
