import { useTranslation } from "next-i18next";
import NextJSLink from 'next/link'

export function Link(href, label) {
    const { i18n: { language } } = useTranslation()

    return <NextJSLink href={href} locale={language}>
        <a>{label}</a>
    </NextJSLink>
}