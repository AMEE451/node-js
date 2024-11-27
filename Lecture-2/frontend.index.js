import { createProduct, DeleteProduct, getProduct, updateProduct } from "./api.js";

let id = -1

const handleData = (e) => {
    e.preventDefault();
    let list = {
        taskname: document.getElementById('taskname').value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value
    }
    // console.log("list",list,id);
    

    if (id == -1) {
        // console.log("id -1");
        
        createProduct(list)
    }
    else {
        // console.log("id 546547567687");
        
        updateProduct(id,list)
    }

}
document.getElementById("todoData").addEventListener("submit",handleData)

const Handleupdate = (ele) => {
    document.getElementById('taskname').value = ele.taskname
    document.getElementById('description').value = ele.description
    document.getElementById('status').value = ele.status
    document.getElementById("submit").value="Update"

    id = ele._id
}

const Mapper = (data) => {

    data.map((ele) => {
        let taskname = document.createElement('h3');
        taskname.innerHTML = ele.taskname
        let description = document.createElement('h5');
        description.innerHTML = ele.description
        let status = document.createElement('h2');
        status.innerHTML = ele.status
        let update = document.createElement('button');
        update.innerHTML = "Update"
        update.addEventListener("click", () => Handleupdate(ele))
        let deleteProduct = document.createElement("button")
        deleteProduct.innerHTML = "Delete"

        deleteProduct.addEventListener("click", () => {
            DeleteProduct(ele._id)
        })
        let div = document.createElement('div');

        div.append(taskname, description, status, deleteProduct, update)

        document.getElementById("todoList").append(div)
    })


}

let data = await getProduct()
// console.log("data",data);

Mapper(data)