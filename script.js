fetch("tests.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("testList");
    data.forEach(test => {
      const a = document.createElement("a");
      a.href = test.url;
      a.className = "card";
      a.innerHTML = `
        <img src="${test.img}" alt="${test.title}">
        <div class="card-text">
          <h3>${test.title}</h3>
          <p>${test.desc}</p>
        </div>
      `;
      container.appendChild(a);
    });
  });
  document.getElementById("loading").style.display = "none";