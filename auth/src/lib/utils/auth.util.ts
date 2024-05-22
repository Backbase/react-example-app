/* This file contains utility functions for authentication  */

import { User, UserManager } from 'oidc-client-ts';
import { oidcConfig } from '../config';

/**
 * Provides a higher level API for signing a user in, signing out, managing the user's claims returned from the OIDC provider,
 * and managing an access token returned from the OIDC/OAuth2 provider.
 */
export const userManager = new UserManager(oidcConfig);

/**
 * Returns promise to load the `User` object for the currently authenticated user.
 */
async function getUser() {
  const user = await userManager.getUser();
  if (!user) {
    return null;
  }
  return user;
}

/**
 * Returns promise to load the access token for the currently authenticated user.
 */
export async function getAccessToken() {
  const user = await getUser();
  if (!user) {
    return null;
  }
  return user.access_token;
}

/**
 * Returns promise to load the customer id for the currently authenticated user.
 */
export async function getUserId() {
  const user = await getUser();
  if (!user) {
    return null;
  }
  return user.profile?.user_name;
}

/**
 * Returns access token from local storage
 * Used at places where async function can't be used
 */
export function getAccessTokenFromStorage() {
  const oidcStorage = localStorage.getItem(`oidc.user:${oidcConfig.authority}:${oidcConfig.client_id}`)
  if (!oidcStorage) {
      return null;
  }
  return User.fromStorageString(oidcStorage)?.access_token;
}