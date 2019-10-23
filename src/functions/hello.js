exports.handler = async (event, context) => {
    
    const data = {
        name: 'aditya',
        twitter: 'AdityaPratap'
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  };