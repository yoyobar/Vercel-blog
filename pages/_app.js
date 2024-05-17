// pages/_app.js
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import Giscus from '@giscus/react';

function MyApp({ Component, pageProps }) {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    const url = 'https://wiki-drab-sigma.vercel.app' + asPath;

    return (
        <>
            <Component {...pageProps} />
            <Giscus
                id='comments'
                repo='yoyobar/vercelblog'
                repoId='R_kgDOL8uRmA'
                category='General'
                categoryId='DIC_kwDOL8uRmM4Cfa6n'
                mapping='pathname'
                term={asPath}
                reactionsEnabled='1'
                emitMetadata='0'
                inputPosition='top'
                theme='light'
                lang='en'
            />
        </>
    );
}

export default MyApp;
