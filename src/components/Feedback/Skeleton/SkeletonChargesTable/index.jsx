import { Skeleton } from "@mui/material";


export default function SkeletonChargesTable() {
    return (
        <>
            <div className="table-content table-content-skeleton">
                <span className="data-name"><Skeleton /></span>
                <span className="data-id"><Skeleton /></span>
                <span className="data-value"><Skeleton /></span>
            </div>
            <div className="table-content table-content-skeleton">
                <span className="data-name"><Skeleton /></span>
                <span className="data-id"><Skeleton /></span>
                <span className="data-value"><Skeleton /></span>
            </div>
            <div className="table-content table-content-skeleton">
                <span className="data-name"><Skeleton /></span>
                <span className="data-id"><Skeleton /></span>
                <span className="data-value"><Skeleton /></span>
            </div>
            <div className="table-content table-content-skeleton">
                <span className="data-name"><Skeleton /></span>
                <span className="data-id"><Skeleton /></span>
                <span className="data-value"><Skeleton /></span>
            </div>
            <div className="table-content table-content-skeleton">
                <span className="data-name"><Skeleton /></span>
                <span className="data-id"><Skeleton /></span>
                <span className="data-value"><Skeleton /></span>
            </div>
        </>
    )
}