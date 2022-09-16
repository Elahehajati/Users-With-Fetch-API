let x = 0
    let _btn = document.getElementById('btn')
    let _btns = document.getElementById('btns')
    //fetch
    function _search(x, y) {
        fetch('jsonfile.txt')
            .then(function (response) {
                // if (response.status !== 200)
                if (!response.ok) {
                    console.log('Erroradam bash! : ' + response.status);
                    return;
                }
                response.json().then(function (data) {
                    // data.map((item) => {
                    //     item.username
                    //     item.address.zipcode                         // u cant use break in foreach
                    //     if (item.username == x){
                    //         if (item.address.zipcode == y) {
                    //             alert('hellow')
                    //             console.log(item.username)
                    //             let _div = document.createElement('div')
                    //         //     div.innerHTML = `

                    //         // `

                    //         }
                    // })
                    let neshan=0
                    for (i = 0; i < data.length; i++) {
                        data[i].username
                        data[i].address.zipcode
                        if (data[i].username == x) {
                            if (data[i].address.zipcode == y) {
                                neshan=1
                                // alert('hellow')
                                console.log(data.username)
                                let _div = document.createElement('div')
                                _div.classList.add('pi')
                                _div.innerHTML = `
                                <figure><img src="${data[i].address.pic}" alt=""></figure>
                                <span id="s1">Name : ${data[i].name}</span>
                                <span id="s2">Phone : ${data[i].phone}</span>
                                <span id="s3">City : ${data[i].address.city}</span>
                                <span id="s4">Email : ${data[i].email}</span>
                                <span id="s5">Company : ${data[i].company.name}</span>
                                <span id="s6">Website : ${data[i].website}
                                    <img src="img/122633.png" alt="" id="back" onclick='back()'>
                                    </span>
                            `   
                                document.getElementsByTagName('main')[0].appendChild(_div)
                                setTimeout(() => {
                                    document.querySelector('main>.pi').style.left='34%'
                                    document.querySelector('main>.search').style.left='65%'
                                }, 100);
                                break;
                            }
                        } 
                    }
                    if(neshan != 1){
                            _btns.style.top = '70%'
                            document.querySelector('.search>span:nth-of-type(3)').innerHTML =
                            'user not found ! you type wrong username or password '
                        }
                });
            })
            .catch(function (err) {
                document.write('Error: ' + err);
            });
    }
    //back fetch
    function back(){
        document.querySelector('main>.pi').style.zIndex='0'
        document.querySelector('main>.search').style.left='34%'
        document.querySelector('main>.search').style.zIndex='2'
        _user==''
        _pass==''
        setTimeout(() => {
            document.getElementsByTagName('main')[0].lastChild.remove()
            document.querySelector('main>.search').style.zIndex='1'
        }, 1000);
    }
    //search button
    let _user = document.querySelector('#user').value
    let _pass = document.querySelector('#pass').value
    _btns.addEventListener('click', () => {
        let _user = document.querySelector('#user').value
        let _pass = document.querySelector('#pass').value
        if (_user == '' || _pass == '') {
            if (_user == '') {
                document.querySelector('.search>span:nth-of-type(2)').innerHTML =
                    'please complete required input.'
            }
            if (_pass == '') {
                document.querySelector('.search>span:nth-of-type(1)').innerHTML =
                    'please complete required input.'
            }
        } else {
            _search(_user, _pass)
        }
    })
    document.querySelector('.search>input:nth-of-type(1)').addEventListener('input', () => {
        if (_pass != null) {
            document.querySelector('.search>span:nth-of-type(2)').innerHTML = ''
            document.querySelector('.search>span:nth-of-type(3)').innerHTML = ''
            _btns.style.top = '65%'
        }
    })
    document.querySelector('.search>input:nth-of-type(2)').addEventListener('input', () => {
        if (_user != null) {
            document.querySelector('.search>span:nth-of-type(1)').innerHTML = ''
            document.querySelector('.search>span:nth-of-type(3)').innerHTML = ''
            _btns.style.top = '65%'
        }
    })


    //start button
    _btn.addEventListener('click', () => {
        if (x % 2) {
            document.getElementsByClassName('logo')[0].style.left = '60%'
            document.querySelector('.logo>figure:nth-of-type(1)').style.opacity = '1'
            document.querySelector('.logo>figure:nth-of-type(2)').style.opacity = '0'
            document.getElementsByClassName('search')[0].style.left = '34%'
            document.getElementsByClassName('search')[0].style.backgroundColor = 'rgb(255, 238, 208)'
            document.getElementsByTagName('main')[0].style.background =
                'linear-gradient(to right, #ff5f6d, #ffc371)'
        } else {
            document.getElementsByClassName('logo')[0].style.left = '40%'
            document.querySelector('.logo>figure:nth-of-type(2)').style.opacity = '1'
            document.querySelector('.logo>figure:nth-of-type(1)').style.opacity = '0'
            document.getElementsByClassName('search')[0].style.left = '40%'
            document.getElementsByClassName('search')[0].style.backgroundColor = 'rgb(253, 233, 255)'
            document.getElementsByTagName('main')[0].style.background =
                'linear-gradient(to right, #f4c4f3, #fc67fa)'
        }
        x++
    })