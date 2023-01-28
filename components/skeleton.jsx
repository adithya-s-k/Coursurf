import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import skeleton from '../styles/skeleton.module.css'

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
                </div>
                <div className={skeleton.btns}>
                    <Skeleton className={skeleton.btn} />
                    <Skeleton className={skeleton.btn} />
                </div>
            </SkeletonTheme>
        </div>
    )
}