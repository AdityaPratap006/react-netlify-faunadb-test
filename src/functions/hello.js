exports.handler = async (event, context) => {
    // "event" has informatiom about the path, body, headers etc of the request
    console.log('event', event)
    // "context" has information about the lambda environment and user details
    console.log('context', context)
    // Returns a response back to the caller
    return {
      statusCode: 200,
      body: 'Hello World'
    };
  };