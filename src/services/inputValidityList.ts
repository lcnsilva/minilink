const errorType: (keyof typeof errorMessages)[] = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
]

const errorMessages = {
    valueMissing: "O campo de URL não pode estar vazio.",
    typeMismatch: "Por favor, preencha uma URL válida.",
    patternMismatch: "A URL não está no formato correto.",
    tooShort: "A URL inserida é muito curta.",
}

const getCustomErrorMessage = ( event: HTMLInputElement) => {
    const { validity } = event
    event.setCustomValidity("");
    errorType.forEach((error) => {
        if(validity[error]){
            const message = errorMessages[error];
            event.setCustomValidity(message)
        }
    })
    return event.validationMessage;
}

export default getCustomErrorMessage;