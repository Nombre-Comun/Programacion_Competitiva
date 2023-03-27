import { UserManager } from 'oidc-client';

const config = {
  authority: 'https://localhost:7003',
  client_id: 'interactive',
  redirect_uri: 'https://localhost:3000/callback',
  client_secret: 'secret',
  response_type: 'code',
  scope: 'weather.read openid profile email',
  post_logout_redirect_uri: 'https://localhost:3000/Home',
  end_session_endpoint: 'https://localhost:7003/connect/endsession'
};

const userManager = new UserManager(config);

export default userManager;
