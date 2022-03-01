import './skeleton_style.scss';
const Skeleton = ({type}) => {
    const theme_element = `skeleton ${type}`;
        return (
            <div className={theme_element}></div>
        );
    }
const ShineAnimation = () => {
    return (
        <div className="shimmer-wrapper">
            <div className="shimmer">
            </div>
        </div>
    );
}
const SkeletonAnimation = ({typeMain}) => {
    if(typeMain === "article"){
        return (
            <div className={`skeleton-wrapper ${typeMain}`}>
                <div className="skeleton-article">
                    <Skeleton type="heading" />
                    <Skeleton type="para" />
                    <Skeleton type="para" />
                    <Skeleton type="para" />
                </div>
                <ShineAnimation/>
            </div>
        );
    }
    else if (typeMain === "card" || typeMain === "profile"){
        return (
            <div className={`skeleton-wrapper ${typeMain}`}>
                <div className="skeleton-profile ">
                    <div><Skeleton type="avatar" /></div>
                    <div>
                        <Skeleton type="heading" />
                        <Skeleton type="para"/>
                        <Skeleton type="para" />
                        <Skeleton type="para" />
                    </div>
                    <ShineAnimation/>
                </div>
            </div>
        );
    }
    else if (typeMain === 'imageSection'){
        return (
            <div className={`skeleton-wrapper ${typeMain}`}>
                <Skeleton type="imageCard"/>
                <ShineAnimation/>
            </div>
        )
    }
    else if (typeMain === 'paraSection'){
        return (
            <div className={`skeleton-wrapper ${typeMain}`}>
                <div className="skeleton-para">
                        <Skeleton type="para"/>
                        <Skeleton type="para" />
                        <Skeleton type="para" />
                </div>
                <ShineAnimation/>
            </div>
        )
    }
}
export default SkeletonAnimation;