import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link'

export default function Home(props) {
  const { t, i18n } = useTranslation('common')

  const locales = ['lv', 'en', 'ru']

  return (
    <div>
      {locales.map(locale => {
        return ( <div>
          <Link href="/" locale={locale}>
              <a>{locale}</a>
          </Link>
        </div>)

      })}
      {t('test')}
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}