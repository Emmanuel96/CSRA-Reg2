const fileTempl = document.getElementById("file-template"),
  imageTempl = document.getElementById("image-template"),
  empty = document.getElementById("empty");

// use to store pre selected files
let FILES = {};

let feles;

// check if file is of type image and prepend the initialied
// template to the target element
function addFile(target, file) {
  const isImage = file.type.match("image.*"),
    objectURL = URL.createObjectURL(file);

  const clone = isImage
    ? imageTempl.content.cloneNode(true)
    : fileTempl.content.cloneNode(true);

  clone.querySelector("h1").textContent = file.name;
  clone.querySelector("li").id = objectURL;
  clone.querySelector(".delete").dataset.target = objectURL;
  clone.querySelector(".size").textContent =
    file.size > 1024
      ? file.size > 1048576
        ? Math.round(file.size / 1048576) + "mb"
        : Math.round(file.size / 1024) + "kb"
      : file.size + "b";

  isImage &&
    Object.assign(clone.querySelector("img"), {
      src: objectURL,
      alt: file.name,
    });

  empty.classList.add("hidden");
  target.prepend(clone);

  FILES[objectURL] = file;
}

const gallery = document.getElementById("gallery"),
  overlay = document.getElementById("overlay");

// click the hidden input of type file if the visible button is clicked
// and capture the selected files
const hidden = document.getElementById("hidden-input");
document.getElementById("button").onclick = () => hidden.click();
hidden.onchange = (e) => {
  for (const file of e.target.files) {
    addFile(gallery, file);
  }
  feles = event.target.files;
};

// use to check if a file is being dragged
const hasFiles = ({ dataTransfer: { types = [] } }) =>
  types.indexOf("Files") > -1;

// use to drag dragenter and dragleave events.
// this is to know if the outermost parent is dragged over
// without issues due to drag events on its children
let counter = 0;

// reset counter and append file to gallery when file is dropped
function dropHandler(ev) {
  ev.preventDefault();
  for (const file of ev.dataTransfer.files) {
    addFile(gallery, file);
    overlay.classList.remove("draggedover");
    counter = 0;
  }
}

// only react to actual files being dragged
function dragEnterHandler(e) {
  e.preventDefault();
  if (!hasFiles(e)) {
    return;
  }
  ++counter && overlay.classList.add("draggedover");
}

function dragLeaveHandler(e) {
  1 > --counter && overlay.classList.remove("draggedover");
}

function dragOverHandler(e) {
  if (hasFiles(e)) {
    e.preventDefault();
  }
}

// event delegation to caputre delete events
// fron the waste buckets in the file preview cards
gallery.onclick = ({ target }) => {
  if (target.classList.contains("delete")) {
    const ou = target.dataset.target;
    document.getElementById(ou).remove(ou);
    gallery.children.length === 1 && empty.classList.remove("hidden");
    delete FILES[ou];
  }
};

// print all selected files
document.getElementById("submit").onclick = () => {
  if (Object.keys(FILES).length === 0) {
    Swal.fire({
      title: "Nothing to upload",
      confirmButtonColor: "#00a19a",
    });
  } else if (Object.keys(FILES).length > 5) {
    Swal.fire({
      title: "You are allowed a minimum of five uploads only",
      confirmButtonColor: "#00a19a",
    });
  } else {
    let fi = document.getElementById('hidden-input');

    for (let i = 0; i <= fi.files.length - 1; i++) {
 
      let fsize = fi.files.item(i).size;
      let file = Math.round((fsize / 20480));
      // The size of the file.
      if (file >= 100) {
        return Swal.fire({
          title: "Please upload files less than 20mb",
          confirmButtonColor: "#00a19a",
        });
      }
    }
    
    document.getElementById('submit').innerText = "Uploading"

    document.getElementById('submit').disabled = true

    const formData = new FormData();
    for (let i = 0; i < feles.length; i++) {
      formData.append("upload", feles[i]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    axios.post("/api/media/upload/workplace", formData)
      .then((response) => {
        document.getElementById('submit').innerText = "Upload Now"

        document.getElementById('submit').disabled = false

        Swal.fire({
          title: response.data.message,
          confirmButtonColor: "#00a19a",
        }).then(function(){
          window.location.href = "/community_engagement"
        })
      })
      .catch(() => {
        document.getElementById('submit').innerText = "Upload Now"

        document.getElementById('submit').disabled = false

        Swal.fire({
          title: response.message,
          confirmButtonColor: "#00a19a",
        });
      });
  }
};

// clear entire selection
document.getElementById("cancel").onclick = () => {
  while (gallery.children.length > 0) {
    gallery.lastChild.remove();
  }
  FILES = {};
  empty.classList.remove("hidden");
  gallery.append(empty);
};

let fileNames = []

axios.get('/api/media/fetch').then((res) => {
  fileNames = res.data

  let files = fileNames.map(fileName => (
    `
    <p class="text-sm font-light text-gray-500">${fileName.Filename.split('-').pop()}</p>`
  ))

  document.getElementById('uploaded_files').innerHTML = 
  `<div class="mb-3">
    <h1 class="text-lg text-blue-700">Previously Uploaded Files</h1>
    <div class="mt-2 ml-3">
      ${files.join(' ')}
    </div>
  </div>`
}).catch(() => (null))