<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
// import "@/assets/styles/datatables.css";
import $ from "jquery";
import DefaultLayout from "@/layouts/default.vue";

export default {
  components: {
    DefaultLayout,
  },
  data: () => ({
    users: [
      {
        name: "Saffron Davies",
        email: "gez_enopiva42@yahoo.com",
        department: "Software",
        salary: "112.223$",
        phone: "+(998)912372828",
      },
      {
        name: "Sadia Meza",
        email: "biruru_kuma22@gmail.com",
        department: "Product",
        salary: "412.223$",
        phone: "+(998)777772828",
      },
      {
        name: "Mathew Doherty",
        email: "yakuka_naci78@aol.com",
        department: "Creative",
        salary: "712.223$",
        phone: "+(998)934572828",
      },
      {
        name: "John Dickerson",
        email: "fam_abofovu17@gmail.com",
        department: "Software",
        salary: "312.223$",
        phone: "+(998)904723448",
      },
      {
        name: "Ellie-Mae Orozco",
        email: "famifo_fopo71@gmail.com",
        department: "Creative",
        salary: "812.223$",
        phone: "+(998)934562828",
      },
      {
        name: "Eric Sharp",
        email: "wefedim-enu12@gmail.com",
        department: "Product",
        salary: "912.223$",
        phone: "+(998)657872828",
      },
      {
        name: "Edmund Noble",
        email: "vid_edidico93@mail.com",
        department: "Software",
        salary: "312.223$",
        phone: "+(998)445672828",
      },
      {
        name: "Saffron Davies",
        email: "gez_enopiva42@yahoo.com",
        department: "Software",
        salary: "112.223$",
        phone: "+(998)912372828",
      },
      {
        name: "Sadia Meza",
        email: "biruru_kuma22@gmail.com",
        department: "Product",
        salary: "412.223$",
        phone: "+(998)777772828",
      },
      {
        name: "Mathew Doherty",
        email: "yakuka_naci78@aol.com",
        department: "Creative",
        salary: "712.223$",
        phone: "+(998)934572828",
      },
      {
        name: "John Dickerson",
        email: "fam_abofovu17@gmail.com",
        department: "Software",
        salary: "312.223$",
        phone: "+(998)904723448",
      },
      {
        name: "Ellie-Mae Orozco",
        email: "famifo_fopo71@gmail.com",
        department: "Creative",
        salary: "812.223$",
        phone: "+(998)934562828",
      },
      {
        name: "Eric Sharp",
        email: "wefedim-enu12@gmail.com",
        department: "Product",
        salary: "912.223$",
        phone: "+(998)657872828",
      },
      {
        name: "Edmund Noble",
        email: "vid_edidico93@mail.com",
        department: "Software",
        salary: "312.223$",
        phone: "+(998)445672828",
      },
      {
        name: "Saffron Davies",
        email: "gez_enopiva42@yahoo.com",
        department: "Software",
        salary: "112.223$",
        phone: "+(998)912372828",
      },
      {
        name: "Sadia Meza",
        email: "biruru_kuma22@gmail.com",
        department: "Product",
        salary: "412.223$",
        phone: "+(998)777772828",
      },
      {
        name: "Mathew Doherty",
        email: "yakuka_naci78@aol.com",
        department: "Creative",
        salary: "712.223$",
        phone: "+(998)934572828",
      },
      {
        name: "John Dickerson",
        email: "fam_abofovu17@gmail.com",
        department: "Software",
        salary: "312.223$",
        phone: "+(998)904723448",
      },
      {
        name: "Ellie-Mae Orozco",
        email: "famifo_fopo71@gmail.com",
        department: "Creative",
        salary: "812.223$",
        phone: "+(998)934562828",
      },
      {
        name: "Eric Sharp",
        email: "wefedim-enu12@gmail.com",
        department: "Product",
        salary: "912.223$",
        phone: "+(998)657872828",
      },
    ],
  }),
  mounted() {
    $("#datatable").DataTable();
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full justify-center bg-background">
      <h1 class="ml-12 mt-7 mb-5 text-3xl font-black">User List</h1>
      <div class="pl-12 pr-12 pb-7">
        <div class="w-fill bg-light-gray p-12 rounded-lg mb-5">
          <table class="table stripe text-gray" id="datatable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Phone No.</th>
                <th class="no-sort"></th>
                <th class="no-sort"></th>
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="item in users" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.salary }}</td>
                <td>{{ item.phone }}</td>
                <td>
                  <div>
                    <button
                      class="pl-4 pr-4 pt-2 pb-2 bg-blue rounded-lg text-white hover:bg-dark-blue duration-200 -mr-5"
                    >
                      Edit
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <button
                      class="pl-4 pr-4 pt-2 pb-2 bg-red rounded-lg text-white hover:bg-dark-red duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style>
.no-sort::after {
  display: none !important;
}
.no-sort::before {
  display: none !important;
}
.no-sort {
  pointer-events: none !important;
  cursor: default !important;
}

.paginate_button {
  background: transparent !important;
  color: #2d3134;
  margin-top: 20px;
  margin-right: 10px;
  transition: all .5s;
}

.dataTables_info {
  margin-top: 20px;
}

.dataTables_filter {
  margin-bottom: 20px;
  border-radius: 50px;
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: #2d3134 !important;
}
</style>
