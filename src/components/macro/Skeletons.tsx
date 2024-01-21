import { Skeleton } from "@/components/ui/skeleton"

export function ResourceSkeleton(){
     return (
        <div className="resources  flex self-start flex-col content-center">
        <div className="resource flex flex-col gap-12">
    
        <Skeleton className="h-4 w-[40vw] lg:w-[40vw] " />
        <Skeleton className="h-[30vh] w-[40vw] lg:w-[40vw]" />
        <Skeleton className="h-4 w-[40vw] lg:w-[40vw]" />
        <Skeleton className="h-4 w-[40vw] lg:w-[40vw]" />
    </div>
    </div>
     )
}