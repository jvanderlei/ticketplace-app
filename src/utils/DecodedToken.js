import jwtDecode from 'jwt-decode';

export const getUserIdByToken = async (token) => {
  const decoded = await jwtDecode(token);
  return decoded.id;
}