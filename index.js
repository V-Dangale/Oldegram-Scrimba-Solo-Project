// import { posts } from "/data.js";
const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "images/avatar-vangogh.jpg",
		post: "/images/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21,
		alt: "Portrait of Vincent Van Gogh as a teen in a black and white suit",
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "images/avatar-courbet.jpg",
		post: "/images/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        alt: "Gustav pulling his hair in shock",
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "images/avatar-ducreux.jpg",
		post: "/images/post-ducreux.jpg",
		comment:
			"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        alt: "Joseph showing finger guns",
	},
];

const mainEL = document.getElementById("main");

function renderPost(postDetails) {
	for (const details of postDetails) {
		mainEL.innerHTML += `	
		<section class="account-info" id="account-info">

			<div class="avatar-container" id="avatar-container">
				<img
				src=${details.avatar}
				class="avatar" 
				id="avatar" />
			</div>

			<div id="user-details">
				<h1 
					class="user-name" 
					id="name">
					${details.name}
				</h1>
				<h2 
					class="normal-font-weight user-location" 
					id="location">
					${details.location}
				</h2>
			</div>

		</section>

		<section class="post">
			<img 
				src="${details.post}"
				alt="${details.alt}"
				class="olda-post" 
				id="post" />
		</section>

		<section class="reactions">
			<img src="images/icon-heart.png" alt="like-icon" class="btn-icon" />
			<img src="images/icon-comment.png" alt="comment-icon" class="btn-icon" />
			<img src="images/icon-dm.png" alt="dm-icon" class="btn-icon" />
		</section>

		<section class="caption" id="caption">
			<p>
				<span class="new-line">
					<span id="likes">
						${details.likes}
					</span>likes
				</span>

				<span id="username">
					${details.username}
				</span>

				<span
					class="normal-font-weight"
					id="comment">
					${details.comment}
				</span>
			</p>
		</section>
	`;
	}
}

renderPost(posts);
