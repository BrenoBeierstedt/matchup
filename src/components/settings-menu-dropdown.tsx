import { Languages, Settings2 } from "lucide-react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from 'react-i18next'
import { ModeToggle } from "./mode-toggle"

const DropdownSettings = ({ }) => {
    const { setTheme, theme } = useTheme()
    const { t, i18n: { language, changeLanguage } } = useTranslation('settingsMenuDrawer');

    const handleChangeLanguage = (locale: string) => {
        changeLanguage(locale);
    }

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <Settings2 />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel
                    >{t('settings-dropdown-title')}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                {theme === 'light' ?
                                    <Sun className="mr-2 h-4 w-4" />
                                    :
                                    <Moon className="mr-2 h-4 w-4" />

                                }
                                <span>{t('settings-theme-title')}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                                        <span>{t('settings-theme-dark')}</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme('light')}>
                                        <span>{t('settings-theme-light')}</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme('system')}>
                                        <span>{t('settings-theme-system')}</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Languages className="mr-2 h-4 w-4" />
                                <span>{language}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem onClick={() => handleChangeLanguage('pt-BR')}>
                                        <span>pt-BR</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleChangeLanguage('en-US')}>
                                        <span>en-US</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default DropdownSettings