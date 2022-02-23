


async function start(){
    const response = await fetch(' https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    console.log(data)
    createBreadList(data.message)

}

start()


function createBreadList(breedList){
document.getElementById('breed').innerHTML = ` 
 <select >
<option >Choose a dog breed</option>
${Object.keys(breedList).map(function(breed){
    return ` <option>${breed}</option>`
}).json('')}

</select>`

}