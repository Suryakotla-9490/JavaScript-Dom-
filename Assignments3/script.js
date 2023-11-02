
    const para1=document.createElement('p')
    para1.style.color="blue"
    para1.innerHTML="Hey I am Blue"
    document.body.appendChild(para1)


    const header1=document.createElement('h1')
    header1.style.color="pink"
    header1.innerHTML="Hey I am pink h3"
    document.body.appendChild(header1)

//here we are access the div and made changes
    const DOM=document.createElement('div')
    document.body.appendChild(DOM)
    DOM.style.border="1px solid red"
    DOM.style.backgroundColor="yellow"

    const header=document.createElement('h1')
    header.innerHTML="I am Learning DOM "

    const para=document.createElement('p')
    para.innerHTML="It is easy but required some pratice"

    DOM.appendChild(header)
    DOM.appendChild(para)

   