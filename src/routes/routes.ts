import { JSX, lazy } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import { NoLazy } from '../01-lazyload/pages/NoLazy'

interface IRoute {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element> | React.ComponentType;
  name: string;
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes: IRoute[] = [
  {
    to: '/lazyload',
    path: 'lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Layout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  }
]
