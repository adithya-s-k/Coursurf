export const SplideProps = {
    // perMove: 1,
    // drag: 'free',
    // focus: 'center',
    rewind: true,
    autoplay: true,
    type: 'loop',
    perPage: 2.5,
    arrows: false,
    pagination: false,
    omitEnd: true,
    snap: true,
}


export const h1Variants = {
    hidden: {
        opacity: 0,
        // scale: 0.5,
        x: 20,
        transition: {
            duration: 1
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 1,
            type: 'spring',
            stiffness: 500
        }
    },
}

export const linkVariants = {
    hidden: {
        y: 10
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    hover: {
        scale: 1.2,
        color: '#FD8A45'
    }
}


export const mobileVariants = {
    hidden: {
        opacity: 0,
        y: '-5rem',
        transition: {
            duration: 0.5,
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: 'spring'
        }
    }, 
    hover:{
        scale: 1.1
    }
}
export const cardVariants = {
    hidden: {
        opacity: 0,
        y: '-5rem',
        transition: {
            duration: 1
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}