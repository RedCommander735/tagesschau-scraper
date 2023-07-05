export async function parser(date: string) {
    let buffer = await fetch('https://www.tagesschau.de/ausland')
    .then((response) => response.text())

    let domparser: DOMParser = new DOMParser();

    let doc = domparser.parseFromString(buffer, 'text/html')

    let newselements = doc.querySelectorAll('.teaser')

    newselements.forEach(element => {
        let link = 'https://www.tagesschau.de' + (element.querySelector('.teaser__link') as HTMLAnchorElement)?.href
        let title = element.querySelector('.teaser__headline')?.innerHTML
        let topline = element.querySelector('.teaser__topline')?.innerHTML
        console.log(`Topline: ${topline}, Title: ${title}, Link: ${link}`)
    });
    console.log(newselements)
}