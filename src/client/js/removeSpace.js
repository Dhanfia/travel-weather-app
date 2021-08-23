const removeSpace = (string) => {
    let regExp = new RegExp(' ', 'g')
    let formattedString = string.replace(regExp, '+');
    return formattedString;
}

export { removeSpace }