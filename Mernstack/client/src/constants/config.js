
export const API_NOTIFICATION_MESSAGES ={
  loading :{

    title : 'Loading... ',
    message :'Data is being loaded , Please wait'
  },
  success :{
      title : 'Success ',
      message :'Data succesfully loaded'
  },

  responseFailure :{
    title :'Error',
    message :' an error ocuured while fetching response from the server . Please try again'
  },
  requestFailure :{
    title: 'Error',
    message :'An error occured while parsing request data '
  },
  networkError :{
    title :'Error ',
    message :'Unable to connetc with the server . Please check internet connectivity'
  }
}

export const Service_Urls ={
    userSignup : { url :'/signup',method :'POST'}
}