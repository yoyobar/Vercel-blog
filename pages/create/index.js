'use client';

import { Cards, Card } from 'nextra/components';
import { Icon } from '/utils/Module.jsx';

const Create = () => {
    return (
        <div className='select-none'>
            <div className='w-full h-full m-auto font-bold bg-black p-2 text-white '>Create 페이지 입니다.</div>
            <div className='w-full h-full m-auto bg-black p-2 text-white'>
                상단 페이지 <span className='text-red-600 font-bold'>주소창</span>의 경로를 확인 해보세요.
            </div>
            <div className='ml-8'>
                <Cards>
                    <Card icon={<Icon.arrow_left />} title='위키로 돌아가기' href='/blog/NextJS/02_next' />
                </Cards>
            </div>
            ;
        </div>
    );
};

export default Create;
