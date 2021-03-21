function renderPackages(packages) {
    const container = document.querySelector('.container');
    const count = document.querySelector('.count');

    count.textContent = `${packages.length} packages`;
    packages.forEach(package =>
        container.innerHTML += `<div class="item" id="${package.name}"><a href="${package.link}"><h3 class="name">${package.name}</h3>
       </a></div>`
    );
}
(function fetchData() {
    fetch("packages.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const packages = data.packages;

            renderPackages(packages);
        });
})();