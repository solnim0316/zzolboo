fetch("tests.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("testList");
    data.forEach(test => {
      const a = document.createElement("a");
      a.href = test.url;
      a.className = "card";
      a.onclick = function(e) {
        e.preventDefault();
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = 'flex';
        setTimeout(() => {
          location.href = test.url;
        }, 500);
      };
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