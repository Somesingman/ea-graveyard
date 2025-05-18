import { Status } from "../types/Studio"

interface BadgeProps {
  status: string,
}

const ColorClassMap: { [key in Status]?: string} = {
  [Status.CLOSED]: "bg-red-100 text-red-600 dark:bg-gray-700 dark:text-red-400 border border-red-400",
  [Status.REVIVED]: "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400 border border-blue-400",
  [Status.DECLINING]: "bg-yellow-100 text-yellow-600 dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400"
}

const DotClassMap: { [key in Status]?: string} = {
  [Status.CLOSED]: "bg-red-500",
  [Status.REVIVED]: "bg-blue-500",
  [Status.DECLINING]: "bg-yellow-500"
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
    <span className={"rounded-md px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 dark:text-gray-300 ring-2 ring-gray-500 ring-inset"}>
      Acquired by {company} in {acquiredDate.getFullYear()}
    </span>
  )
}
