// theme.config.js

import { useRouter } from 'next/router';
import { useConfig, useTheme } from 'nextra-theme-docs';
import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';

const Comments = ({ term }) => {
    const { systemTheme, theme } = useTheme();
    const { asPath } = useRouter();
    const [mode, setMode] = useState(theme);
    const [showComment, setShowComment] = useState(false);

    useEffect(() => {
        switch (theme) {
            case 'light':
                setMode('light_high_contrast');
                break;
            case 'dark':
                setMode('dark_high_contrast');
                break;
            case 'system':
                if (systemTheme === 'light') setMode('light_high_contrast');
                if (systemTheme === 'dark') setMode('dark_high_contrast');
                break;
        }
    }, [theme]);

    useEffect(() => {
        setShowComment(false);
    }, [asPath]);

    const buttonHandler = () => {
        setShowComment(!showComment);
    };

    return (
        <>
            <button onClick={buttonHandler} className='bg-slate-400 w-full hover:bg-slate-500 transition text-white p-1 rounded-md'>
                {showComment ? 'Close Comments' : 'Open Comments'}
            </button>
            {showComment && (
                <div className='mt-4'>
                    <Giscus
                        id='comments'
                        repo='yoyobar/vercelblog'
                        repoId='R_kgDOL8uRmA'
                        category='General'
                        categoryId='DIC_kwDOL8uRmM4Cfa6n'
                        mapping='pathname'
                        term={term}
                        reactionsEnabled='1'
                        emitMetadata='0'
                        inputPosition='top'
                        theme={mode}
                        lang='ko'
                    />
                </div>
            )}
        </>
    );
};

export default {
    toc: {
        title: <div className='font-mono'>TABLE OF CONTENT</div>,
    },
    editLink: {
        component: null,
    },
    feedback: {
        content: null,
    },

    themeSwitch: {
        useOptions() {
            return {
                light: '라이트 테마',
                dark: '다크 테마',
                system: '시스템 테마',
            };
        },
    },

    logo: (
        <>
            <span
                style={{
                    width: '32px',
                }}
            >
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 54 33'>
                    <g clipPath='url(#prefix__clip0)'>
                        <path
                            fill='#38bdf8'
                            fillRule='evenodd'
                            d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z'
                            clipRule='evenodd'
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
        const url = 'https://wiki-drab-sigma.vercel.app' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
        const title = asPath.split('/');

        return (
            <>
                <title>{`Trouble Wiki ${title && '| ' + title[1]}`}</title>
                <meta property='og:url' content={url} />
                <meta property='og:title' content={frontMatter.title === undefined ? 'Wiki' : frontMatter.title} />
                <meta
                    property='og:description'
                    content={frontMatter.description === undefined ? 'Wiki기반 개인 블로그 입니다.' : frontMatter.description}
                />
            </>
        );
    },
    search: {
        placeholder: '찾는 내용을 검색..',
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
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
    main: ({ children }) => {
        const { frontMatter } = useConfig();
        const { asPath } = useRouter();
        const isComment = frontMatter?.comments === false ? false : true;

        return (
            <div style={{ fontFamily: "'Noto Sans KR'" }}>
                {children}
                {isComment && <Comments term={asPath} />}
            </div>
        );
    },
};
