import { h, ref, reactive } from 'vue'
import {Theme, themeChanger} from '@/themes/theme-change';

const change = themeChanger();
change('dark');
export const useThemeChange = () => {
    const current = ref<Theme>('dark')

    return {
        current,
        change: (theme: Theme) => {
            current.value = theme;
            return change(theme);
        }
    }

}
