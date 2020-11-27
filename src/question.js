export class Question{
    static create(question){
       return fetch('https://questions-ba075.firebaseio.com/question.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                question.id = response.name
                return question
            }).then(addToLocalStorage)
           .then(Question.renderList)
    }
    static renderList (){
        const questions = getQuestionsFromLocalStorage()

        const html = questions.length
        ? questions.map(toCard).join('')
            : `<div id="empty-field" class="mui--text-red-54 mui--text-body2">Uu-p-s!!! This field is empty</div>`

        const list = document.getElementById('list')
        list.innerHTML = html
    }
}

function addToLocalStorage (question){
    const all = getQuestionsFromLocalStorage()
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question) {
    return `            
            <div class="mui--text-black-54">
                ${new Date(question.date).toLocaleDateString()}
                ${new Date(question.date).toLocaleTimeString()}          
            </div>
            <div class="mui--text-headline" id="questions-fon-style">${question.text}</div>
              <br>`
}