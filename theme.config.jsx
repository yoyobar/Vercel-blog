import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default {
    logo: (
        <>
            <span
                style={{
                    width: '32px',
                }}
            >
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 54 33'>
                    <g clip-path='url(#prefix__clip0)'>
                        <path
                            fill='#38bdf8'
                            fill-rule='evenodd'
                            d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z'
                            clip-rule='evenodd'
                        />
                    </g>
                    <defs>
                        <clipPath id='prefix__clip0'>
                            <path fill='#fff' d='M0 0h54v32.4H0z' />
                        </clipPath>
                    </defs>
                </svg>
            </span>
            <span
                style={{
                    marginLeft: '.4em',
                    width: '200px',
                }}
            >
                Trouble Wiki
            </span>
        </>
    ),
    project: {
        link: 'https://github.com/yoyobar',
    },
    primaryHue: {
        dark: 190,
        light: 214,
    },
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter();
        const { frontMatter } = useConfig();
        const url = 'https://my-app.com' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
        return (
            <>
                <meta property='og:url' content={url} />
                <meta property='og:title' content={frontMatter.title || 'Wiki'} />
                <meta property='og:description' content={frontMatter.description || 'Wiki기반 개인 블로그 입니다.'} />
            </>
        );
    },

    search: {
        placeholder: '찾는 내용을 검색..',
    },
    sidebar: {
        defaultMenuCollapseLevel: 0,
    },

    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{' '}
                <a href='https://github.com/yoyobar' target='_blank'>
                    Yoyobar, Themed By Nextra.
                </a>
            </span>
        ),
    },
};
