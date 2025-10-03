document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "admin") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials!");
      }
    });
  }

  if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "login.html";
    }
  }

  if (window.location.pathname.includes("student-view.html")) {
    renderStudentBooks();
  }

  if (window.location.pathname.includes("dashboard.html")) {
    renderBooks();
  }

});

// ===== BOOK STORAGE =====
function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}

function saveBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

// ===== ADD BOOK =====
const bookForm = document.getElementById("bookForm");
if (bookForm) {
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const books = getBooks();
    const newBook = {
      id: Date.now(),
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      year: document.getElementById("year").value,
      status: document.getElementById("status").value
    };
    books.push(newBook);
    saveBooks(books);
    renderBooks();
    bookForm.reset();
  });
}

function renderBooks() {
  const books = getBooks();
  const tbody = document.querySelector("#bookTable tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  books.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td class="${book.status === "Available" ? "available" : "unavailable"}">${book.status}</td>
      <td>
        <button onclick="toggleStatus(${book.id})">Toggle Status</button>
        <button onclick="deleteBook(${book.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });

  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("keyup", () => filterBooks(search.value, "bookTable"));
  }
}

// ===== RENDER BOOKS (Student) =====
function renderStudentBooks() {
  const books = getBooks();
  const tbody = document.querySelector("#studentBookTable tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  books.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td class="${book.status === "Available" ? "available" : "unavailable"}">${book.status}</td>
    `;
    tbody.appendChild(row);
  });

  const search = document.getElementById("studentSearch");
  if (search) {
    search.addEventListener("keyup", () => filterBooks(search.value, "studentBookTable"));
  }
}

// ===== FILTER BOOKS =====
function filterBooks(query, tableId) {
  const rows = document.querySelectorAll(`${tableId} tbody tr`);
  query = query.toLowerCase();
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? "" : "none";
  });
}


function toggleStatus(id) {
  const books = getBooks();
  const book = books.find(b => b.id === id);
  if (book) {
    book.status = (book.status === "Available") ? "Checked Out" : "Available";
    saveBooks(books);
    renderBooks();
  }
}

// ===== DELETE BOOK =====
function deleteBook(id) {
  let books = getBooks();
  books = books.filter(b => b.id !== id);
  saveBooks(books);
  renderBooks();
}

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// ===== LOGOUT =====
function student() {
//   localStorage.removeItem("loggedIn");
  window.location.href = "student-view.html";
}

// ===== LOGOUT =====
function libarian() {
  // localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
