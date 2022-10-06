<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        My Account
      </CDropdownHeader>
      <!--<CDropdownItem> <CIcon icon="cil-user" /> <button @click="profile" color="primary" class="px-2">Profile</button> </CDropdownItem>
      -->
      
      
      <CDropdownDivider />


      <CDropdownItem> <CIcon icon="cil-lock-locked" /> <button @click="kapat" color="primary" class="px-2">Logout</button> </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/9.jpg'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
  methods: {
    kapat(){
      this.$router.push({ name: "Home" });
    },
   /* profile(){
      
      if (1===1)
      {this.$router.push({ name: "USERS LIST"});}
    }*/
  },
}
</script>
