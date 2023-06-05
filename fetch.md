const $ = (selector) => document.querySelector(selector);
const post = {};

//물건
async function fetchObj() {
  const response = await fetch(`http://localhost:3000/object`)
  const data = await response.json();

  return data;
}

async function fetchSpace() {
  const response = await fetch(`http://localhost:3000/space`)
  const data = await response.json();

  return data;
}

async function fetchTalent() {
  const response = await fetch(`http://localhost:3000/talent`)
  const data = await response.json();

  return data;
}

//물건
const objectTemplate = (object) => {
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
        <img src="./src/image/star.png" alt="">
        <span>23</span>
      </div>
      <div class="ob-like">
        <img src="./src/image/like.png" alt="">
        <span>23</span>
      </div>
    </div>
  </a>`
}

fetchObj().then(posts => {
  console.log(posts)
//   $(".obj-container").insertAdjacentHTML(
//     'beforeend', posts.map(post => objectTemplate(post)).join('')
//   ) 
  $(".posting-container").innerHTML = posts.map(post => objectTemplate(post)).join('')
})


const spaceTemplate = (space) => {
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
        <img src="./src/image/star.png" alt="">
        <span>23</span>
      </div>
      <div class="ob-like">
        <img src="./src/image/like.png" alt="">
        <span>23</span>
      </div>
    </div>
  </a>`
}

fetchSpace().then(posts => {
  console.log(posts)
  $(".space-container").insertAdjacentHTML(
    'beforeend', posts.map(post => spaceTemplate(post)).join('')
  ) 
  //$(".posting-container").innerHTML = posts.map(post => postTemplate(post)).join('')
})

const talentTemplate = (talent) => {
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
        <img src="./src/image/star.png" alt="">
        <span>23</span>
      </div>
      <div class="ob-like">
        <img src="./src/image/like.png" alt="">
        <span>23</span>
      </div>
    </div>
  </a>`
}

fetchTalent().then(posts => {
  console.log(posts)
  $(".talent-container").insertAdjacentHTML(
    'beforeend', posts.map(post => talentTemplate(post)).join('')
  ) 
  //$(".posting-container").innerHTML = posts.map(post => postTemplate(post)).join('')
})
