import { Status } from "../types/Studio"

interface BadgeProps {
    status: string,
}

let ColorClassMap: { [key in Status]?: string} = {
    [Status.CLOSED]: "bg-red-100 text-red-600",
    [Status.REVIVED]: "bg-blue-100 text-blue-600",
    [Status.REDUCED]: "bg-yellow-100 text-yellow-600"
}

let DotClassMap: { [key in Status]?: string} = {
    [Status.CLOSED]: "bg-red-500 dark:bg-red-500",
    [Status.REVIVED]: "bg-blue-500 dark:bg-blue-500",
    [Status.REDUCED]: "bg-yellow-500 dark:bg-yellow-500"
}

export function StatusBadge({status}: BadgeProps) {

    return (
        <span className={ColorClassMap[status as Status] + " capitalize inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-gray-500/10 ring-inset"}>
            <span className={DotClassMap[status as Status] + " size-1.5 inline-block rounded-full"}/>
            {status}
        </span>
    )
}

interface AcquiredBadgeProps {
    company: string,
    acquiredDate: Date,
}

export function AcquiredBadge({company, acquiredDate}: AcquiredBadgeProps) {

    return (
        <span className={"rounded-md px-2 py-1 text-xs font-medium bg-gray-200 ring-1 ring-gray-500/10 ring-inset my-1"}>
            Acquired by {company} in {acquiredDate.getFullYear()}
        </span>
    )
}
