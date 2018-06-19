export const getUrl = (historyType: string, path: string) => {
    let p = path

    switch (historyType) {
        case 'history':
            p = path
            break
        case 'hash':
            const href = window.location.href
            const i = href.indexOf('#')
            const base = i >= 0 ? href.slice(0, i) : href
            p = `${base}#${path}`
            break
    }

    return p
}