import React from 'react'
import Image from 'next/image';

const Img = (images) => {
    return (
        <>
            <Image src={images?.images[0]} alt={'Product Image'} width={500} height={600} />
        </>
    )
}

export default Img
