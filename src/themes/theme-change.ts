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

export type Theme =  keyof typeof themes;

export function themeChanger() {


    const getStyle = (theme: Theme): HTMLStyleElement | null => {
        return document.querySelector<HTMLStyleElement>(`style[data-theme*=theme-${theme}],link[href*=theme-${theme}]:not([rel="prefetch"])`);
    };

    const toggleStyle = (style: HTMLStyleElement, state: boolean) => {
        if (state) {
            style.removeAttribute('media');
        } else {
            style.setAttribute('media', 'max-width: 1px');
        }
    };

    const disableOthersStyles = (theme: Theme) => {
        const styles = document.querySelectorAll<HTMLStyleElement>(`
            style[data-theme*=theme]:not([data-theme*=theme-${theme}]),
            link[href*=theme]:not([href*=theme-${theme}]):not([rel="prefetch"])
        `);
        styles.forEach(style => toggleStyle(style, false));
    };

    const fetch = async (theme: Theme) => {
        const styles = new Set(document.querySelectorAll('style:not([url~=""])'));
        await themes[theme]();
        let themeStyle = Array.from(document.querySelectorAll('style')).filter(s => !styles.has(s))
            .find(s => s.innerText.includes(`/**@theme:${theme}*/`))
        if (themeStyle) {
            themeStyle.dataset.theme = `theme-${theme}`;
        }
    }

    return async (theme: Theme) => {
        const themeStyle = getStyle(theme);
        if (themeStyle) {
            toggleStyle(themeStyle, true);
            disableOthersStyles(theme);
            return;
        }
        await fetch(theme);
        disableOthersStyles(theme);
    };
}
