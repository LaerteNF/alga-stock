import { TableHeader } from "../shared/Table"

type IndexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any
}

export default function organizeData (data: any[], headers: TableHeader[]): [OrganizedItem[], IndexedHeaders]{
    const indexedHeaders:IndexedHeaders = {}

    headers.forEach(header => {
        indexedHeaders[header.key] = {
            ...header
        }
    })

    const headerKeysInOrder = Object.keys(indexedHeaders)

    const organizedData: OrganizedItem[] = data.map(item => {
        const organizedItem: OrganizedItem = {}

        headerKeysInOrder.forEach(key => {
            organizedItem[key] = item[key]
        })

        // crio no objeto uma propriedade original com o valor do item original 
        organizedItem.$original = item

        return organizedItem
    })

    return [organizedData, indexedHeaders]
}