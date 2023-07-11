function creatingProjects(input){
    let name = input[0];
    let projects = Number(input[1]);
    let hours_per_project = 3
    let hours = projects * hours_per_project

    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`)
}

creatingProjects(["George ", "4 "])