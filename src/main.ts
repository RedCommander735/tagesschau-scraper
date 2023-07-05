import './style.css'
import { parser } from './scraper/scraper';

let path: string;
let app: HTMLElement



function init() {
    path = location.pathname
    app = document.querySelector('#app')!

    router(path)
}

function router(path: string) {
    let match = path.match(/^(\/[^/]+)(?:\/([^/]+))?$/)!
    if (match) {
        switch (match[1]) {
            case '/ausland':
                let params = new URLSearchParams(location.search)
                if (params.size > 0) {
                    let date = params.get('date')
                    if (date != null) {
                        parser(date)
                    }
                }
        }
    }
}




document.addEventListener('DOMContentLoaded', init);