module.exports.handler = async (event) => {  // like in express we had body and headers in reponse object, we also have body & headers in event
    const response = {
      statusCode: 200,
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify({message:'Hello from Vinay!'}),
    };
    return response;
  };
  