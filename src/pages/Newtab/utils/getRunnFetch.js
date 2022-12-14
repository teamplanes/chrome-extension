export const getRunnFetch = async (item, params) => {
  try {
    const result = await fetch(`https://app.runn.io/api/v0/${item}`, {
      headers: {
        Authorization: `Bearer ${process.env.RUNN_API_KEY}`,
      },
      params,
    });
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
