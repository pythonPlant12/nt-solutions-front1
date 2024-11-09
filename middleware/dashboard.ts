import { decodeJwt } from 'jose';

export default defineNuxtRouteMiddleware(() => {
  const accessTokenCookie = useCookie('access_token');
  const accessToken = accessTokenCookie.value;

  if (!accessToken) {
    return navigateTo('/log-in');
  }

  try {
    const decodedToken = decodeJwt(accessToken);
    const currentTime = Math.floor(Date.now() / 1000);
    // TODO: Check if the token is coming from the correct source
    if (decodedToken.exp < currentTime) {
      return navigateTo('/log-in');
    }
  } catch {
    return navigateTo('/log-in');
  }
});