import { useModal } from '../store';
import { useState, useEffect } from 'react';

export function Preview({ children }) {
    return (
        <>
            <div className='text-sky-700 text-bold'>Preview</div>
            <div className='p-2 w-full border rounded-md text-black'>{children}</div>
        </>
    );
}

export function Button({ text, onClick, type }) {
    let style = 'text-white bg-indigo-400 hover:bg-indigo-600 transition rounded-md p-2';
    switch (type) {
        case 'red':
            style = 'text-white bg-red-400 hover:bg-red-600 transition rounded-md p-2';
            break;
    }

    return (
        <>
            <button onClick={onClick} className={style}>
                {text}
            </button>
        </>
    );
}

let timer = null;
let timerInterval = null;
export function Modal() {
    const { visible, text, modalClose } = useModal();
    const [indicator, setIndicator] = useState(3000);

    useEffect(() => {
        if (visible) {
            timerInterval = setInterval(() => {
                setIndicator((prev) => prev - 10);
            }, 10);

            timer = setTimeout(() => {
                setIndicator(3000);
                modalClose();
            }, 3000);
        }
        return () => {
            clearInterval(timerInterval);
            clearTimeout(timer);
        };
    }, [visible, modalClose]);

    if (!visible) return;

    return (
        <>
            <div className='bg-sky-200 z-10 min-w-64 rounded-md font-semibold pt-1 fixed bottom-10 right-5'>
                <div className='p-2'>{text}</div>
                <div
                    className='ml-1 mr-1 mb-1 h-1 rounded-md bg-green-700 animate-pulse'
                    style={{ width: `${(indicator / 3000) * 100}%` }}
                ></div>
            </div>
        </>
    );
}

function importAll(r) {
    let icons = {};
    r.keys().forEach((item, index) => {
        const iconName = item
            .replace('./', '') // "./" 제거
            .replace('.svg', '') // ".svg" 제거
            .replace('-16', '') // "-16" 제거
            .replace('-12', '') // "-12" 제거
            .replace(/-/g, '_'); // "-"를 "_"로 변경
        icons[iconName] = r(item).default;
    });
    return icons;
}

const icons = importAll(require.context('../public/icon', false, /\.svg$/));

export const Icon = icons;

// "postbuild": "next-sitemap && rm -rf .next/cache",
