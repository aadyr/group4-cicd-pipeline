module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Your function executed successfully!",
	   access_key: process.env.ACCESS_KEY
        },
        null,
        2
      ),
    };
  };
