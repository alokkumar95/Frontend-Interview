

document.body.onload = addElement;

function addElement(){
    const newDiv = document.createElement('div');

    const newContent = document.createTextNode('I will be inserted before - ****');

    newDiv.appendChild(newContent);

    const target = document.querySelector('.target');

    const main = document.querySelector('main')

target?.parentNode?.insertBefore(newContent,target);
}