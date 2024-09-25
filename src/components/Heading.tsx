import React from 'react';
interface headingProp {
    title:string,
    subtitle:string
}
const Heading:React.FC<headingProp> = ({title,subtitle}) => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h1 className='font-[700] text-[64px] leading-[76.8px] text-black'>{title}</h1>
            <p className='font-[400] text-[20px] leading-[30px] text-black'>{subtitle}</p>
        </div>
    );
};

export default Heading;