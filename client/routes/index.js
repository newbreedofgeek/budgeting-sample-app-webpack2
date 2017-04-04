import App from 'containers/App';
import HomeRoute from './home';
import ProfileRoute from './profile';

const Routes = [
  {
    path: '/',
    component: App,
    indexRoute: HomeRoute,
    childRoutes: [
      ProfileRoute
    ]
  }
];

export default Routes;
