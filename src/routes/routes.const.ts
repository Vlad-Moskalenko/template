interface Routes {
  [key: string]: string;
}

export const ROUTES: Routes = {
  HOME: '/',
  DETAILS: '/details/:id',
  LOGIN: '/login',
  REGISTER: '/register',
  FAVORITES: '/favorites',
}