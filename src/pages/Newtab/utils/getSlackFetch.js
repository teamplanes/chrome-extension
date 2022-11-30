export const getSlackFetch = async (url) => {
  const result = await fetch(`https://slack.com/api${url}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.SLACK_API_TOKEN}`,
    },
  });

  const executionResult = await result.json();

  return executionResult;
};
