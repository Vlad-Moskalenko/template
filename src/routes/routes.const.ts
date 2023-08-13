interface Routes {
  [key: string]: string;
}

export const ROUTES: Routes = {
  HOME: '/',
  HOME_TAG: '/:tag',
  DETAILS: '/details/:id',
  LOGIN: '/login',
  REGISTER: '/register',
  FAVORITES: '/favorites',
}