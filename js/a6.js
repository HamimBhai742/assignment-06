const allPostLoad = async (inputText, values) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputText}`)
    const data = await res.json()
    displayShowAllPost(data, values)
}

const displayShowAllPost = (data, values) => {
    // console.log(values);
    const posts = data.posts

    const allPosts = document.getElementById('all-posts')
    if (values === 'isclick') {
        allPosts.textContent = ''
    }
    console.log(posts);
    const noData = document.getElementById('no-data')
    if (posts.length <= 0) {
        noData.textContent = ""
        noData.innerHTML=`
        <h3 class="flex text-3xl font-bold justify-center">No Data Found!</h3>
        `
    }

    posts.forEach((post) => {
        console.log(post);
        // if (post.isActive === true){
        //     const cheakActive = document.getElementById('cheak-active')
        //     console.log(cheakActive.classList);
        //     // cheakActive.classList
        // }
        const div = document.createElement('div')
        div.classList = `card card-side bg-[#797DFC1A] border-2 border-[#797DFC] lg:max-w-[750px] mt-3`
        div.innerHTML = `
                    <div class="w-20 h-20  rounded-md mt-10 ml-3 relative">
                    <img class="rounded-lg" src="${post.image}" alt="">
                        <div class="w-4 h-4 rounded-full absolute -right-1 -top-1 bg-[#10B981]" id="cheak-active" >

                        </div>
                    </div>
                    <div class="card-body font-inter">
                        <div class="text-[#12132DCC] flex max-sm:text-xs">
                            <p><span>#</span> ${post.category}</p>
                            <p><span>Author :</span> ${post.author.name}</p>
                        </div>
                        <div>
                            <h4 class="lg:text-xl font-mulish text-[#12132D] font-bold text-lg">${post.title}</h4>
                            <p class=" text-[#12132D99]">${post.description}</p>
                        </div>
                        <div class="border-b-2 border-dashed border-[#12132D40] mt-1"></div>
                        <div class="flex items-center justify-between mt-2">
                            <div class="flex text-[#12132D99] gap-5  max-sm:text-xs">
                                <div class="flex gap-2"><span><i class="fa-regular fa-comment"></i></span>
                                    <p>${post.comment_count}</p></i>
                                </div>
                                <div class="flex gap-2"><span><i class="fa-regular fa-eye"></i></span>
                                    <p>${post.view_count}</p></i>
                                </div>
                                <div class="flex gap-2"><span><i class="fa-regular fa-clock"></i></span>
                                    <p>${post.posted_time}<span> min</span></p></i>
                                </div>
                            </div>
                            <button onclick="redMessageBtn('${post.title}','${post.view_count}')"><img src="./images/email 1.png" alt=""></i></i></button>
                        </div>
                    </div>
        `
        // console.log(post.isActive);
        // if (post.isActive === true) {
        //     const cheakActive = document.getElementById('cheak-active')
        //     // console.log(cheakActive);
        //     cheakActive.classList = `absolute`
        //     // cheakActive.classList.add('bg-[#10B981]')
        //     // console.log('object');
        // }
        // // else {

        // // }
        allPosts.appendChild(div)
    });

}
allPostLoad('coding')
allPostLoad('comedy')
allPostLoad('music')

let count = 0
const redMessageBtn = (title, view) => {
    console.log(title, view);
    count++
    const countRedMessage = document.getElementById('count-message')
    countRedMessage.innerText = count
    console.log(count);
    // const bdgs=title.split('  ')
    // console.log(bdgs);
    const redMessage = document.getElementById('red-message')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="bg-[#FFF] flex p-3 rounded-xl shadow-md items-center mt-3 gap-3">
    <p class="text-[#12132D] font-semibold font-mulish text-lg">${title}</p>
    <p class="font-inter flex gap-1"><span><i
                class="fa-regular fa-eye "></i></span><span>${view}</span></p>
</div>
    `
    redMessage.appendChild(div)
    // for(const post1 of datas.posts){
    //     console.log(post1.isActive);
    //     if(post1.isActive===true){
    //         const cheakActive = document.getElementById('cheak-active')
    //         cheakActive.classList.remove('bg-[#10B981]')
    //         console.log(cheakActive.classList);
    //     }
    // }
}

const searchBtn = () => {
    const inputFiled = document.getElementById('input-filed').value
    console.log(inputFiled);
    setTimeout(()=>{
        allPostLoad(inputFiled, 'isclick')
    },2000)
}

const latestPostLoad = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    displayShowLatestPost(data)
}

const displayShowLatestPost = (data) => {
    // console.log(data);
    const letastPostContainer = document.getElementById('latest-post')
    data.forEach((post) => {
        console.log(post);
        const div = document.createElement('div')
        div.classList = `card card-compact w-full lg:w-96 bg-base-100 font-mulish border-2 border-[#12132D26]`
        div.innerHTML = `
        <figure class="p-5 "><img class="rounded-xl" src="${post.cover_image}"
                            alt="Shoes" /></figure>
                    <div class="card-body">
                        <p class="text-[#12132D99]"><span><i class="fa-solid fa-calendar-days"></i></span> ${post?.author?.posted_date || 'No publish date'}</p>
                        <h2 class="card-title text-[12132D] font-extrabold">${post.title}</h2>
                        <p class="text-[#12132D99]">${post.description}</p>
                        <div class="flex items-center gap-3">
                            <img class="w-14 h-14 rounded-full" src="${post.profile_image}" alt="">
                            <div>
                                <h5 class="text-[#12132D] font-bold font-mulish">${post.author.name}</h5>
                                <p class="text-[#12132D99]">${post?.author?.designation || 'Unknown'}</p>
                            </div>
                        </div>
                    </div>
        `
        letastPostContainer.appendChild(div)
    })
}
latestPostLoad()

