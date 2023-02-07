import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import skeleton from '../styles/skeleton.module.css'
import skeletonCD from '../styles/skeletoncarddetail.module.css'

export const CardSkeleton = () => {
    return (
        <div className={skeleton.card}>
            <SkeletonTheme baseColor="#D3D3D3" highlightColor="#eee">
                <Skeleton className={skeleton.top} />
                <Skeleton className={skeleton.logo} />
                <div className={skeleton.bottom}>
                    <Skeleton className={skeleton.platform} />
                    <Skeleton className={skeleton.title} />
                    <div className={skeleton.courseBadges}>
                        <Skeleton className={skeleton.tag} />
                        <Skeleton className={skeleton.tag} />
                        <Skeleton className={skeleton.tag} />
                    </div>
                    <Skeleton className={skeleton.titleName} />
                    <Skeleton className={skeleton.desc} count={4} />
                    {/* <Skeleton className={skeleton.readmore}/> */}
                </div>
                <div className={skeleton.btns}>
                    <Skeleton className={skeleton.btn} />
                    <Skeleton className={skeleton.btn} />
                </div>
            </SkeletonTheme>
        </div>
    )
}

export const CardDetailSkeleton = () => {
    return (

        <div className={skeletonCD.container}>
            <div className={skeletonCD.one}>
                <div className={skeletonCD.top}>
                    <div className={skeletonCD.topLeft}>
                        <Skeleton className={skeletonCD.img} />
                    </div>
                    <div className={skeletonCD.topRight}>
                        <Skeleton className={skeletonCD.provider} />
                        {/* <h2 className={skeletonCD.heading}> */}
                            <Skeleton className={skeletonCD.heading}/>
                        {/* </h2> */}
                        <div className={skeletonCD.review}>
                            <Skeleton className={skeletonCD.reviewchild}/>
                            <Skeleton className={skeletonCD.reviewchild}/>
                        </div>
                    </div>
                </div>
                <div className={skeletonCD.bottom}>
                    <Skeleton className={skeletonCD.desc} count={3}/>
                    <div className={skeletonCD.btns}>
                        <Skeleton className={skeletonCD.btn}/>
                        <Skeleton className={skeletonCD.btn}/>
                    </div>
                </div>
            </div>
            <div className={skeletonCD.two}>
                <div className={skeletonCD.featureUl}>
                    <Skeleton count={4}/>
                </div>
            </div>
        </div>
    )
}