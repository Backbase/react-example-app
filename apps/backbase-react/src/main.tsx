import * as ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './app/app';
import { AuthProvider } from 'react-oidc-context';
import { BrowserRouter } from 'react-router-dom';
import { oidcConfig } from '@backbase-react/auth';
import { environment } from './environments/environment';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function RenderAppView(props: any) {
  if (environment.skipLogin) {
    return <>{props.children}</>;
  }
  return <AuthProvider {...oidcConfig}>{props.children}</AuthProvider>;
}
root.render(
  <RenderAppView>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </RenderAppView>
);
