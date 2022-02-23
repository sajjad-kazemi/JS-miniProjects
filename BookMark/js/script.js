let $ = document;
const modalShow = $.getElementById("show-modal");
const modal = $.getElementById("modal");
const closeModal = $.getElementById("close-modal");
const websiteNameEl = $.getElementById("website-name");
const websiteUrlEl = $.getElementById("website-url");
const btnSave = $.querySelector("button");
const bookmarksContainer = $.getElementById("bookmarks-container");

let bookMarks = [];

const showModal = () => {
	modal.classList.add("show-modal");
};

const modalClose = () => {
	modal.classList.remove("show-modal");
};

const buildBookmark = () => {
	bookmarksContainer.innerHTML = "";

	bookMarks.forEach((bookmark) => {
		const name = bookmark.name;
		const url = bookmark.url;

		// Item
		const item = document.createElement("div");
		item.classList.add("item");

		// CloseIcon
		const closeIcon = document.createElement("i");
		closeIcon.classList.add("fa", "fa-times");
		closeIcon.setAttribute("title", "Delete Bookmark");
		closeIcon.addEventListener("click", () => {
			deleteBookmark(url);
		});

		// link & favicon container
		const linkInfo = document.createElement("div");
		linkInfo.classList.add("name");

		// Link
		const link = document.createElement("a");
		link.setAttribute("href", "https://" + url);
		link.setAttribute("target", "_blank");
		link.textContent = name;

		// img (favicon)
		const favicon = document.createElement("img");
		favicon.setAttribute(
			"src",
			"https://s2.googleusercontent.com/s2/favicons?domain=" + url
		);
		favicon.setAttribute("alt", name);

		linkInfo.append(favicon, link);
		item.append(closeIcon, linkInfo);

		bookmarksContainer.appendChild(item);
	});
};

const fetchBookmarks = () => {
	if (localStorage.getItem("bookmarks")) {
		bookMarks = JSON.parse(localStorage.getItem("bookmarks"));
	} else {
		bookMarks = [];
		localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
	}
	buildBookmark();
};

const storeBookmark = (e) => {
	e.preventDefault();
	let nameValue = websiteNameEl.value;
	let urlValue = websiteUrlEl.value;

	if (!inputsValidation(nameValue, urlValue)) {
		return false;
	}

	const bookmarkObj = {
		name: nameValue,
		url: urlValue,
	};

	bookMarks.push(bookmarkObj);
	localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
	buildBookmark();
	websiteNameEl.value = "";
	websiteUrlEl.value = "";
	modalClose();

};

const inputsValidation = (name, url) => {
	if (name === "" || url === "") {
		alert("لطفا هر دو مورد را پر نمایید");
		return false;
	} else if (name.length > 15 || url.length > 20) {
		alert("مقادیر وارد شده بیش از حد مجاز هستند");
		return false;
	}
	return true;
};

// delete function for bookmarks
const deleteBookmark = (inputUrl) => {
	let deleteBookmarkConfirm = confirm("مطمئنی که میخوای حذفش کنی؟");

	if (deleteBookmarkConfirm) {
		bookMarks.forEach((bookmark, index) => {
			if (bookmark.url == inputUrl) {
				bookMarks.splice(index, 1);
			}
		});
		localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
		fetchBookmarks();
	}
};

// Events
modalShow.addEventListener("click", showModal);
closeModal.addEventListener("click", modalClose);
btnSave.addEventListener("click", storeBookmark);

fetchBookmarks();