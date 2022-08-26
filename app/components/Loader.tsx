import React, {FC} from 'react';

const Loader:FC = () => {
    return (
        <div className='py-[50vh]'>
            <div className='mx-auto border-2 rounded-full border-[#17DC95] outline-dashed animate-ping w-24 h-24'></div>
        </div>
    );
};

export default Loader;