import lazyThemeChanger from 'lazy-theme-changer';

const themes = {
    dark: () => import(
        /* webpackChunkName: "theme-dark" */
        /* webpackMode: "lazy" */
        // @ts-ignore
        'style-loader?{"injectType":"styleTag","attributes":{"data-theme":"theme-dark"}}!./bootstrap-theme-dark.scss'
        ),
    navy: () => import(
        /* webpackChunkName: "theme-navy" */
        /* webpackMode: "lazy" */
        // @ts-ignore
        'style-loader?{"injectType":"styleTag","attributes":{"data-theme":"theme-navy"}}!./bootstrap-theme-navy.scss'
        ),
    light: () => import(
        /* webpackChunkName: "theme-light" */
        /* webpackMode: "lazy" */
        // @ts-ignore
        'style-loader?{"injectType":"styleTag","attributes":{"data-theme":"theme-light"}}!./bootstrap-theme-light.scss'
        ),
};

export type Theme =  keyof typeof themes | string;

export function themeChanger() {
    return lazyThemeChanger(themes);
}
