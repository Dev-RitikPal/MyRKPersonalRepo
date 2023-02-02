import React from "react"

export interface IChecklist {
    id?: number | null
    title?: string,
    checklist?: number,
    user?: string,
    group?: string,
    owner?: string,
    isDone?: boolean | null,
    created_at?: string,
    updated_at?: string
}
