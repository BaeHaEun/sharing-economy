const $ = (selector) => document.querySelector(selector);
const post = {};
const btn = document.querySelectorAll('.tab-btn');


function mkAPI() {
    async function fetch1() {
        const response = await fetch(`http://localhost:3000/object`)
        const data = await response.json();
    
        return data;
    }
    
    async function fetch2() {
        const response = await fetch(`http://localhost:3000/space`)
        const data = await response.json();
    
        return data;
    }
    
    async function fetch3() {
        const response = await fetch(`http://localhost:3000/talent`)
        const data = await response.json();
    
        return data;
    }
    
    async function fetch4() {
        const response = await fetch(`http://localhost:3000/digital`)
        const data = await response.json();
    
        return data;
    }
    
    //물건
    const objectTemplate1 = (object) => {
        return `
        <a href="/page/market-detail.html?id=${object.id}" class="object-item">
            <div class="ob-img">
            <img src="${object.image}" alt="${object.title}" />
            <img class="ob-icon" src="${object.state.icon}" alt="" />
            </div>
            <span class="ob-title text-line1">${object.title}</span>
            <span class="ob-addr">${object.address}</span>
            <div class="pay">
            <span class="ob-sum">${object.pay}</span>
            <span class="ob-point">5${object.point} ${object.smoney}</span>
            </div>
            <span class="ob-state">${object.category}</span>
            <div class="ob-like-star flex">
            <div class="ob-star">
                <img src="../src/image/star.png" alt="">
                <span>23</span>
            </div>
            <div class="ob-like">
                <img src="../src/image/like.png" alt="">
                <span>23</span>
            </div>
            </div>
        </a>`
    }
    
    fetch1().then(posts => {
    // $(".obj-container").insertAdjacentHTML(
    //     'beforeend', posts.map(post => objectTemplate1(post)).join('')
    // ) 
    $(".obj-container").innerHTML =  posts.map(post => objectTemplate1(post)).join('')
    })
    
    
    const objectTemplate2 = (space) => {
    return `
    <a href="/page/market-detail.html?id=${space.id}" class="object-item space-item">
        <div class="ob-img">
        <img src="${space.image}" alt="${space.title}" />
        <img class="ob-icon" src="${space.state}" alt="" />
        </div>
        <span class="ob-title text-line1">${space.title}</span>
        <span class="ob-addr">${space.address}</span>
        <div class="pay">
        <span class="ob-sum">${space.pay}</span>
        <span class="ob-point">${space.point} ${space.smoney}</span>
        </div>
        <span class="ob-state">${space.category}</span>
        <div class="ob-like-star flex">
        <div class="ob-star">
            <img src="../src/image/star.png" alt="">
            <span>23</span>
        </div>
        <div class="ob-like">
            <img src="../src/image/like.png" alt="">
            <span>23</span>
        </div>
        </div>
    </a>`
    }
    
    // fetch2().then(posts => {
    // $(".space-container").insertAdjacentHTML(
    //     'beforeend', posts.map(post => objectTemplate2(post)).join('')
    // ) 
    // })
    fetch2().then(posts => {
    $(".space-container").innerHTML = posts.map(post => objectTemplate2(post)).join('');
    })
    
    const objectTemplate3 = (talent) => {
    return `
    <a href="/page/market-detail.html?id=${talent.id}" class="object-item talent-item">
        <div class="ob-img">
        <img src="${talent.image}" alt="${talent.title}" />
        <img class="ob-icon" src="${talent.state}" alt="" />
        </div>
        <span class="ob-title text-line1">${talent.title}</span>
        <span class="ob-addr">${talent.address}</span>
        <div class="pay">
        <span class="ob-sum">${talent.pay}</span>
        <span class="ob-point">${talent.point} ${talent.smoney}</span>
        </div>
        <span class="ob-state">${talent.category}</span>
        <div class="ob-like-star flex">
        <div class="ob-star">
            <img src="../src/image/star.png" alt="">
            <span>23</span>
        </div>
        <div class="ob-like">
            <img src="../src/image/like.png" alt="">
            <span>23</span>
        </div>
        </div>
    </a>`
    }
    
    fetch3().then(posts => {
    // $(".talent-container").insertAdjacentHTML(
    //     'beforeend', posts.map(post => objectTemplate3(post)).join('')
    // ) 
        $(".talent-container").innerHTML = posts.map(post => objectTemplate3(post)).join('')
    })
    
    
    const objectTemplate4 = (digital) => {
    return `
    <a href="/page/market-detail.html?id=${digital.id}" class="object-item talent-item">
        <div class="ob-img">
        <img src="${digital.image}" alt="${digital.title}" />
        <img class="ob-icon" src="${digital.state}" alt="" />
        </div>
        <span class="ob-title text-line1">${digital.title}</span>
        <span class="ob-state">${digital.category}</span>
        <div class="ob-like-star flex">
        <div class="ob-star">
            <img src="../src/image/star.png" alt="">
            <span>23</span>
        </div>
        <div class="ob-like">
            <img src="../src/image/like.png" alt="">
            <span>23</span>
        </div>
        </div>
    </a>`
    }
    
    fetch4().then(posts => {
        // $(".digital-container").insertAdjacentHTML(
        //     'beforeend', posts.map(post => objectTemplate4(post)).join('')
        // ) 
        $(".digital-container").innerHTML = posts.map(post => objectTemplate4(post)).join('')
    })
    return
}


for(let i=0; i<btn.length; i++){
    btn[i].onclick = function(e){
        const thisIndex = Array.prototype.indexOf.call(btn, e.currentTarget) + 1;
        const fileName = '../src/ajax_includes/market' + thisIndex + '.html';
        let xhttp = new XMLHttpRequest();
        
        for(let j = 0; j<btn.length; j++){  
            btn[j].classList.remove('active');
            e.target.classList.add('active');
        }
        mkAPI()
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById('ajax_div').innerHTML = this.responseText;
                console.log(mkAPI())
            }
        };
        xhttp.open('GET', fileName, true);
        xhttp.send();
        
    }
    
    document.body.onload = function(e) {
        const thisIndex = Array.prototype.indexOf.call(btn, e.currentTarget) + 2;
        const fileName = '../src/ajax_includes/market' + thisIndex + '.html';
        let xhttp = new XMLHttpRequest();
        
        //mkAPI()
        mkAPI()
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById('ajax_div').innerHTML = this.responseText;
            }
        };
        xhttp.open('GET', fileName, true);
        xhttp.send();
    }
}











