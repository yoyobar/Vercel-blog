import Link from 'next/link';

export default function About() {
    return (
        <div className='h-screen bg-slate-800 flex flex-col justify-center items-center'>
            <div className='bg-slate-100 animate-pulse w-[50%] h-[50%] rounded-md flex flex-col justify-evenly items-center'>
                <div className='font-mono text-3xl'>현재 개발중인 페이지 입니다</div>
                <div>
                    <div className='animate-spin w-[30px] h-[30px] border-2 border-b-slate-100 border-t-slate-100 border-indigo-500 rounded-full'></div>
                </div>
                <Link className='bg-indigo-400 text-2xl transition hover:bg-purple-600 rounded-md p-2 text-white' href='/'>
                    HOME
                </Link>
            </div>
        </div>
    );
}
