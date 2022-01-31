function includeBlogs() {

    var blogs_xml

    var client = new XMLHttpRequest()
    client.open('GET', document.location.pathname + '/blogs.xml')
    client.send()
    client.onload = function() {
        blogs_xml = client.responseText
        
        blogs_xml = new DOMParser().parseFromString(blogs_xml, 'text/xml')
        let messages = blogs_xml.getElementsByTagName('message')
        
        console.log(messages)

        var e_BlogList = document.querySelector('.BlogList')
        
        for (let m = 0; m < messages.length; m++) {
            var msg = messages[m]

            var e_MessageBox = document.createElement('div')
            var e_TitleLine = document.createElement('div')
            var e_Title = document.createElement('h3')
            var e_date = document.createElement('p')
            var e_content = document.createElement('div')
            
            e_MessageBox.className = 'MessageBox'
            e_TitleLine.style = 'display:flex;'
            e_Title.textContent = msg.querySelector('title').textContent
            e_date.className = 'MessageDate'
            e_date.textContent = msg.querySelector('date').textContent
            e_content.className = 'MessageContent'

            e_BlogList.appendChild(e_MessageBox)
            .appendChild(e_TitleLine)
            .appendChild(e_Title)
            e_TitleLine.appendChild(e_date)
            e_MessageBox.appendChild(e_content)
        }

    // for (let i = 0; i < Object.keys(blogs).length; i++) {


        
        
        // for (let j = 0; j < Object.keys(blogs[i].content).length; j++) {
        //     if (toString.call(blogs[i].content[j]) == '[object Object]') {
        //         if (blogs[i].content[j].type == ''
        //             || blogs[i].content[j].type == '0') {
        //             var e_ul = document.createElement('ul')
        //             e_content.appendChild(e_ul)
        //             for (let x = 1; x < Object.keys(blogs[i].content[j]).length; x++) {
        //                 var e_li = document.createElement('li')
        //                 alert(blogs[i].content[j][x])
        //                 if (toString.call(blogs[i].content[j][x]) == '[object Array]') {
        //                     e_li.appendChild(array_check(blogs[i].content[j][x]))
        //                 } else e_li.textContent = blogs[i].content[j][x]
        //                 e_ul.appendChild(e_li)
        //             }
        //         }
        //     } else if (toString.call(blogs[i].content[j]) == '[object Array]') {
        //         alert('asd')
        //     } else {
        //         var e_p = document.createElement('p')
        //         e_p.textContent = blogs[i].content[j]
        //         e_content.appendChild(e_p)
        //         if (blogs[i].content[j+1] != null) {
        //             var e_br = document.createElement('br')
        //             e_content.appendChild(e_br)
        //         }
        //     }
        // }
    // }
    }
}

function array_check(arr) {
    var e_main_a = document.createElement('a')
    for (let i = 0; i < arr.length; i++) {
        if (toString.call(arr[i]) == '[object Object]') {
            e_a = document.createElement('a')
            e_a.href = arr[i].link
            if (arr[i].new) e_a.target = '_blank'
            e_la.textContent = arr[i].text
        } else {
            e_a = document.createElement('a')
            e_a.textContent = arr[i]
        }
        e_main_a.appendChild(e_a)
    }
    return e_main_a
}