// custom history object to allow navigation outside react components
export const history = {
    navigate: null,
    location: null
};

export const getGreetingsMessage = () => {
    const date = new Date();
    const hours = date.getHours();
    let message = '';
    if (hours < 12) {
        message = 'Bom dia, ';
    } else if (hours < 18) {
        message = 'Boa Tarde, ';
    } else {
        message = 'Boa Noite, ';
    }

    return message;
}