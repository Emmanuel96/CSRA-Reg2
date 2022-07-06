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
    document.getElementById('submit').innerText = "Uploading"

    document.getElementById('submit').disabled = true

    const formData = new FormData();
    for (let i = 0; i < feles.length; i++) {
      formData.append("upload", feles[i]);
    }

    for (let pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    axios.post("/api/media/upload/philanthropy", formData)
      .then((response) => {
        document.getElementById('submit').innerText = "Upload Now"

        document.getElementById('submit').disabled = false

        Swal.fire({
          title: response.data.message,
          confirmButtonColor: "#00a19a",
        });
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

const ID = sessionStorage.getItem("csra_user");
let appData = ""

axios.get(`/api/application/${ID}`).then(result => {
  appData = result.data
}).then(() => {
  document.getElementById('phil_other_information').value = appData.phil_other_information

  document.getElementById('phil_future_planning').value = appData.phil_future_planning
})

////////////

function updateSupportingDocs(){
  event.preventDefault(); 

  let phil_other_information = document.getElementById('phil_other_information').value

  let phil_future_planning = document.getElementById('phil_future_planning').value

  if(!phil_other_information || !phil_future_planning){
    Swal.fire({
      title: 'Are you sure you want to submit without adding any other information?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#00a19a',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then(result => {
      if (result.isConfirmed){
        let data = {
          phil_other_information: phil_other_information,
          phil_future_planning: phil_future_planning
        }

        document.getElementById('finish_btn').innerText = "Please wait"

        document.getElementById('finish_btn').disabled = true

        axios.put(`/philanthropy_supporting_info/${ID}`, data).then(response => {
          document.getElementById('finish_btn').innerText = "Finish"

          document.getElementById('finish_btn').disabled = false
          if(response.data.success){  
            let company_details_completed = appData.company_details_completed
            let introduction_completed = appData.introduction_completed
            let assessments_and_tips_completed = appData.assessments_and_tips_completed
          
            let env_energy_completed = appData.env_energy_completed
            let env_natural_resource_completed = appData.env_natural_resource_completed
            let env_travel_completed = appData.env_travel_completed
            let env_supply_chain_management_completed = appData.env_supply_chain_management_completed
            let env_waste_completed = appData.env_waste_completed
          
            let wrk_training_completed = appData.wrk_training_completed
            let wrk_labour_practices_completed = appData.wrk_labour_practices_completed
            let wrk_ethical_practices_completed = appData.wrk_ethical_practices_completed
            let wrk_governance_completed = appData.wrk_governance_completed
            let wrk_policies_completed = appData.wrk_policies_completed
          
            let com_engagement_completed = appData.com_engagement_completed
            let com_local_issues_completed = appData.com_local_issues_completed
            let com_wealth_creation_completed = appData.com_wealth_creation_completed
            let com_projects_and_groups_completed = appData.com_projects_and_groups_completed
            let com_education_completed = appData.com_education_completed
          
            let phil_charitable_involvement_completed = appData.phil_charitable_involvement_completed
            let phil_volunteering_completed = appData.phil_volunteering_completed
            let phil_pro_bono_completed = appData.phil_pro_bono_completed
            let phil_fund_raising_completed = appData.phil_fund_raising_completed
            let phil_financial_and_kind_gifts_completed = appData.phil_financial_and_kind_gifts_completed

            if(
              !company_details_completed || 
              !introduction_completed ||
              !env_energy_completed ||
              !env_natural_resource_completed ||
              !env_travel_completed ||
              !env_supply_chain_management_completed ||
              !env_waste_completed ||
              !wrk_training_completed ||
              !wrk_labour_practices_completed ||
              !wrk_ethical_practices_completed ||
              !wrk_governance_completed ||
              !wrk_policies_completed ||
              !com_engagement_completed ||
              !com_local_issues_completed ||
              !com_wealth_creation_completed ||
              !com_projects_and_groups_completed ||
              !com_education_completed ||
              !phil_charitable_involvement_completed ||
              !phil_volunteering_completed ||
              !phil_pro_bono_completed ||
              !phil_fund_raising_completed ||
              !phil_financial_and_kind_gifts_completed ||
              !assessments_and_tips_completed
            ){
              return Swal.fire({
                title: "Submitted successfully but you are yet to complete your application",
                confirmButtonColor: '#00a19a'
              })
            }

            fetch(`/application_finished/${ID}`, {
              method: "PUT", 
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(response => response.json())
            .then(data => {
              if(data.success){
                document.getElementById('finish_btn').innerText = "Finish"
          
                document.getElementById('finish_btn').disabled = false
          
                axios.put(`/application_finished/${ID}`)

                axios.post('/api/application/completed')
                
                Swal.fire({
                  title: "Thank You For Your Application!",
                  confirmButtonColor: '#00a19a'
                }).then(function(){
                  fetch(`/logout`, {
                    method: "DELETE"
                  }).then(() => window.location.href = '/login')
                });
              }else{
                document.getElementById('finish_btn').innerText = "Finish"
          
                document.getElementById('finish_btn').disabled = false
                
                Swal.fire({
                  title: "Failed to submit. Please try again",
                  confirmButtonColor: '#00a19a'
                })              
              }
            })
          }else{    
            document.getElementById('finish_btn').innerText = "Submit"

            document.getElementById('finish_btn').disabled = false

            Swal.fire({
              title: "Something went wrong. Please try again",
              confirmButtonColor: '#00a19a'
            })              
          }
        })
      }
    })
  } else{
    document.getElementById('finish_btn').innerText = "Submitting"

    document.getElementById('finish_btn').disabled = true

    let data = {
      phil_other_information: phil_other_information,
      phil_future_planning: phil_future_planning
    }

    axios.put(`/philanthropy_supporting_info/${ID}`, data).then((res) => {
      console.log(res)
      if(res.status === 200){
        document.getElementById('finish_btn').innerText = "Finish"

        document.getElementById('finish_btn').disabled = false

        let company_details_completed = appData.company_details_completed
        let introduction_completed = appData.introduction_completed
        let assessments_and_tips_completed = appData.assessments_and_tips_completed
      
        let env_energy_completed = appData.env_energy_completed
        let env_natural_resource_completed = appData.env_natural_resource_completed
        let env_travel_completed = appData.env_travel_completed
        let env_supply_chain_management_completed = appData.env_supply_chain_management_completed
        let env_waste_completed = appData.env_waste_completed
      
        let wrk_training_completed = appData.wrk_training_completed
        let wrk_labour_practices_completed = appData.wrk_labour_practices_completed
        let wrk_ethical_practices_completed = appData.wrk_ethical_practices_completed
        let wrk_governance_completed = appData.wrk_governance_completed
        let wrk_policies_completed = appData.wrk_policies_completed
      
        let com_engagement_completed = appData.com_engagement_completed
        let com_local_issues_completed = appData.com_local_issues_completed
        let com_wealth_creation_completed = appData.com_wealth_creation_completed
        let com_projects_and_groups_completed = appData.com_projects_and_groups_completed
        let com_education_completed = appData.com_education_completed
      
        let phil_charitable_involvement_completed = appData.phil_charitable_involvement_completed
        let phil_volunteering_completed = appData.phil_volunteering_completed
        let phil_pro_bono_completed = appData.phil_pro_bono_completed
        let phil_fund_raising_completed = appData.phil_fund_raising_completed
        let phil_financial_and_kind_gifts_completed = appData.phil_financial_and_kind_gifts_completed
  
        if(
          !company_details_completed || 
          !introduction_completed ||
          !env_energy_completed ||
          !env_natural_resource_completed ||
          !env_travel_completed ||
          !env_supply_chain_management_completed ||
          !env_waste_completed ||
          !wrk_training_completed ||
          !wrk_labour_practices_completed ||
          !wrk_ethical_practices_completed ||
          !wrk_governance_completed ||
          !wrk_policies_completed ||
          !com_engagement_completed ||
          !com_local_issues_completed ||
          !com_wealth_creation_completed ||
          !com_projects_and_groups_completed ||
          !com_education_completed ||
          !phil_charitable_involvement_completed ||
          !phil_volunteering_completed ||
          !phil_pro_bono_completed ||
          !phil_fund_raising_completed ||
          !phil_financial_and_kind_gifts_completed ||
          !assessments_and_tips_completed
        ){
           Swal.fire({
            title: "Submitted successfully but you are yet to complete your application",
            confirmButtonColor: '#00a19a'
          })
        } else{
          document.getElementById('finish_btn').innerText = "Finish"
  
          document.getElementById('finish_btn').disabled = false
    
          axios.put(`/application_finished/${ID}`)
          
          axios.post('/api/application/completed')
                  
          Swal.fire({
            title: "Thank You For Your Application!",
            confirmButtonColor: '#00a19a'
          }).then(function(){
            fetch(`/logout`, {
              method: "DELETE"
            }).then(() => window.location.href = '/login')
          })
        }
      } else{
        document.getElementById('finish_btn').innerText = "Finish"

        document.getElementById('finish_btn').disabled = false
        
        Swal.fire({
          title: "Failed to submit. Please try again",
          confirmButtonColor: '#00a19a'
        }) 
      }
    })
  }
}