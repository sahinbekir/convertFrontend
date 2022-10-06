<template>
  <div>
  User ID:
  <input v-model="userData.userid" type="text" placeholder="User ID" class=" mb-0" />
  <button  @click="bilgilerigetir(userData.userid)" color="primary" class="px-4">Fetch</button>
  <button  @click="sil(userData.userid)" color="primary" class="px-4">Delete</button>
    <br>
  User Key:
  <input v-model="userData.searchkey" type="text" placeholder="SearchKey" class=" mb-0" />
  User First Name:
  <input v-model="userData.userFN" type="text" placeholder="First Name" class=" mb-0" />
  User Last Name:
  <input v-model="userData.userLN" type="text" placeholder="Last Name" class=" mb-0" />
  <button  @click="searchByName(userData.searchkey,userData.userFN,userData.userLN)" color="primary" class="px-4">Search</button>
  <br>
  <br>
  <br>
  User Type:
  <input v-model="userData.usertype" type="text" placeholder="User Type" class=" mb-0" />
  User First Name:
  <input v-model="userData.userfname" type="text" placeholder="First Name" class=" mb-0" />
  User Last Name:
  <input v-model="userData.userlname" type="text" placeholder="Last Name" class=" mb-0" />
  User Phone:
  <input v-model="userData.userphone" type="text" placeholder="Phone" class=" mb-0" />
  <br>
  User Email:
  <input v-model="userData.useremail" type="text" placeholder="Email" class=" mb-0" />
  Username:
  <input v-model="userData.username" type="text" placeholder="Username" class=" mb-0" />
  User Password:
  <input v-model="userData.userpassword" type="password" placeholder="Password" class=" mb-0" />
  
  <button  @click="guncelle(userData.userid)" color="primary" class="px-4">Update</button>
  <br>
  <br><br>
  <!--
    <input v-model="userT.username" type="password" placeholder="Sifre" class=" mb-0" />
  <button @click="kayit" color="primary" class="px-4">Ekle Lo</button>
  -->
</div>


  <CRow>


  
<CTable responsive="xl">
  <CTableHead>
    <CTableRow>
    <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">User ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">User Type</CTableHeaderCell>
      <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
      <CTableHeaderCell scope="col">Email</CTableHeaderCell>
      <CTableHeaderCell scope="col">Username</CTableHeaderCell>
      <CTableHeaderCell scope="col">Password</CTableHeaderCell>
      <CTableHeaderCell scope="col">Options</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

<CTableBody v-for="veri in tableData">
    <CTableRow>
    <CTableHeaderCell scope="row">#</CTableHeaderCell>
      <CTableDataCell>{{veri.userId}}</CTableDataCell>
      <CTableDataCell>{{veri.userType}}</CTableDataCell>
      <CTableDataCell>{{veri.userFirstName}}</CTableDataCell>
      <CTableDataCell>{{veri.userLastName}}</CTableDataCell>
      <CTableDataCell>{{veri.userPhone}}</CTableDataCell>
      <CTableDataCell>{{veri.userEmail}}</CTableDataCell>
      <CTableDataCell>{{veri.userName}}</CTableDataCell>
      <CTableDataCell>{{veri.userPassword}}</CTableDataCell>
      <CTableDataCell>
                          <button type="button"
                            class="btn btn-light mr-1"
                            @click="bilgilerigetir(veri.userId)" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                          </button>
                          <button type="button" @click="sil(veri.userId)"
                            class="btn btn-light mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                          </button>
      </CTableDataCell>

    </CTableRow>
    
  </CTableBody>
  </CTable>
  </CRow>

</template>


<script>




export default {
  name: 'UserList',
  data() {
    return {
      userData: {
        searchkey:"",
        userFN:"",
        userLN:"",


        userid: null,
        usertype: null,
        userfname: null,
        userlname: null,
        userphone: null,
        useremail: null,
        username: null,
        userpassword: null
      },
      tableData: [],
      userOne: []
    };
  },
  components: {
    
  },
   methods: {

    searchByName(searchkey,userFN,userLN){
      this.$appAxios
      .get("/User/search/"+searchkey+"?userfirstname="+userFN+"&userlastname="+userLN)
      .then((response) => {
            this.userOne=response.data;
            this.addPersonData();
                   
        })
        .catch(e => alert(e.response.data));
    },





       sil(delUserId){
           
          this.$appAxios
          .delete(`/User/`+delUserId)
          .then(response => {
            this.refreshUsersList();
            alert("Kullanıcı Kaydı Silindi...");

            
          
        })
        .catch(e => console.log(e));

   

       },


       addPersonData(){
            this.userData.userid = this.userOne.userId
            this.userData.usertype = this.userOne.userType
            this.userData.userfname = this.userOne.userFirstName
            this.userData.userlname = this.userOne.userLastName
            this.userData.userphone = this.userOne.userPhone
            this.userData.useremail = this.userOne.userEmail
            this.userData.username = this.userOne.userName
            this.userData.userpassword = this.userOne.userPassword  
       },

       bilgilerigetir(GetuserId){

           
           
          this.$appAxios
          .get(`/User/`+GetuserId)
          .then(response => {
            this.userOne=response.data;
            this.addPersonData();
        })
        .catch(e => alert(e.response.data));
       },

       guncelle(updateUserId){
          let updateUserValue = {userId:this.userData.userid,userType:this.userData.usertype,
          userFirstName:this.userData.userfname,userLastName:this.userData.userlname,userPhone:this.userData.userphone,
          userEmail:this.userData.useremail,userName:this.userData.username,userPassword:this.userData.userpassword}
         
           this.$appAxios
          .put("/User/"+updateUserId, updateUserValue)

            .then(response => {
              this.refreshUsersList();
              alert("Güncelleme işlemi yapıldı")
        })
        .catch(e => console.log(e));
       },

       refreshUsersList(){
        this.$appAxios
        .get(`/User`)
        .then(login_response => {
          if (login_response?.data?.length > 0) {
            this.tableData=login_response.data;
          }
           else {
            alert("Sistemde Kullanıcı Bulunmamakta... :(");
          }
        })
        .catch(e => console.log(e));
       }
  },
  created: function(){
    this.refreshUsersList();
    }
}
</script>
