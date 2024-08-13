export const routeTo = {
    'home':home,
    'viewRecord':viewRecord,
    'editRecord':editRecord

}


function home() {
    return `/`
}

function viewRecord(recordId: string | number) {
    return `/record/${recordId.toString()}`
}

function editRecord(recordId: string | number) {
    return `/record/${recordId.toString()}/edit`
}