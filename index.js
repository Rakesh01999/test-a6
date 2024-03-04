const loadPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // const posts = data.posts ; 
    const posts = data.posts;
    displayPosts(posts);
}

let readC = 0;
function readCount(){

    // post.addEventListener('click', function (event) {
    //     console.log('clicked') ;
    // });
    readC++ ;
    // const postName = seat.querySelector('span').innerText;
    // console.log(readC) ;

    const read = document.getElementById('read').innerText = readC ;
    const postTitle = document.querySelector('h2').innerText ;
    let viewCount = document.getElementById('view_count').innerText ;
    // console.log((postTitle)) ;
    console.log((viewCount)) ;

    const titleContainer = document.getElementById('title-container');

        const p = document.createElement('p');

        // p.innerText = postTitle + " "  + viewCount ;
        p.innerText = postTitle + " "   ;
        titleContainer.appendChild(p);
        p.classList.add("text-[16px]");
}
    
// const msgBtn = document.getElementById('msg-Btn') ;
//  msgBtn.addEventListener('click', function (event) {
//         console.log('clicked') ;
//     });

const displayPosts = posts => {
    // console.log(posts);

    const postContainer = document.getElementById('post-container');

    posts.forEach(post => {
        // console.log(post);
        // create a div
        const postCard = document.createElement('div');
        postCard.classList = `card card-side bg-[#F3F3F5] shadow-xl`;
        // set innerhtml
        postCard.innerHTML = `
        <div class="flex p-10 gap-4">
            <div>
                <figure><img class="h-[72px] w-[72px] rounded-2xl"
                        src="${post.image}"
                        alt="" /></figure>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex text-[16px] gap-6">
                    <p># ${post.category}</p>
                    <p>Author : ${post.author.name}</p>
                </div>
                <h2 id="tit" class="card-title text-[20px] font-bold">${post.title} </h2>
                <p class="text-[16px] ">${post.description}</p>
                <!-- dashed line -->
                <div
                    class="relative flex items-center w-[335px] h-[1px] md:container md:mx-auto">
                    <div class="flex-grow border-t border-dashed border-gray-400"></div>
                </div>
                <div class="flex justify-between ">
                    <div class="flex gap-4">
                        <div class="flex gap-1">
                            <img src="images/message.png" alt="">
                            <p class="text-[16px] ">${post.comment_count}</p>
                        </div>
                        <div class="flex gap-1">
                            <img src="images/eye.png" alt="">
                            <p id="view_count" class="text-[16px]">${post.view_count}</p>
                        </div>
                        <div class="flex gap-1">
                            <img src="images/clock.png" alt="">
                            <p class="text-[16px]">${post.posted_time}</p>
                        </div>
                    </div>
                    <button onclick="readCount()" id="msg-Btn" class="justify-end">
                        <img src="images/grm.png" alt="">
                    </button>
                </div>
            </div>
        </div>
        `;

        // append child
        postContainer.appendChild(postCard);
    });
}



loadPosts();