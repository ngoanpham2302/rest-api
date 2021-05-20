// Render users info

const apiUsers = "/users";

function getUsers() {
  return $.ajax({
    method: "GET",
    url: apiUsers,
  });
}

// Ready function
$(async function () {
  const users = await getUsers();
  renderAllUsers(users);
});

// Render thông tin tất cả users ra bảng
function renderAllUsers(userArr) {
  let tbodyContent = "";

  for (let i = 0; i < userArr.length; i++) {
    tbodyContent += `<tr>
              <th scope="row">${userArr[i].name}</th>
              <td>${userArr[i].birthday || "Chưa có thông tin"}</td>
              <td>${userArr[i].email}</td>
              <td>${userArr[i].phone}</td>
              <td class="text-center td-edit">
                <a
                  href="./html/edit.html"
                  class="link-success text-decoration-none px-1"
                >
                  <i class="fas fa-edit"></i>
                  <span>Chỉnh sửa</span>
                </a>
                <a
                  href="#"
                  class="link-danger text-decoration-none px-1"
                  data-bs-toggle="modal"
                  data-bs-target="#removeModal"
                >
                  <i class="fas fa-trash-alt"></i>
                  <span>Xóa</span>
                </a>
              </td>
            </tr>`;
  }

  $("table tbody").html(tbodyContent);
}