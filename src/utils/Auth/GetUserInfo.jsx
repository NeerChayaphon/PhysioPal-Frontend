const GetUserInfo = async (token) => {
  try {
    const response = await fetch(
      'https://physiopal-api-deploy-production.up.railway.app/user/GetUserByJWT',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default GetUserInfo;
