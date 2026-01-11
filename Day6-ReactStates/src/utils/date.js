//function to convert 2025-01-12 to January 12, 2025

function convertDate(date) {
    let newDate = new Date(date);
    const month = newDate.toLocaleString("default", { month: "long" })
    const day = newDate.getDate()
    const year = newDate.getFullYear()
    return `${month} ${day} ${year}`
}

export { convertDate }
